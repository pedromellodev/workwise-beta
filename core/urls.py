from django.contrib import admin
from django.urls import path
from ninja import NinjaAPI
from employees.api import router as employees_router
from employees import views

api = NinjaAPI()

api.add_router("/employees/", employees_router)

urlpatterns = [
    path("api/", api.urls),
    path('admin/', admin.site.urls),
    path('login/', views.login_page, name='login_page'),
    path('register/', views.register_page, name='register_page'),
]