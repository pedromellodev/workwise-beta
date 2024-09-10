from django.db import models
from funcionarios.models import FuncProfile
from datetime import datetime
from workspace.utils.validators import RgValidator, CPFValidator, PISValidator
from .constants import (
    funci_escolaridade, funci_status, banco_choices,
    banco_tipo, cargo_choices, contrato_empresa,
    contrato_tipo
)
# Create your models here.

# TODOs: Melhorar models; Resolver caso dos updated_at(ou só apagar msm); Refazer avaliacao

# * Esse basemodel serve como tabela base para outras tabelas, onde dá para botar campos fixos 
# * e fazer as outras tabelas herdarem ela. Só tava usando por causa do updated_at, mas ele 
# * nn funfou dentro ou fora das tabelas, se vc conseguir resolver isso lhe dou um abraço
class BaseModel(models.Model):
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Funcionario(BaseModel):
    profile = models.OneToOneField(FuncProfile, on_delete=models.DO_NOTHING, blank=True, null=True)
    nome = models.CharField(max_length=50, blank=False)
    rg = models.CharField(
        max_length=12, 
        blank=False, 
        help_text="Coloque no seguinte formato: XX.XXX.XXX-X", 
        unique=True,
        validators=[RgValidator()],
        verbose_name='Registro Geral')
    cpf = models.CharField(
        max_length=14, 
        blank=False, 
        help_text="Coloque no seguinte formato: XXX.XXX.XXX-XX", 
        unique=True, 
        validators=[CPFValidator()],
        verbose_name='CPF')
    # ? o pis tem que ser apenas para funcionarios de contratp 'clt', fazer alteração
    pis = models.CharField(
        max_length=14, 
        blank=True, 
        help_text="Coloque no seguinte formato: XXX.XXXXX.XX-X", 
        unique=True,
        validators=[PISValidator()],
        verbose_name='PIS')
    dt_nasc = models.DateField(blank=True, null=False)
    escolaridade = models.CharField(max_length=3, choices=funci_escolaridade, default="EMC")
    status = models.CharField(max_length=3, choices=funci_status, default="ATV")
    # ? seguro pode ser opcional para clt, mas não sei se para outros também
    seguro = models.BooleanField(default=False, blank=True)
    is_active = models.BooleanField(default=True)
    telefone = models.CharField(
        max_length=11, 
        blank=True, 
        null=False,
        help_text="Coloque no seguinte formato: 00123456789")
    celular = models.CharField(max_length=100, blank=True)
    cep = models.CharField(max_length=8, blank=True, null=False)
    rua = models.CharField(max_length=100, blank=True)
    numero = models.IntegerField(blank=True, null=False, default=None)
    distrito = models.CharField(max_length=100, blank=True, null=False, default=None)
    bairro = models.CharField(max_length=100, blank=True, null=False, default=None)
    complemento = models.CharField(max_length=50, blank=True, null=False, default=None)

    @property
    def idade(self):
        if self.dt_nasc:
            hoje = datetime.date.today()
            return hoje.year - self.dt_nasc.year - ((hoje.month, hoje.day) < (self.dt_nasc.month, self.dt_nasc.day))
        return None

class ContaBancaria(BaseModel):
    funcionario = models.OneToOneField(Funcionario, on_delete=models.DO_NOTHING)
    '''
    # ? Pensando na criptografia, troquei o tipo de campos sensiveis como conta e agencia para char por causa da criptografia 
    # ? do fernet. Se der certo, penso em trocar outros campos sensiveis do mesmo jeito
    '''
    banco = models.CharField(max_length=2, choices=banco_choices)
    agencia = models.CharField(max_length=105)
    conta = models.CharField(max_length=105)
    tipo = models.CharField(max_length=3, choices=banco_tipo)

class Contrato(BaseModel):
    funcionario = models.OneToOneField(Funcionario, on_delete=models.DO_NOTHING)
    tipo = models.CharField(max_length=3, choices=contrato_tipo)
    supervisor = models.CharField(max_length=50, blank=False)
    horario = models.DateTimeField()
    carteira_trabalho = models.IntegerField()
    empresa_contrada = models.CharField(max_length=3, choices=contrato_empresa)

class Duracao(BaseModel):
    contrato = models.OneToOneField(Contrato, on_delete=models.DO_NOTHING)
    dt_entrada = models.DateField()
    dt_saida = models.DateField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.contrato.funcionario.nome}'

    @property
    def tempo_empresa(self):
        return self.dt_entrada - datetime.fromtimestamp(datetime.UTC)
    
class Cargo(BaseModel):
    contrato = models.OneToOneField(Contrato, verbose_name="contratos", on_delete=models.DO_NOTHING)
    cargos = models.CharField(max_length=3, choices=cargo_choices, verbose_name='cargos', default='SP'  )
    salario = models.DecimalField(max_digits=7, decimal_places=2, default=100)
    carga_hr = models.IntegerField(default=4)

class Avaliacao(BaseModel):
    contrato = models.OneToOneField(Contrato, on_delete=models.DO_NOTHING)
    avaliacao = models.DateField() #4 avaiaçoes se o funcionario nn 

class Empresa_Terceiros(BaseModel):
    contrato = models.ForeignKey(Contrato, on_delete=models.DO_NOTHING)
    nome = models.CharField(max_length=50, blank=False)
    cnpj = models.CharField(max_length=30)
    email = models.EmailField(max_length=150)
    