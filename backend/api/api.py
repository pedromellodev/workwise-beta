from .schemas import (
    FuncionarioSchema,
    ContratoSchema,
    ContaBancariaSchema,
    AvaliacaoSchema,
    CargoSchema,
    DuracaoSchema,
    EmpresaTerceirosSchema,
)
from .models import (
    Funcionario,
    ContaBancaria,
    Contrato,
    Duracao,
    Cargo,
    Avaliacao,
    Empresa_Terceiros,
)
from ninja import Router
from typing import List
from django.shortcuts import get_object_or_404
from django.forms import model_to_dict
from asgiref.sync import sync_to_async
from core.utils.crypto import cryptografia


# TODOs: Melhorar lógica das subRoutes para estarem 100 relacionadas com as tabelas pai(Funcionario e Contrato)
# TODOs: Arrumar lógica do metodo delete na SubRouter
class BaseModelRouter:
    def __init__(self, model, schema):
        self.model = model
        self.schema = schema
        self.router = Router(tags=[model.__name__])

        # Adiciona as rotas no construtor
        self.add_routes()

    def add_routes(self):
        self.read()
        self.readid()
        self.create()
        self.update()
        self.delete()

    def read(self):
        @self.router.get(
            "/",
            response=List[self.schema],
            operation_id=f"{self.model.__name__.lower()}_listar",
        )
        async def listagem(request):
            objetos = await sync_to_async(self.model.objects.all)()
            return list(objetos)

    def readid(self):
        @self.router.get(
            "{nome}/",
            response=self.schema,
            operation_id=f"{self.model.__name__.lower()}_listar_id",
        )
        async def listagem_id(request, nome: str):
            obj = await sync_to_async(get_object_or_404)(self.model, nome=nome)
            print(f"Objeto recuperado: {obj.updated_at}")
            return model_to_dict(obj)

    def create(self):
        @self.router.post(
            "/",
            response=self.schema,
            operation_id=f"{self.model.__name__.lower()}_criar",
        )
        async def create(request, data: self.schema):
            obj = self.model(**data.dict())
            await sync_to_async(obj.save)()
            return model_to_dict(obj)

    def update(self):
        @self.router.put(
            "{nome}/", operation_id=f"{self.model.__name__.lower()}_atualizar"
        )
        async def update(request, nome: str, data: self.schema):
            obj = await sync_to_async(get_object_or_404)(self.model, nome=nome)
            for attr, value in data.dict().items():
                setattr(obj, attr, value)
            await sync_to_async(obj.save)()
            return model_to_dict(obj)

    def delete(self):
        @self.router.delete(
            "{nome}/delete", operation_id=f"{self.model.__name__.lower()}_deletar"
        )
        async def delete(request, nome: str):
            obj = await sync_to_async(get_object_or_404)(self.model, nome=nome)
            await sync_to_async(obj.delete)()
            return {"success": True}


class SubModelRouter:
    def __init__(
        self, model, schema, tabela_pai, campo_tabela, cripto=None, decripto=None
    ):
        self.model = model
        self.schema = schema
        self.tabela_pai = tabela_pai
        self.campo_tabela = campo_tabela
        self.cripto = cripto
        self.decripto = decripto
        self.router = Router(tags=[model.__name__])
        self.tabela_pai_nome = f"{self.tabela_pai.__name__.lower()}"
        self.add_routes()

    def add_routes(self):
        self.readid()
        self.create()
        self.update()
        self.delete()

    def get_query(self, campo):
        obj_filho = self.model.objects.select_related(self.tabela_pai_nome).get(
            **{self.campo_tabela: campo}
        )
        print(obj_filho)
        return obj_filho

    def encryption(self, data):
        if self.cripto:
            return self.cripto(data)
        return data

    def decryption(self, data):
        if self.decripto:
            return self.decripto(data)
        return data

    def readid(self):
        @self.router.get(
            "{campo}/",
            response=self.schema,
            operation_id=f"{self.model.__name__.lower()}_listar_id",
        )
        async def listagem_id(request, campo):
            obj_filho = await sync_to_async(self.get_query)(campo)
            print(obj_filho)
            serialized_data = model_to_dict(
                obj_filho,
                fields=[f"{self.tabela_pai_nome}_id", *self.schema.__fields__.keys()],
            )
            self.decryption(serialized_data)
            print(serialized_data)
            obj = {
                f"{self.tabela_pai_nome}_id": serialized_data[self.tabela_pai_nome],
                **serialized_data,
            }
            return obj

    def create(self):
        @self.router.post(
            "{campo}/create", operation_id=f"{self.model.__name__.lower()}_criar"
        )
        async def create(request, data: self.schema, campo: int):
            obj_pai = await sync_to_async(get_object_or_404)(
                self.tabela_pai, **{self.campo_tabela: campo}
            )
            data_dict = data.dict()
            data_dict[self.campo_tabela] = campo
            data_dict[self.tabela_pai_nome] = obj_pai
            print(data_dict)
            if data_dict:
                self.encryption(data_dict)
                obj_filho = self.model(**data_dict)
                await sync_to_async(obj_filho.save)()
                return {"success": True}
            else:
                return {"success": False, "errors": data_dict.errors.as_data()}

    def update(self):
        @self.router.put(
            "{campo}/", operation_id=f"{self.model.__name__.lower()}_atualizar"
        )
        async def update(request, campo: int, data: self.schema):
            obj_filho = await sync_to_async(self.get_query)(campo)
            obj_pai = getattr(obj_filho, self.tabela_pai_nome)
            data_dict = data.dict()
            print(data_dict)
            data_dict[self.campo_tabela] = campo
            data_dict[f"{self.tabela_pai_nome}"] = obj_pai
            print(data_dict)
            if data_dict:
                for atributo, valor in data_dict.items():
                    setattr(obj_filho, atributo, valor)
                self.encryption(data_dict)
                await sync_to_async(obj_filho.save)()
                return model_to_dict(obj_filho)
            else:
                return {"success": False, "errors": data_dict.errors}

    def delete(self):
        @self.router.delete(
            "{campo}/delete", operation_id=f"{self.model.__name__.lower()}_deletar"
        )
        async def delete(request, campo):
            obj_filho = self.get_query(campo)
            await sync_to_async(obj_filho.delete)()
            return {"success": True}


# Criação das mains routers
funcionario_router = BaseModelRouter(Funcionario, FuncionarioSchema)

# Setar Cripto
cripto_banco = cryptografia(ContaBancaria, ["agencia", "conta"])

# Criação das sub routers
contrato_router = SubModelRouter(Contrato, ContratoSchema, Funcionario, "id")
conta_bancaria_router = SubModelRouter(
    ContaBancaria,
    ContaBancariaSchema,
    Funcionario,
    "id",
    cripto=cripto_banco.encrypt(),
    decripto=cripto_banco.decrypt(),
)
duracao_router = SubModelRouter(Duracao, DuracaoSchema, Contrato, "id")
cargo_router = SubModelRouter(Cargo, CargoSchema, Contrato, "id")
avaliacao_router = SubModelRouter(Avaliacao, AvaliacaoSchema, Contrato, "id")
empresa_terceiros_router = SubModelRouter(
    Empresa_Terceiros, EmpresaTerceirosSchema, Contrato, "id"
)

# Nesting Routes
funcionario_router.router.add_router(
    "{nome}/contaBancaria", conta_bancaria_router.router
)
funcionario_router.router.add_router("{nome}/contratos", contrato_router.router)
contrato_router.router.add_router("{id}/duracao", duracao_router.router)
contrato_router.router.add_router("{id}/cargo", cargo_router.router)
contrato_router.router.add_router("{id}/avaliacao", avaliacao_router.router)
contrato_router.router.add_router(
    "{id}/empreasTerceiros", empresa_terceiros_router.router
)

# bagui complicado desnecessariamente
# bem paia
# router.add_router('{nome}/contratos', contrato_router.router)
#  router.add_router('{nome}/contaBancaria', conta_bancaria_router.router)
#   router.add_router('{nome}/duracao', duracao_router.router)
#     router.add_router('{nome}/cargo', cargo_router.router)
#        router.add_router('{nome}/avaliacao', avaliacao_router.router)
#            router.add_router('{nome}/empreasTerceiros', empresa_terceiros_router.router)
#                 router.add_router('{nome}/contratos/{id}/duracao', duracao_router.router)
#                 router.add_router('{nome}/contratos/{id}/cargo', cargo_router.router)
#                  router.add_router('{nome}/contratos/{id}/avaliacao', avaliacao_router
# router.add_router('{nome}/contratos/{id}/empreasTerceiros', empresa_ter
# router.add_router('{nome}/contratos/{id}/empreasTerceiros', empresa_ter

# router.add_router('{nome}/contratos/{id}/empreasTerceiros', empresa_ter
