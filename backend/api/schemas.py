from typing import Optional
from ninja import ModelSchema
from .models import (
    Funcionario, Contrato,
    ContaBancaria, Duracao,
    Cargo, Avaliacao, Empresa_Terceiros
)
# TODOs: Melhorar lógica de schemas e resolver problema do updated_at(se nn deletar esse ngc antes)
class FuncionarioSchema(ModelSchema):
    class Meta:
        model = Funcionario
        exclude = ['updated_at']
        fields = '__all__'
        
class ContaBancariaSchema(ModelSchema):
    class Meta:
        model = ContaBancaria
        exclude = ['updated_at']
        fields_optional = '__all__'

class ContratoSchema(ModelSchema):
    class Meta:
        model = Contrato
        exclude = ['updated_at']
        fields_optional = '__all__'

class DuracaoSchema(ModelSchema):
    class Meta:
        model = Duracao
        exclude = ['updated_at']
        fields_optional = '__all__'

class CargoSchema(ModelSchema):
    class Meta:
        model = Cargo
        exclude = ['updated_at']
        fields_optional = '__all__'

class AvaliacaoSchema(ModelSchema):
    class Meta:
        model = Avaliacao
        exclude = ['updated_at']
        fields_optional = '__all__'

class EmpresaTerceirosSchema(ModelSchema):
    class Meta:
        model = Empresa_Terceiros
        exclude = ['updated_at']
        fields_optional = '__all__'


'''
class PatchFuncionarioSchema(ModelSchema):
        class Meta: model = Funcionario
        exclude = ["profile"]
        fields_optional = '__all__'
'''