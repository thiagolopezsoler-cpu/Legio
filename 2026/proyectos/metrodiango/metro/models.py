from django.db import models

# Create your models here.
lineas_db = {}
trenes_db = {}

from django.db import models


class Linea(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Estacion(models.Model):
    nombre = models.CharField(max_length=100)
    accesos = models.CharField(max_length=300)
    linea = models.ForeignKey(Linea, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre


class Tren(models.Model):
    id_tren = models.CharField(max_length=50, unique=True)
    linea = models.ForeignKey(
        Linea,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.id_tren