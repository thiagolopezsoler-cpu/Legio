from flask import Flask, request
import mysql.connector

app = Flask(__name__)

# Datos de conexion a la base de datos
# Cambiar usuario y password segun tu configuracion de MySQL
def conectar():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="Loforte_2008",
        database="copa_renault"
    )
    return conexion

# Trae los partidos de un deporte especifico desde la base de datos
def obtener_partidos(deporte_nombre):
    conexion = conectar()
    cursor = conexion.cursor(dictionary=True)

    consulta = """
        SELECT p.id, p.hora, e1.nombre AS local, e2.nombre AS visitante,
        p.goles_equipo1, p.goles_equipo2
        FROM partidos p
        JOIN equipos e1 ON p.equipo1_id = e1.id
        JOIN equipos e2 ON p.equipo2_id = e2.id
        JOIN deportes d ON e1.deporte_id = d.id
        WHERE d.nombre = %s
        ORDER BY p.hora
    """
    cursor.execute(consulta, (deporte_nombre,))
    filas = cursor.fetchall()

    cursor.close()
    conexion.close()

    partidos = []
    for fila in filas:
        if fila["goles_equipo1"] is None or fila["goles_equipo2"] is None:
            resultado = "vs"
        else:
            resultado = str(fila["goles_equipo1"]) + " - " + str(fila["goles_equipo2"])

        hora = str(fila["hora"])
        # Recorta segundos si vienen en el formato HH:MM:SS
        if len(hora) == 8:
            hora = hora[0:5]

        partidos.append({
            "id": fila["id"],
            "hora": hora,
            "local": fila["local"],
            "visitante": fila["visitante"],
            "resultado": resultado
        })

    return partidos

# Trae un partido puntual con todos sus datos, para precargar el formulario de edicion
def obtener_partido_por_id(partido_id):
    conexion = conectar()
    cursor = conexion.cursor(dictionary=True)
    consulta = """
        SELECT p.id, p.equipo1_id, p.equipo2_id, p.fecha, p.hora,
        p.goles_equipo1, p.goles_equipo2, e1.deporte_id
        FROM partidos p
        JOIN equipos e1 ON p.equipo1_id = e1.id
        WHERE p.id = %s
    """
    cursor.execute(consulta, (partido_id,))
    fila = cursor.fetchone()
    cursor.close()
    conexion.close()
    return fila

# Actualiza un partido existente en la base de datos
def actualizar_partido(partido_id, equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado):
    conexion = conectar()
    cursor = conexion.cursor()
    consulta = """
        UPDATE partidos
        SET equipo1_id = %s, equipo2_id = %s, fecha = %s, hora = %s,
        goles_equipo1 = %s, goles_equipo2 = %s, estado = %s
        WHERE id = %s
    """
    cursor.execute(consulta, (equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado, partido_id))
    conexion.commit()
    cursor.close()
    conexion.close()

# Calcula la tabla de posiciones de un deporte a partir de los partidos jugados
def obtener_posiciones(deporte_nombre):
    conexion = conectar()
    cursor = conexion.cursor(dictionary=True)

    # Trae todos los equipos de ese deporte
    consulta_equipos = """
        SELECT e.id, e.nombre
        FROM equipos e
        JOIN deportes d ON e.deporte_id = d.id
        WHERE d.nombre = %s
    """
    cursor.execute(consulta_equipos, (deporte_nombre,))
    equipos = cursor.fetchall()

    # Arma un diccionario con las estadisticas de cada equipo en cero
    tabla = {}
    for e in equipos:
        tabla[e["id"]] = {
            "nombre": e["nombre"],
            "jugados": 0,
            "ganados": 0,
            "empatados": 0,
            "perdidos": 0,
            "goles_favor": 0,
            "goles_contra": 0,
            "puntos": 0
        }

    # Trae solo los partidos que ya tienen resultado cargado
    consulta_partidos = """
        SELECT p.equipo1_id, p.equipo2_id, p.goles_equipo1, p.goles_equipo2
        FROM partidos p
        JOIN equipos e1 ON p.equipo1_id = e1.id
        JOIN deportes d ON e1.deporte_id = d.id
        WHERE d.nombre = %s AND p.goles_equipo1 IS NOT NULL AND p.goles_equipo2 IS NOT NULL
    """
    cursor.execute(consulta_partidos, (deporte_nombre,))
    partidos = cursor.fetchall()

    cursor.close()
    conexion.close()

    # Recorre cada partido jugado y suma las estadisticas
    for p in partidos:
        id1 = p["equipo1_id"]
        id2 = p["equipo2_id"]
        g1 = p["goles_equipo1"]
        g2 = p["goles_equipo2"]

        if id1 not in tabla or id2 not in tabla:
            continue

        tabla[id1]["jugados"] += 1
        tabla[id2]["jugados"] += 1
        tabla[id1]["goles_favor"] += g1
        tabla[id1]["goles_contra"] += g2
        tabla[id2]["goles_favor"] += g2
        tabla[id2]["goles_contra"] += g1

        if g1 > g2:
            tabla[id1]["ganados"] += 1
            tabla[id1]["puntos"] += 3
            tabla[id2]["perdidos"] += 1
        elif g2 > g1:
            tabla[id2]["ganados"] += 1
            tabla[id2]["puntos"] += 3
            tabla[id1]["perdidos"] += 1
        else:
            tabla[id1]["empatados"] += 1
            tabla[id2]["empatados"] += 1
            tabla[id1]["puntos"] += 1
            tabla[id2]["puntos"] += 1

    # Ordena de mayor a menor puntaje
    posiciones = list(tabla.values())
    posiciones.sort(key=lambda equipo: equipo["puntos"], reverse=True)
    return posiciones

# Trae los equipos de un deporte especifico, para elegir local y visitante
def obtener_equipos_por_deporte(deporte_id):
    conexion = conectar()
    cursor = conexion.cursor(dictionary=True)
    cursor.execute("SELECT id, nombre FROM equipos WHERE deporte_id = %s ORDER BY nombre", (deporte_id,))
    filas = cursor.fetchall()
    cursor.close()
    conexion.close()
    return filas

# Trae el nombre de un equipo a partir de su id
def obtener_nombre_equipo(equipo_id):
    conexion = conectar()
    cursor = conexion.cursor(dictionary=True)
    cursor.execute("SELECT nombre FROM equipos WHERE id = %s", (equipo_id,))
    fila = cursor.fetchone()
    cursor.close()
    conexion.close()
    if fila:
        return fila["nombre"]
    return "Equipo"

# Guarda un partido nuevo en la base de datos
def agregar_partido(equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado):
    conexion = conectar()
    cursor = conexion.cursor()
    consulta = """
        INSERT INTO partidos (equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(consulta, (equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado))
    conexion.commit()
    cursor.close()
    conexion.close()

# Trae la lista de deportes para armar el select del formulario
def obtener_deportes():
    conexion = conectar()
    cursor = conexion.cursor(dictionary=True)
    cursor.execute("SELECT id, nombre FROM deportes ORDER BY nombre")
    filas = cursor.fetchall()
    cursor.close()
    conexion.close()
    return filas

# Guarda un equipo nuevo en la base de datos
def agregar_equipo(nombre, colegio, deporte_id, cantidad_jugadores):
    conexion = conectar()
    cursor = conexion.cursor()
    consulta = """
        INSERT INTO equipos (nombre, colegio, deporte_id, cantidad_jugadores)
        VALUES (%s, %s, %s, %s)
    """
    cursor.execute(consulta, (nombre, colegio, deporte_id, cantidad_jugadores))
    conexion.commit()
    cursor.close()
    conexion.close()

# Arma el formulario html con el select de deportes cargado desde la base
def hacer_formulario_equipo():
    deportes = obtener_deportes()
    opciones = ""
    for d in deportes:
        opciones += "<option value='" + str(d["id"]) + "'>" + d["nombre"] + "</option>"

    html = """
    <form class="formulario" method="POST" action="/agregar_equipo">
        <label>Nombre del equipo</label>
        <input type="text" name="nombre" required>

        <label>Colegio</label>
        <input type="text" name="colegio">

        <label>Deporte</label>
        <select name="deporte_id" required>
    """ + opciones + """
        </select>

        <label>Cantidad de jugadores</label>
        <input type="number" name="cantidad_jugadores" min="1">

        <button type="submit" class="boton">Guardar equipo</button>
    </form>
    """
    return html

# Primer paso del formulario de partido, elegir el deporte
def hacer_formulario_elegir_deporte():
    deportes = obtener_deportes()
    opciones = ""
    for d in deportes:
        opciones += "<option value='" + str(d["id"]) + "'>" + d["nombre"] + "</option>"

    html = """
    <form class="formulario" method="GET" action="/agregar_partido">
        <label>Deporte</label>
        <select name="deporte_id" required>
    """ + opciones + """
        </select>
        <button type="submit" class="boton">Continuar</button>
    </form>
    """
    return html

# Segundo paso del formulario de partido, elegir equipos y cargar el resultado
def hacer_formulario_partido(deporte_id):
    equipos = obtener_equipos_por_deporte(deporte_id)
    opciones = ""
    for e in equipos:
        opciones += "<option value='" + str(e["id"]) + "'>" + e["nombre"] + "</option>"

    html = """
    <form class="formulario" method="POST" action="/guardar_partido">
        <input type="hidden" name="deporte_id" value=\"""" + str(deporte_id) + """\">

        <label>Equipo local</label>
        <select name="equipo1_id" required>
    """ + opciones + """
        </select>

        <label>Equipo visitante</label>
        <select name="equipo2_id" required>
    """ + opciones + """
        </select>

        <label>Fecha</label>
        <input type="date" name="fecha" required>

        <label>Hora</label>
        <input type="time" name="hora" required>

        <label>Goles equipo local (dejar vacio si aun no se jugo)</label>
        <input type="number" name="goles_equipo1" min="0">

        <label>Goles equipo visitante (dejar vacio si aun no se jugo)</label>
        <input type="number" name="goles_equipo2" min="0">

        <button type="submit" class="boton">Guardar partido</button>
    </form>
    """
    return html

# Arma la tabla html con la lista de partidos
def hacer_tabla(partidos):
    html = "<table><tr><th>Hora</th><th>Local</th><th>Resultado</th><th>Visitante</th><th></th></tr>"
    for p in partidos:
        html += "<tr><td>" + p["hora"] + "</td><td>" + p["local"] + "</td><td>" + p["resultado"] + "</td><td>" + p["visitante"] + "</td>"
        html += "<td><a href='/editar_partido/" + str(p["id"]) + "'><button class='boton boton-chico'>Editar</button></a></td></tr>"
    html += "</table>"
    return html

# Arma la tabla html de posiciones
def hacer_tabla_posiciones(posiciones):
    html = "<table><tr><th>Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>Pts</th></tr>"
    for e in posiciones:
        html += "<tr><td>" + e["nombre"] + "</td>"
        html += "<td>" + str(e["jugados"]) + "</td>"
        html += "<td>" + str(e["ganados"]) + "</td>"
        html += "<td>" + str(e["empatados"]) + "</td>"
        html += "<td>" + str(e["perdidos"]) + "</td>"
        html += "<td>" + str(e["goles_favor"]) + "</td>"
        html += "<td>" + str(e["goles_contra"]) + "</td>"
        html += "<td>" + str(e["puntos"]) + "</td></tr>"
    html += "</table>"
    return html

# Arma el formulario de edicion, precargado con los datos actuales del partido
def hacer_formulario_editar_partido(partido):
    equipos = obtener_equipos_por_deporte(partido["deporte_id"])

    opciones_local = ""
    opciones_visitante = ""
    for e in equipos:
        seleccionado_local = ""
        seleccionado_visitante = ""
        if e["id"] == partido["equipo1_id"]:
            seleccionado_local = "selected"
        if e["id"] == partido["equipo2_id"]:
            seleccionado_visitante = "selected"

        opciones_local += "<option value='" + str(e["id"]) + "' " + seleccionado_local + ">" + e["nombre"] + "</option>"
        opciones_visitante += "<option value='" + str(e["id"]) + "' " + seleccionado_visitante + ">" + e["nombre"] + "</option>"

    fecha = str(partido["fecha"])

    hora = str(partido["hora"])
    if len(hora) == 8:
        hora = hora[0:5]

    goles_equipo1 = partido["goles_equipo1"]
    if goles_equipo1 is None:
        goles_equipo1 = ""

    goles_equipo2 = partido["goles_equipo2"]
    if goles_equipo2 is None:
        goles_equipo2 = ""

    html = """
    <form class="formulario" method="POST" action="/actualizar_partido">
        <input type="hidden" name="partido_id" value=\"""" + str(partido["id"]) + """\">

        <label>Equipo local</label>
        <select name="equipo1_id" required>
    """ + opciones_local + """
        </select>

        <label>Equipo visitante</label>
        <select name="equipo2_id" required>
    """ + opciones_visitante + """
        </select>

        <label>Fecha</label>
        <input type="date" name="fecha" value=\"""" + fecha + """\" required>

        <label>Hora</label>
        <input type="time" name="hora" value=\"""" + hora + """\" required>

        <label>Goles equipo local (dejar vacio si aun no se jugo)</label>
        <input type="number" name="goles_equipo1" min="0" value=\"""" + str(goles_equipo1) + """\">

        <label>Goles equipo visitante (dejar vacio si aun no se jugo)</label>
        <input type="number" name="goles_equipo2" min="0" value=\"""" + str(goles_equipo2) + """\">

        <button type="submit" class="boton">Guardar cambios</button>
    </form>
    """
    return html

# Enlace al css externo, se repite en cada pagina
def encabezado():
    return "<link rel='stylesheet' href='/static/style.css'>"

@app.route("/")
def inicio():
    return encabezado() + """
    <h1>Copa Renault</h1>
    <div class="menu">
        <a href='/futbol'><button class='boton'>Futbol</button></a>
        <a href='/basket'><button class='boton'>Basquet</button></a>
        <a href='/volley'><button class='boton'>Voley</button></a>
        <a href='/agregar_equipo'><button class='boton'>Agregar equipo</button></a>
        <a href='/agregar_partido'><button class='boton'>Agregar partido</button></a>
    </div>
    """

@app.route("/futbol")
def futbol():
    partidos = obtener_partidos("Futbol")
    posiciones = obtener_posiciones("Futbol")
    return encabezado() + "<h1>Copa Renault</h1><h2>Futbol</h2>" + hacer_tabla(partidos) + "<h2>Tabla de posiciones</h2>" + hacer_tabla_posiciones(posiciones) + "<br><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/basket")
def basket():
    partidos = obtener_partidos("Basquet")
    posiciones = obtener_posiciones("Basquet")
    return encabezado() + "<h1>Copa Renault</h1><h2>Basquet</h2>" + hacer_tabla(partidos) + "<h2>Tabla de posiciones</h2>" + hacer_tabla_posiciones(posiciones) + "<br><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/volley")
def volley():
    partidos = obtener_partidos("Voley")
    posiciones = obtener_posiciones("Voley")
    return encabezado() + "<h1>Copa Renault</h1><h2>Voley</h2>" + hacer_tabla(partidos) + "<h2>Tabla de posiciones</h2>" + hacer_tabla_posiciones(posiciones) + "<br><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/agregar_equipo", methods=["GET"])
def mostrar_formulario_equipo():
    return encabezado() + "<h1>Copa Renault</h1><h2>Agregar equipo</h2>" + hacer_formulario_equipo() + "<br><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/agregar_equipo", methods=["POST"])
def guardar_equipo():
    nombre = request.form["nombre"]
    colegio = request.form["colegio"]
    deporte_id = request.form["deporte_id"]
    cantidad_jugadores = request.form["cantidad_jugadores"]

    # Si no cargaron cantidad de jugadores, lo dejamos en None
    if cantidad_jugadores == "":
        cantidad_jugadores = None

    agregar_equipo(nombre, colegio, deporte_id, cantidad_jugadores)

    return encabezado() + "<h1>Copa Renault</h1><h2>Equipo guardado con exito</h2><a href='/agregar_equipo'><button class='boton'>Cargar otro</button></a><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/agregar_partido", methods=["GET"])
def mostrar_formulario_partido():
    deporte_id = request.args.get("deporte_id")

    # Si todavia no eligio el deporte, muestra el primer paso
    if not deporte_id:
        return encabezado() + "<h1>Copa Renault</h1><h2>Agregar partido</h2>" + hacer_formulario_elegir_deporte() + "<br><a href='/'><button class='boton'>Regresar</button></a>"

    # Si ya eligio el deporte, muestra el segundo paso con los equipos
    return encabezado() + "<h1>Copa Renault</h1><h2>Agregar partido</h2>" + hacer_formulario_partido(deporte_id) + "<br><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/guardar_partido", methods=["POST"])
def guardar_partido():
    equipo1_id = request.form["equipo1_id"]
    equipo2_id = request.form["equipo2_id"]
    fecha = request.form["fecha"]
    hora = request.form["hora"]
    goles_equipo1 = request.form["goles_equipo1"]
    goles_equipo2 = request.form["goles_equipo2"]

    if goles_equipo1 == "":
        goles_equipo1 = None
    if goles_equipo2 == "":
        goles_equipo2 = None

    # Si ya estan cargados los dos goles, el partido queda finalizado
    if goles_equipo1 is not None and goles_equipo2 is not None:
        estado = "finalizado"
    else:
        estado = "pendiente"

    agregar_partido(equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado)

    # Arma el mensaje indicando el ganador, si el partido ya tiene resultado
    nombre_local = obtener_nombre_equipo(equipo1_id)
    nombre_visitante = obtener_nombre_equipo(equipo2_id)

    if estado == "finalizado":
        goles_equipo1 = int(goles_equipo1)
        goles_equipo2 = int(goles_equipo2)
        if goles_equipo1 > goles_equipo2:
            mensaje = "Gano " + nombre_local
        elif goles_equipo2 > goles_equipo1:
            mensaje = "Gano " + nombre_visitante
        else:
            mensaje = "Empate"
    else:
        mensaje = "Partido cargado como pendiente"

    return encabezado() + "<h1>Copa Renault</h1><h2>Partido guardado</h2><p>" + mensaje + "</p><a href='/agregar_partido'><button class='boton'>Cargar otro</button></a><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/editar_partido/<int:partido_id>", methods=["GET"])
def mostrar_formulario_editar_partido(partido_id):
    partido = obtener_partido_por_id(partido_id)

    if not partido:
        return encabezado() + "<h1>Copa Renault</h1><h2>El partido no existe</h2><a href='/'><button class='boton'>Regresar</button></a>"

    return encabezado() + "<h1>Copa Renault</h1><h2>Editar partido</h2>" + hacer_formulario_editar_partido(partido) + "<br><a href='/'><button class='boton'>Regresar</button></a>"

@app.route("/actualizar_partido", methods=["POST"])
def actualizar_partido_ruta():
    partido_id = request.form["partido_id"]
    equipo1_id = request.form["equipo1_id"]
    equipo2_id = request.form["equipo2_id"]
    fecha = request.form["fecha"]
    hora = request.form["hora"]
    goles_equipo1 = request.form["goles_equipo1"]
    goles_equipo2 = request.form["goles_equipo2"]

    if goles_equipo1 == "":
        goles_equipo1 = None
    if goles_equipo2 == "":
        goles_equipo2 = None

    if goles_equipo1 is not None and goles_equipo2 is not None:
        estado = "finalizado"
    else:
        estado = "pendiente"

    actualizar_partido(partido_id, equipo1_id, equipo2_id, fecha, hora, goles_equipo1, goles_equipo2, estado)

    nombre_local = obtener_nombre_equipo(equipo1_id)
    nombre_visitante = obtener_nombre_equipo(equipo2_id)

    if estado == "finalizado":
        goles_equipo1 = int(goles_equipo1)
        goles_equipo2 = int(goles_equipo2)
        if goles_equipo1 > goles_equipo2:
            mensaje = "Gano " + nombre_local
        elif goles_equipo2 > goles_equipo1:
            mensaje = "Gano " + nombre_visitante
        else:
            mensaje = "Empate"
    else:
        mensaje = "Partido cargado como pendiente"

    return encabezado() + "<h1>Copa Renault</h1><h2>Partido actualizado</h2><p>" + mensaje + "</p><a href='/'><button class='boton'>Regresar</button></a>"

if __name__ == "__main__":
    app.run(debug=True)