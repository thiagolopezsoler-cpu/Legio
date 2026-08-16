from django.db import models


class Linea(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    def validar_flota(self):
        estaciones = self.estacion_set.count()
        trenes = self.tren_set.count()

        if estaciones == 0:
            return False

        return estaciones <= trenes <= estaciones * 2

    def obtener_todos_accesos(self):
        accesos = []

        for estacion in self.estacion_set.all():
            for acceso in estacion.accesos.split(","):
                acceso = acceso.strip()

                if acceso:
                    accesos.append(
                        f"{acceso} ({estacion.nombre})"
                    )

        return accesos

    def __str__(self):
        return self.nombre


class Estacion(models.Model):
    nombre = models.CharField(max_length=100)
    accesos = models.TextField()
    linea = models.ForeignKey(
        Linea,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.nombre


class Tren(models.Model):
    id_tren = models.CharField(
        max_length=100,
        unique=True
    )

    linea = models.ForeignKey(
        Linea,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.id_tren