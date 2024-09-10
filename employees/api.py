from ninja import Router
from django.contrib.auth.models import User
from .schemas import RegisterSchema, LoginSchema
from django.contrib.auth import authenticate, login

router = Router()

@router.post("/register")
def register(request, payload: RegisterSchema):
    if User.objects.filter(username=payload.username).exists():
        return {"error": "Username already exists"}
    
    user = User.objects.create_user(username=payload.username, email=payload.email, password=payload.password)
    user.save()
    return {"success": "User created successfully"}

@router.post("/login")
def login_view(request, payload: LoginSchema):
    user = authenticate(username=payload.username, password=payload.password)
    
    if user is not None:
        login(request, user)
        return {"success": "Logged in successfully"}
    return {"error": "Invalid username or password"}