from ninja import NinjaAPI
from api.api import funcionario_router
from employees.api import router as employees_router
from ninja.parser import Parser
from ninja.security import django_auth
from django.http import HttpRequest
import orjson
     
class ORJSONParser(Parser):
    def parse_body(self, request:HttpRequest):
        return orjson.loads(request.body)
    
api = NinjaAPI(parser=ORJSONParser(), urls_namespace='api')
user = NinjaAPI(parser=ORJSONParser(), urls_namespace='users', auth=django_auth)

api.add_router("/funcionarios/", funcionario_router.router)
user.add_router('', employees_router)