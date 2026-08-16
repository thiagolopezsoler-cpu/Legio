from flask import Flask, render_template_string, request, redirect

app = Flask(__name__)

# LÓGICA 
class Estacion:
    def __init__(self, nombre, accesos_str):
        self.nombre = nombre
        self.accesos = [a.strip() for a in accesos_str.split(",") if a.strip()]

class Tren:
    def __init__(self, id_tren, coche="Cochera Central"):
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


# BASE DE DATOS 
lineas_db = {}
trenes_db = {}

# Probamos
lineas_db["Línea 1"] = Linea("Línea 1")
lineas_db["Línea 2"] = Linea("Línea 2")

lineas_db["Línea 1"].estaciones.append(Estacion("Portazgo", "Acceso Albufera, Acceso Sierra"))
lineas_db["Línea 1"].estaciones.append(Estacion("Sol", "Acceso Mayor"))

trenes_db["Tren-01"] = Tren("Tren-01")
trenes_db["Tren-02"] = Tren("Tren-02")


# DISEÑO VISUAL 

PLANTILLA_HTML = """
<!DOCTYPE html>
<html>
<head>
    <title>Panel de Metro - MODO OSCURO</title>
    <style>
        body { 
            font-family: 'Segoe UI', sans-serif; 
            margin: 30px; 
            background-color: #000000; 
            color: #ffffff; 
        }
        
        h1 { 
            color: #ffffff; 
            text-align: center; 
            border-bottom: 3px solid #ff3333; 
            padding-bottom: 10px;
        }
        
        h2 { 
            color: #ff3333; 
            margin-top: 0; 
        }
        
        h3 { 
            color: #ffffff; 
            margin: 0; 
        }
        
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        
        .card { 
            background: #111111; 
            padding: 20px; 
            border-radius: 6px; 
            border: 1px solid #333333; 
            margin-bottom: 20px; 
        }
        
        .linea-box {
            background: #1a1a1a;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 15px;
            border-left: 5px solid #ff3333;
        }
        
        form { margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap; }
        
        input, select { 
            padding: 8px; 
            background-color: #222222; 
            color: #ffffff; 
            border: 1px solid #444444; 
            border-radius: 4px; 
        }
        
        button { 
            background-color: #ffffff; 
            color: #000000; 
            cursor: pointer; 
            border: none; 
            padding: 8px 12px; 
            border-radius: 4px; 
            font-weight: bold; 
        }
        button:hover { background-color: #e0e0e0; }
        <
        button.danger { 
            background-color: #ff3333; 
            color: #ffffff; 
        }
        button.danger:hover { background-color: #cc0000; }
        
        .badge-ok { color: #00ff00; font-weight: bold; }
        .badge-error { color: #ff3333; font-weight: bold; }
        
        ul, ol { padding-left: 20px; color: #cccccc; }
        .item-lista { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
        hr { border: 0; border-top: 1px solid #333333; margin: 15px 0; }
    </style>
</head>
<body>

    <h1>SISTEMA DE METRO</h1>
    
    <div class="grid">
        
        <div class="card">
            <h2>Líneas Activas</h2>
            {% if not lineas %}
                <p>No hay líneas registradas.</p>
            {% endif %}
            
            {% for nombre_l, linea in lineas.items() %}
                <div class="linea-box">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3>{{ linea.nombre }}</h3>
                        <form action="/linea/eliminar" method="POST" style="margin: 0;">
                            <input type="hidden" name="nombre_linea" value="{{ linea.nombre }}">
                            <button type="submit" class="danger">Eliminar</button>
                        </form>
                    </div>
                    <hr>
                    
                    <p><strong>Estaciones (Orden):</strong></p>
                    <ol>
                        {% for est in linea.estaciones %}
                            <li><span style="color: #fff;">{{ est.nombre }}</span> <small style="color: #888;">[Accesos: {{ est.accesos|join(', ') }}]</small></li>
                        {% endfor %}
                    </ol>

                    <p><strong>Trenes asignados:</strong></p>
                    <ul>
                        {% for tren in linea.trenes %}
                            <li class="item-lista">
                                <span>🚂 {{ tren.id_tren }}</span>
                                <form action="/tren/mover" method="POST" style="margin:0;">
                                    <input type="hidden" name="id_tren" value="{{ tren.id_tren }}">
                                    <input type="hidden" name="destino_linea" value="NINGUNA">
                                    <button type="submit" class="danger" style="padding: 2px 6px; font-size: 11px;">Sacar</button>
                                </form>
                            </li>
                        {% endfor %}
                    </ul>

                    <p><strong>Estado:</strong> 
                        {% if linea.validar_flota() %}
                            <span class="badge-ok">✔ FLOTA OK ({{ linea.trenes|length }} trenes)</span>
                        {% else %}
                            <span class="badge-error">✘ ALERTA FLOTA (Min: {{ linea.estaciones|length }} / Max: {{ linea.estaciones|length * 2 }})</span>
                        {% endif %}
                    </p>
                    
                    <p style="font-size: 13px; color: #aaa;"><strong>Accesos totales:</strong> {{ linea.obtener_todos_accesos()|join(' | ') if linea.obtener_todos_accesos() else 'Ninguno' }}</p>
                </div>
            {% endfor %}
        </div>

        <div>
            <div class="card">
                <h2>[+] Crear Línea</h2>
                <form action="/linea/crear" method="POST">
                    <input type="text" name="nombre_linea" placeholder="Nombre (Ej: Línea 3)" required>
                    <button type="submit">Crear</button>
                </form>
            </div>

            <div class="card">
                <h2>[+] Añadir Estación</h2>
                <form action="/estacion/crear" method="POST">
                    <select name="nombre_linea" required>
                        {% for nombre in lineas.keys() %}
                            <option value="{{ nombre }}">{{ nombre }}</option>
                        {% endfor %}
                    </select>
                    <input type="text" name="nombre_estacion" placeholder="Nombre Estación" required>
                    <input type="text" name="accesos" placeholder="Accesos (separados por comas)" required>
                    <button type="submit">Insertar al Final</button>
                </form>
            </div>

            <div class="card">
                <h2>[⚙] Inventario Global de Trenes</h2>
                <form action="/tren/crear" method="POST">
                    <input type="text" name="id_tren" placeholder="ID del Tren (Ej: T-04)" required>
                    <button type="submit">Registrar</button>
                </form>
                
                <h4 style="color: #888; margin-bottom: 5px;">Estado de Unidades:</h4>
                <ul>
                    {% for id_t, tren in trenes.items() %}
                        <li class="item-lista">
                            <span>⚫ <strong>{{ tren.id_tren }}</strong> ➔ <span style="color: #ff3333;">{{ tren.linea.nombre if tren.linea else 'En Cochera' }}</span></span>
                            <form action="/tren/eliminar" method="POST" style="margin:0;">
                                <input type="hidden" name="id_tren" value="{{ tren.id_tren }}">
                                <button type="submit" class="danger" style="padding: 2px 6px; font-size: 11px;">Eliminar</button>
                            </form>
                        </li>
                    {% endfor %}
                </ul>
            </div>

            <div class="card" style="border: 1px solid #ff3333;">
                <h2>[⇄] Desplegar / Mover Tren</h2>
                <form action="/tren/mover" method="POST">
                    <select name="id_tren" required>
                        <option value="" disabled selected>Selecciona Unidad</option>
                        {% for id_t in trenes.keys() %}
                            <option value="{{ id_t }}">{{ id_t }}</option>
                        {% endfor %}
                    </select>
                    
                    <span style="align-self: center; color: #ff3333;">➔</span>
                    
                    <select name="destino_linea" required>
                        <option value="NINGUNA">Retirar a Cochera (Libre)</option>
                        {% for nombre in lineas.keys() %}
                            <option value="{{ nombre }}">{{ nombre }}</option>
                        {% endfor %}
                    </select>
                    <button type="submit" class="danger">Ejecutar Movimiento</button>
                </form>
            </div>

        </div>
    </div>

</body>
</html>
"""


# RUTAS

@app.route('/')
def index():
    return render_template_string(PLANTILLA_HTML, lineas=lineas_db, trenes=trenes_db)

@app.route('/linea/crear', methods=['POST'])
def crear_linea():
    nombre = request.form['nombre_linea'].strip()
    if nombre and nombre not in lineas_db:
        lineas_db[nombre] = Linea(nombre)
    return redirect('/')

@app.route('/linea/eliminar', methods=['POST'])
def eliminar_linea():
    nombre = request.form['nombre_linea']
    if nombre in lineas_db:
        for tren in lineas_db[nombre].trenes:
            tren.linea = None
        del lineas_db[nombre]
    return redirect('/')

@app.route('/estacion/crear', methods=['POST'])
def crear_estacion():
    nombre_linea = request.form['nombre_linea']
    nombre_estacion = request.form['nombre_estacion'].strip()
    accesos = request.form['accesos']
    
    if nombre_linea in lineas_db and nombre_estacion:
        nueva_estacion = Estacion(nombre_estacion, accesos)
        lineas_db[nombre_linea].estaciones.append(nueva_estacion)
    return redirect('/')

@app.route('/tren/crear', methods=['POST'])
def crear_tren():
    id_tren = request.form['id_tren'].strip()
    if id_tren and id_tren not in trenes_db:
        trenes_db[id_tren] = Tren(id_tren)
    return redirect('/')

@app.route('/tren/eliminar', methods=['POST'])
def eliminar_tren():
    id_tren = request.form['id_tren']
    if id_tren in trenes_db:
        tren = trenes_db[id_tren]
        if tren.linea:
            tren.linea.trenes.remove(tren)
        del trenes_db[id_tren]
    return redirect('/')

@app.route('/tren/mover', methods=['POST'])
def mover_tren():
    id_tren = request.form.get('id_tren')
    destino_linea = request.form.get('destino_linea')
    
    tren = trenes_db.get(id_tren)
    if not tren:
        return redirect('/')

    if tren.linea:
        tren.linea.trenes.remove(tren)
        tren.linea = None
    
    if destino_linea in lineas_db:
        linea_destino = lineas_db[destino_linea]
        linea_destino.trenes.append(tren)
        tren.linea = linea_destino

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
