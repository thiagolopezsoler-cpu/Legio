from django.urls import path
from . import views

urlpatterns = [
    path("nuevo_alumno/", views.nuevo_alumno, name="nuevo_alumno"),
]
