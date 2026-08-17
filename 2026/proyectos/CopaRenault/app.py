from flask import Flask, render_template, jsonify, request, session, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import qrcode
import uuid

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:@localhost/RenaultCup"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = "clave-copa-renault"

db = SQLAlchemy(app)


class Entrada(db.Model):
    __tablename__ = "entrada"

    id_entrada = db.Column(db.Integer, primary_key=True)
    Email = db.Column(db.String(40), nullable=False)
    tipo = db.Column(db.String(30), nullable=False)
    precio = db.Column(db.Numeric(10, 2), nullable=False)
    estado = db.Column(db.String(20), nullable=False)
    fecha_compra = db.Column(db.DateTime)
    codigo_qr = db.Column(db.String(100), unique=True)

class Usuario(db.Model):
    __tablename__ = "Cuenta_habilitada"

    Nombre = db.Column(db.String(100))
    Email = db.Column(db.String(100), unique=True, primary_key=True)
    Contraseña = db.Column(db.String(100))
    rango = db.Column(db.String(20))

@app.route("/admin")
def admin():
    if "usuario" not in session:
        return redirect(url_for("login_page"))

    usuario = Usuario.query.filter_by(Email=session["usuario"]).first()

    if not usuario or usuario.rango != "C":
        return "No tenés permisos para acceder a esta sección", 403

    partidos = Partido.query.all()

    return render_template("admin.html", partidos=partidos)

@app.route("/admin/partido/<int:id_partido>", methods=["GET"])
def editar_partido(id_partido):
    if "usuario" not in session:
        return redirect(url_for("login_page"))

    usuario = Usuario.query.filter_by(Email=session["usuario"]).first()

    if not usuario or usuario.rango != "C":
        return "No tenés permisos para acceder a esta sección", 403

    partido = Partido.query.get(id_partido)

    if not partido:
        return "Partido no encontrado", 404

    return render_template("editar_partido.html", partido=partido)

@app.route("/admin/partido/<int:id_partido>", methods=["POST"])
def guardar_edicion_partido(id_partido):
    if "usuario" not in session:
        return redirect(url_for("login_page"))

    usuario = Usuario.query.filter_by(Email=session["usuario"]).first()

    if not usuario or usuario.rango != "C":
        return "No tenés permisos para realizar esta acción", 403

    partido = Partido.query.get(id_partido)

    if not partido:
        return "Partido no encontrado", 404

    partido.Fase = request.form["fase"]
    partido.Horario_inicio = request.form["horario_inicio"]
    partido.Horario_final = request.form["horario_final"]

    try:
        db.session.commit()
        return redirect(url_for("admin"))

    except Exception as e:
        db.session.rollback()
        return f"Error al guardar los cambios: {e}"

@app.route("/entradas")
def entradas():
    if "usuario" not in session:
        return redirect(url_for("login_page"))

    return render_template("entradas.html")

@app.route("/mis-entradas")
def mis_entradas():
    if "usuario" not in session:
        return redirect(url_for("login_page"))

    entradas = Entrada.query.filter_by(Email=session["usuario"]).all()

    for entrada in entradas:
        if entrada.codigo_qr:
            archivo_qr = f"static/qr/entrada_{entrada.id_entrada}.png"

            try:
                qr = qrcode.make(entrada.codigo_qr)
                qr.save(archivo_qr)
            except Exception as e:
                print(f"Error generando QR: {e}")

    return render_template("mis_entradas.html", entradas=entradas)

@app.route("/comprar-entrada", methods=["POST"])
def comprar_entrada():
    if "usuario" not in session:
        return redirect(url_for("login_page"))

    tipo = request.form["tipo"]

    if tipo == "General":
        precio = 5000
    else:
        precio = 3000
    codigo = str(uuid.uuid4())
    nueva_entrada = Entrada(
        Email=session["usuario"],
        tipo=tipo,
        precio=precio,
        estado="Pagada",
        fecha_compra=datetime.now(),
        codigo_qr=codigo
    )

    try:
        db.session.add(nueva_entrada)
        db.session.commit()

        return f"""
        <h1>Entrada comprada correctamente</h1>
        <p>Tipo: {tipo}</p>
        <p>Precio: ${precio}</p>
        <p>ID de entrada: {nueva_entrada.id_entrada}</p>
        <a href="/entradas">Volver</a>
        """

    except Exception as e:
        db.session.rollback()
        return f"Error al comprar la entrada: {e}"

@app.route("/test-db")
def test_db():
    try:
        db.session.execute(db.text("SELECT 1"))
        return "Conexion con MySQL funcionando correctamente"
    except Exception as e:
        return f"Error de conexion: {e}"

@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/partidos")
def partidos():
    deporte = request.args.get("deporte")

    if deporte:
        partidos = Partido.query.filter_by(Deporte=deporte).all()
    else:
        partidos = Partido.query.all()

    datos_partidos = []

    for partido in partidos:
        equipo1 = Equipo.query.get(partido.Equipo_1)
        equipo2 = Equipo.query.get(partido.Equipo_2)

        datos_partidos.append({
            "equipo1": equipo1.Colegio if equipo1 else "Sin equipo",
            "equipo2": equipo2.Colegio if equipo2 else "Sin equipo",
            "fase": partido.Fase,
            "inicio": partido.Horario_inicio,
            "final": partido.Horario_final
        })

    return render_template("partidos.html", partidos=datos_partidos)
@app.route("/test-usuario")
def test_usuario():
    try:
        usuarios = Usuario.query.all()

        resultado = []

        for usuario in usuarios:
            resultado.append({
                "Nombre": usuario.Nombre,
                "Email": usuario.Email,
                "rango": usuario.rango
            })

        return jsonify(resultado)

    except Exception as e:
        return f"Error al consultar usuarios: {e}"


@app.route("/login", methods=["POST"])
def login():
    email = request.form["email"]
    contraseña = request.form["contraseña"]

    usuario = Usuario.query.filter_by(Email=email).first()

    if usuario is None:
        return "El usuario no existe"

    if not check_password_hash(usuario.Contraseña, contraseña):
        return "Contraseña incorrecta"

    session["usuario"] = usuario.Email
    session["nombre"] = usuario.Nombre

    return redirect(url_for("inicio_sesion"))
@app.route("/login", methods=["GET"])
def login_page():
    return render_template("login.html")

class Equipo(db.Model):
    __tablename__ = "Equipo"

    id_equipo = db.Column(db.Integer, primary_key=True)
    Deporte = db.Column(db.String(10))
    Categoria = db.Column(db.String(10))
    Sexo = db.Column(db.String(10))
    Colegio = db.Column(db.String(50))


class Partido(db.Model):
    __tablename__ = "Partido"

    id_partido = db.Column(db.Integer, primary_key=True)
    Deporte = db.Column(db.String(1))
    Categoria = db.Column(db.String(3))
    Sexo = db.Column(db.String(1))
    Arbitro = db.Column(db.Integer)
    Planillero = db.Column(db.Integer)
    Equipo_1 = db.Column(db.Integer)
    Equipo_2 = db.Column(db.Integer)
    Fase = db.Column(db.String(25))
    Horario_inicio = db.Column(db.Time)
    Horario_final = db.Column(db.Time)

class ProductoCantina(db.Model):
    __tablename__ = "producto_cantina"

    id_producto = db.Column(db.Integer, primary_key=True)
    Nombre = db.Column(db.String(100))
    Descripcion = db.Column(db.String(255))
    Precio = db.Column(db.Numeric(10, 2))
    Disponible = db.Column(db.Boolean)

class HorarioComida(db.Model):
    __tablename__ = "horario_comida"

    id_horario = db.Column(db.Integer, primary_key=True)
    id_equipo = db.Column(db.Integer, nullable=False)
    fecha = db.Column(db.Date)
    horario_inicio = db.Column(db.Time, nullable=False)
    horario_final = db.Column(db.Time)
    zona = db.Column(db.String(50), nullable=False)

@app.route("/inicio-sesion")
def inicio_sesion():
    if "usuario" not in session:
        return redirect(url_for("inicio"))

    return render_template("inicio.html", nombre=session["nombre"])

@app.route("/comida")
def comida():
    horarios = HorarioComida.query.all()

    datos_comida = []

    for horario in horarios:
        equipo = Equipo.query.get(horario.id_equipo)

        datos_comida.append({
            "equipo": equipo.Colegio if equipo else "Sin equipo",
            "inicio": horario.horario_inicio,
            "final": horario.horario_final,
            "zona": horario.zona
        })

    return render_template("comida.html", comidas=datos_comida)

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("inicio"))

@app.route("/cantina")
def cantina():
    productos = ProductoCantina.query.filter_by(Disponible=True).all()

    return render_template("cantina.html", productos=productos)

@app.route("/registro", methods=["GET"])
def registro_page():
    return render_template("registro.html")


@app.route("/registro", methods=["POST"])
def registro():
    nombre = request.form["nombre"]
    email = request.form["email"]
    contraseña = request.form["contraseña"]

    usuario_existente = Usuario.query.filter_by(Email=email).first()

    if usuario_existente:
        return "Ese email ya está registrado"

    contraseña_hash = generate_password_hash(contraseña)

    nuevo_usuario = Usuario(
        Nombre=nombre,
        Email=email,
        Contraseña=contraseña_hash,
        rango="A"
    )

    try:
        db.session.add(nuevo_usuario)
        db.session.commit()

        return redirect(url_for("login_page"))

    except Exception as e:
        db.session.rollback()
        return f"Error al registrar usuario: {e}"

class Sponsor(db.Model):
    __tablename__ = "sponsor"

    id_sponsor = db.Column(db.Integer, primary_key=True)
    Nombre = db.Column(db.String(100), nullable=False)
    Descripcion = db.Column(db.String(255))
    Logo = db.Column(db.String(255))
    Enlace = db.Column(db.String(255))

@app.route("/sponsors")
def sponsors():
    sponsors = Sponsor.query.all()

    return render_template("sponsors.html", sponsors=sponsors)


if __name__ == "__main__":
    app.run(debug=True)