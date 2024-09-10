from django.contrib import admin
from .models import (
    Funcionario, 
    ContaBancaria, 
    Contrato, 
    Duracao, 
    Cargo, 
    Avaliacao, 
    Empresa_Terceiros
)
# Register your models here.

admin.site.register(Funcionario)
admin.site.register(ContaBancaria)
admin.site.register(Contrato)
admin.site.register(Duracao)
admin.site.register(Cargo)
admin.site.register(Avaliacao)
admin.site.register(Empresa_Terceiros)

