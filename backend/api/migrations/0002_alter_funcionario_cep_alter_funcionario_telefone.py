# Generated by Django 5.1.1 on 2024-10-09 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funcionario',
            name='cep',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='telefone',
            field=models.CharField(blank=True, help_text='Coloque no seguinte formato: 00123456789', max_length=50),
        ),
    ]
