from ninja import Router
from django.contrib.auth.models import User
from api.api import Funcionario
from .schemas import RegisterSchema, LoginSchema
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
    print(payload.dict())
    funcionario = Funcionario.objects.filter(cpf=payload.cpf).exists()
    if funcionario:
        user = User.objects.filter(username=payload.username).first()
        if User.objects.filter(username=payload.username).exists(): 
            try:
                user = await aauthenticate(username=payload.username, password=payload.password)
                print(user is None)
                if user is not None:
                    await alogin(request, user)
                    return {"data": {"success": "User authenticated", "user": {"is_staff": user.is_staff, "username": user.username}}, "status": HttpResponse.status_code}
            except:
                return {"data": {"error": "Internal Server Error"}, "status": 500}
        else:
            return {"data": {"error": "User not found"}, "status": 404}
    else:
        return {"data": {"error": "Funcionario not found"}, "status": 404}

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