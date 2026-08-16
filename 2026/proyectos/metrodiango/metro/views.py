from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Linea


def inicio(request):
    lineas = Linea.objects.all()

    return render(request, "metro/inicio.html", {
        "lineas": lineas
    })