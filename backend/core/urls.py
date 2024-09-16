from django.contrib import admin
from django.urls import path
from employees import views
from .api import api, user


urlpatterns = [
    path("api/", api.urls),
    path("users/", user.urls),
    path('admin/', admin.site.urls),
    path('login/', views.login_page, name='login_page'),
    path('register/', views.register_page, name='register_page'),
]