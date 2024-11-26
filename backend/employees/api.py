from ninja import Router
from django.contrib.auth.models import User
from api.api import Funcionario
from .schemas import RegisterSchema, LoginSchema, FuncionarioSchema
from django.contrib.auth import aauthenticate, alogin, logout
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.forms import model_to_dict
from django.http import HttpResponse

router = Router()

# * Checa se o usuario está autenticado. Importante para o context no front
@router.get("/authenticated")
def CheckAuthenticated(request):
    user = request.user
    print(user)
    try:
        isAuthenticated = user.is_authenticated

        if isAuthenticated:
            return {'isAuthenticated': 'success' }
        else:
            return { 'isAuthenticated': 'error' }
    except:
        return { 'error': 'Something went wrong when checking authentication status' }

# Ph: Função de registros de usuário
@router.post("/register", auth=None)
def register(request, payload: RegisterSchema):
    if User.objects.filter(username=payload.username).exists():
        return {"error": "Nome de usuário já existente."}

    user = User.objects.create_user(
        username=payload.username, email=payload.email, password=payload.password
    )
    user.save()
    return {"is_staff": user.is_staff, "username": user.username, "isAuthenticated": True}


@method_decorator(csrf_protect, name='dispatch')

# Ph: Função de login
@router.post("/login", auth=None)
async def login_view(request, payload: LoginSchema):
        user = User.objects.get(email__exact=payload.email)
        if user:
            print('uai')
        
        if user: 
            try:
                userAuth = await aauthenticate(email=payload.email, password=payload.password)
                print(userAuth)
                
                await alogin(request, user)
                return {"data": {"success": True, "user": {"is_staff": user.is_staff, "username": user.username}}, "redirect":"/home"}
            except:
                return {"data": {"error": "Internal Server Error"}, "status": 500}
        else:
            return {"data": {"error": "User not found"}, "status": 404}

# Ph: Função Logout
        
@router.post("/logout")
def logout_view(request):
    print(request.user)
    try:
        logout(request)
        return { 'success': 'Loggout Out' }
    except:
        return { 'error': 'Something went wrong when logging out' }


@method_decorator(ensure_csrf_cookie, name='dispatch')

# Ph: Método csrf-cookie de segurança que envia os dados ao usuário
@router.get("/csrf-cookie", auth=None)
def get_csrf_token(request):
    return {"success": "CSRF cookie set"}

# Ph: Função Atualização dos usuários com base nos payloads dos campos de RegisterSchema
@router.put("/user-update/")
def update(request, data: RegisterSchema):
    id = request.auth.id
    print(id.id)
    user = User.objects.get(username=id)
    for attr, value in data.dict().items():
        setattr(user, attr, value)
    user.save()
    return model_to_dict(user)

# Ph: Função Deleta o usuário logado
@router.delete("/user-delete/")
def delete(request):
        user = request.user
        print(user.id)

        try:
            User.objects.filter(id=user.id).delete()

            return { 'success': 'Usuário deletado com sucesso.' }
        except:
            return { 'error': 'Algo deu errado ao tentar deletar usuário.' }


# Ph: Função de listar funcionário
@router.get("/funcionarios")
def get_funcionarios(request):
    funcionarios = Funcionario.objects.all()
    return [{'id': f.id, 'name': f.name, 'cpf': f.cpf, 'status': f.status} for f in funcionarios]

# Ph: função de adicionar funcionário
@router.post("/funcionarios")
def add_funcionario(request, data: FuncionarioSchema):
    funcionario = Funcionario.objects.create(
        name=data.name,
        cpf=data.cpf,
        status=data.status
    )
    return {"id": funcionario.id, "name": funcionario.name, "cpf": funcionario.cpf, "status": funcionario.status}

# Função de atualizar funcionário
@router.put("/funcionarios/{id}")
def update_funcionario(request, id: int, data: FuncionarioSchema):
    funcionario = Funcionario.objects.get(id=id)
    for attr, value in data.dict().items():
        setattr(funcionario, attr, value)
    funcionario.save()
    return {"id": funcionario.id, "name": funcionario.name, "cpf": funcionario.cpf, "status": funcionario.status}

# Função de deletar funcionário
@router.delete("/funcionarios/{id}")
def delete_funcionario(request, id: int):
    try:
        Funcionario.objects.filter(id=id).delete()
        return {'success': 'Funcionário deletado com sucesso.'}
    except:
        return {'error': 'Erro ao tentar deletar funcionário.'}
