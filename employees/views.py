from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.contrib import messages

def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        
        # Criando o usuário
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()

        login(request, user)
        return redirect('login')
    return render(request, 'register.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            messages.error(request, 'Credenciais inválidas')
    return render(request, 'login.html')


def login_page(request):
    return render(request, 'login.html')

def register_page(request):
    return render(request, 'register.html')