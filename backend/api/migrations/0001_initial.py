# Generated by Django 5.0.7 on 2024-09-10 19:20

import core.utils.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contrato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('tipo', models.CharField(choices=[('CLT', 'Carteira de Trabalho'), ('EST', 'Estagiário')], max_length=3)),
                ('supervisor', models.CharField(max_length=50)),
                ('horario', models.DateTimeField()),
                ('carteira_trabalho', models.IntegerField()),
                ('empresa_contrada', models.CharField(choices=[('GCR', 'GCR'), ('FAJ', 'Forte Assesoria Juridica')], max_length=3)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Cargo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('cargos', models.CharField(choices=[('AP', 'Auxiliar de planejamento'), ('PS', 'Prestador de Serviço')], default='SP', max_length=3, verbose_name='cargos')),
                ('salario', models.DecimalField(decimal_places=2, default=100, max_digits=7)),
                ('carga_hr', models.IntegerField(default=4)),
                ('contrato', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='api.contrato', verbose_name='contratos')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Avaliacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('avaliacao', models.DateField()),
                ('contrato', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='api.contrato')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Duracao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('dt_entrada', models.DateField()),
                ('dt_saida', models.DateField()),
                ('is_active', models.BooleanField(default=True)),
                ('contrato', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='api.contrato')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Empresa_Terceiros',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('nome', models.CharField(max_length=50)),
                ('cnpj', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=150)),
                ('contrato', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='api.contrato')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Funcionario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('nome', models.CharField(max_length=50)),
                ('rg', models.CharField(help_text='Coloque no seguinte formato: XX.XXX.XXX-X', max_length=12, unique=True, validators=[core.utils.validators.RgValidator()], verbose_name='Registro Geral')),
                ('cpf', models.CharField(help_text='Coloque no seguinte formato: XXX.XXX.XXX-XX', max_length=14, unique=True, validators=[core.utils.validators.CPFValidator()], verbose_name='CPF')),
                ('pis', models.CharField(blank=True, help_text='Coloque no seguinte formato: XXX.XXXXX.XX-X', max_length=14, unique=True, validators=[core.utils.validators.PISValidator()], verbose_name='PIS')),
                ('dt_nasc', models.DateField(blank=True)),
                ('escolaridade', models.CharField(choices=[('PA', 'Primeiro Ano'), ('SA', 'Segundo Ano'), ('TA', 'Terceiro Ano'), ('FAC', 'facultativo'), ('NA', 'Primeiro Ano')], default='EMC', max_length=3)),
                ('status', models.CharField(choices=[('ATV', 'Ativo'), ('ABN', 'Abandono'), ('DES', 'Desligado'), ('MOR', 'Morto')], default='ATV', max_length=3)),
                ('seguro', models.BooleanField(blank=True, default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('telefone', models.CharField(blank=True, help_text='Coloque no seguinte formato: 00123456789', max_length=11)),
                ('celular', models.CharField(blank=True, max_length=100)),
                ('cep', models.CharField(blank=True, max_length=8)),
                ('rua', models.CharField(blank=True, max_length=100)),
                ('numero', models.IntegerField(blank=True, default=None)),
                ('distrito', models.CharField(blank=True, default=None, max_length=100)),
                ('bairro', models.CharField(blank=True, default=None, max_length=100)),
                ('complemento', models.CharField(blank=True, default=None, max_length=50)),
                ('profile', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='employees.employee')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='contrato',
            name='funcionario',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='api.funcionario'),
        ),
        migrations.CreateModel(
            name='ContaBancaria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('banco', models.CharField(choices=[('BR', 'Bradesco'), ('NE', 'Next')], max_length=2)),
                ('agencia', models.CharField(max_length=105)),
                ('conta', models.CharField(max_length=105)),
                ('tipo', models.CharField(choices=[('CC', 'Conta Corrente'), ('CP', 'Conta Poupança'), ('SA', 'Salário')], max_length=3)),
                ('funcionario', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='api.funcionario')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
