from django.test import TestCase
from funcionarios.profiles import FuncProfile
from api.models import Funcionario
# Create your tests here.

def run():
    user = FuncProfile.objects.last()
    funcionario = Funcionario(
        id_funcionario=5,
        profile=user,
        nome='Math',
        rg='12.345.678-9',
        cpf='155.456.789-01',
        telefone='00323456784',
        email='math@gmail.com',
        idade=18
        )

    funcionario.full_clean()
    funcionario.save()