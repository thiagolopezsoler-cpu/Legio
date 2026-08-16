from django.shortcuts import render

def nuevo_alumno(request):
    return render(request, "nuevo_alumno.html")
# views.py

from django.shortcuts import render
from .models import Linea

def inicio(request):
    lineas = Linea.objects.all()
    return render(request, "inicio.html", {"lineas": lineas})