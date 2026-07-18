import flet as ft
# // inicio de sesion, modularizacion y conexion de base de datos
class Estacion:
    def __init__(self, nombre, accesos_str):
        self.nombre = nombre
        self.accesos = [a.strip() for a in accesos_str.split(",") if a.strip()]

class Tren:
    def __init__(self, id_tren):
        self.id_tren = id_tren
        self.linea = None  

class Linea:
    def __init__(self, nombre):
        self.nombre = nombre  
        self.estaciones = []  
        self.trenes = []      

    def validar_flota(self):
        num_estaciones = len(self.estaciones)
        num_trenes = len(self.trenes)
        if num_estaciones == 0:
            return False
        return num_estaciones <= num_trenes <= (num_estaciones * 2)

    def obtener_todos_accesos(self):
        lista_accesos = []
        for estacion in self.estaciones:
            for acceso in estacion.accesos:
                lista_accesos.append(f"{acceso} ({estacion.nombre})")
        return lista_accesos

lineas_db = {}
trenes_db = {}

lineas_db["Línea 1"] = Linea("Línea 1")
lineas_db["Línea 2"] = Linea("Línea 2")
lineas_db["Línea 1"].estaciones.append(Estacion("Portazgo", "Acceso Albufera, Acceso Sierra"))
lineas_db["Línea 1"].estaciones.append(Estacion("Sol", "Acceso Mayor"))
trenes_db["Tren-01"] = Tren("Tren-01")
trenes_db["Tren-02"] = Tren("Tren-02")


def main(page: ft.Page):
    page.title = "SISTEMA DE METRO"
    page.theme_mode = ft.ThemeMode.DARK 
    page.scroll = ft.ScrollMode.AUTO

    lista_lineas_vistas = ft.Column()
    lista_trenes_vistas = ft.Column()

    dd_lineas_estacion = ft.Dropdown(label="Selecciona Línea", width=200)
    dd_trenes_mover = ft.Dropdown(label="Selecciona Unidad", width=200)
    dd_lineas_mover = ft.Dropdown(label="Línea Destino", width=200)

    borde_gris = ft.Border(
        top=ft.BorderSide(1, "grey800"),
        bottom=ft.BorderSide(1, "grey800"),
        left=ft.BorderSide(1, "grey800"),
        right=ft.BorderSide(1, "grey800")
    )

    borde_rojo = ft.Border(
        top=ft.BorderSide(1, "red"),
        bottom=ft.BorderSide(1, "red"),
        left=ft.BorderSide(1, "red"),
        right=ft.BorderSide(1, "red")
    )

    def renderizar_interfaz():
        lista_lineas_vistas.controls.clear()
        lista_trenes_vistas.controls.clear()
        dd_lineas_estacion.options.clear()
        dd_trenes_mover.options.clear()
        dd_lineas_mover.options.clear()

        dd_lineas_mover.options.append(ft.dropdown.Option("NINGUNA", "Retirar a Cochera (Libre)"))

        for nombre, linea in lineas_db.items():
            dd_lineas_estacion.options.append(ft.dropdown.Option(nombre))
            dd_lineas_mover.options.append(ft.dropdown.Option(nombre))

            estaciones_txt = []
            for i, est in enumerate(linea.estaciones, 1):
                estaciones_txt.append(ft.Text(f"{i}. {est.nombre} [Accesos: {', '.join(est.accesos)}]", color="grey400"))

            trenes_widgets = []
            for t in linea.trenes:
                def sacar_tren_click(e, id_t=t.id_tren):
                    trenes_db[id_t].linea.trenes.remove(trenes_db[id_t])
                    trenes_db[id_t].linea = None
                    renderizar_interfaz()

                trenes_widgets.append(
                    ft.Row([
                        ft.Text(f"{t.id_tren}"),
                        ft.IconButton(icon="close", icon_color="red", on_click=sacar_tren_click, tooltip="Sacar de la línea")
                    ], alignment=ft.MainAxisAlignment.SPACE_BETWEEN)
                )

            if linea.validar_flota():
                badge = ft.Text(f"FLOTA OK ({len(linea.trenes)} trenes)", color="green", weight="bold")
            else:
                badge = ft.Text(f"Flota (Min: {len(linea.estaciones)} / Max: {len(linea.estaciones)*2})", color="red", weight="bold")

            def eliminar_linea_click(e, nom_l=nombre):
                for t in lineas_db[nom_l].trenes:
                    t.linea = None
                del lineas_db[nom_l]
                renderizar_interfaz()

            caja_linea = ft.Container(
                content=ft.Column([
                    ft.Row([
                        ft.Text(linea.nombre, size=20, weight="bold"),
                        ft.ElevatedButton("Eliminar", bgcolor="red", color="white", on_click=eliminar_linea_click)
                    ], alignment=ft.MainAxisAlignment.SPACE_BETWEEN),
                    ft.Divider(),
                    ft.Text("Estaciones (Orden):", weight="bold"),
                    ft.Column(estaciones_txt) if estaciones_txt else ft.Text("Sin estaciones", color="grey"),
                    ft.Text("Trenes asignados:", weight="bold"),
                    ft.Column(trenes_widgets) if trenes_widgets else ft.Text("Sin trenes asignados", color="grey"),
                    ft.Row([ft.Text("Estado: "), badge]),
                    ft.Text(f"Accesos totales: {' | '.join(linea.obtener_todos_accesos()) if linea.obtener_todos_accesos() else 'Ninguno'}", size=12, color="grey500")
                ]), 
                padding=15, bgcolor="grey900", border_radius=5, border=borde_gris
            )
            lista_lineas_vistas.controls.append(caja_linea)

        for id_t, tren in trenes_db.items():
            dd_trenes_mover.options.append(ft.dropdown.Option(id_t))

            def eliminar_tren_click(e, id_tren=id_t):
                if trenes_db[id_tren].linea:
                    trenes_db[id_tren].linea.trenes.remove(trenes_db[id_tren])
                del trenes_db[id_tren]
                renderizar_interfaz()

            ubicacion = tren.linea.nombre if tren.linea else "En Cochera"
            
            lista_trenes_vistas.controls.append(
                ft.Row([
                    ft.Text(f"{tren.id_tren} ➔ {ubicacion}", color="red" if tren.linea else "white"),
                    ft.IconButton(icon="delete", icon_color="red", on_click=eliminar_tren_click)
                ], alignment=ft.MainAxisAlignment.SPACE_BETWEEN)
            )

        page.update()

    input_nombre_linea = ft.TextField(label="Nombre", width=200)
    def crear_linea_click(e):
        nom = input_nombre_linea.value.strip()
        if nom and nom not in lineas_db:
            lineas_db[nom] = Linea(nom)
            input_nombre_linea.value = ""
            renderizar_interfaz()

    input_nombre_estacion = ft.TextField(label="Nombre Estación", width=200)
    input_accesos = ft.TextField(label="Accesos (comas)", width=200)
    def crear_estacion_click(e):
        linea_sel = dd_lineas_estacion.value
        nom_est = input_nombre_estacion.value.strip()
        acc = input_accesos.value
        if linea_sel in lineas_db and nom_est:
            lineas_db[linea_sel].estaciones.append(Estacion(nom_est, acc))
            input_nombre_estacion.value = ""
            input_accesos.value = ""
            renderizar_interfaz()

    input_id_tren = ft.TextField(label="ID Tren", width=200)
    def crear_tren_click(e):
        id_t = input_id_tren.value.strip()
        if id_t and id_t not in trenes_db:
            trenes_db[id_t] = Tren(id_t)
            input_id_tren.value = ""
            renderizar_interfaz()

    def mover_tren_click(e):
        id_t = dd_trenes_mover.value
        destino = dd_lineas_mover.value
        tren = trenes_db.get(id_t)
        if tren:
            if tren.linea:
                tren.linea.trenes.remove(tren)
                tren.linea = None
            if destino in lineas_db:
                lineas_db[destino].trenes.append(tren)
                tren.linea = lineas_db[destino]
            renderizar_interfaz()

    columna_izquierda = ft.Column([
        ft.Text("Líneas Activas", size=24, color="red", weight="bold"),
        lista_lineas_vistas
    ], expand=True)

    columna_derecha = ft.Column([
        ft.Container(content=ft.Column([
            ft.Text("[+] Crear Línea", size=18, weight="bold"),
            ft.Row([input_nombre_linea, ft.ElevatedButton("Crear", on_click=crear_linea_click)])
        ]), padding=15, bgcolor="black", border=borde_gris),

        ft.Container(content=ft.Column([
            ft.Text("Añadir Estación", size=18, weight="bold"),
            ft.Row([dd_lineas_estacion, input_nombre_estacion, input_accesos]),
            ft.ElevatedButton("Insertar al Final", on_click=crear_estacion_click)
        ]), padding=15, bgcolor="black", border=borde_gris),

        ft.Container(content=ft.Column([
            ft.Text("Inventario Global de Trenes", size=18, weight="bold"),
            ft.Row([input_id_tren, ft.ElevatedButton("Registrar", on_click=crear_tren_click)]),
            ft.Text("Estado de Unidades:", color="grey"),
            lista_trenes_vistas
        ]), padding=15, bgcolor="black", border=borde_gris),

        ft.Container(content=ft.Column([
            ft.Text("Desplegar / Mover Tren", size=18, weight="bold"),
            ft.Row([dd_trenes_mover, ft.Text("➔", color="red"), dd_lineas_mover]),
            ft.ElevatedButton("Ejecutar Movimiento", bgcolor="red", color="white", on_click=mover_tren_click)
        ]), padding=15, bgcolor="black", border=borde_rojo)
    ], expand=True)

    page.add(
        ft.Text("SISTEMA DE METRO", size=32, weight="bold", text_align=ft.TextAlign.CENTER),
        ft.Divider(color="red", thickness=3),
        ft.Row([columna_izquierda, columna_derecha], vertical_alignment=ft.CrossAxisAlignment.START)
    )

    renderizar_interfaz()

ft.app(target=main)