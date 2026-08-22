from flask import render_template, request, redirect, url_for
from flask_login import login_user, logout_user, login_required, current_user

from app import app
from extensions import db
from models import Usuario, Materia, Inscripcion, Tarea, Entrega


# =========================
# INICIO
# =========================

@app.route("/")
def inicio():
    return render_template("inicio.html")


# =========================
# REGISTRO
# =========================

@app.route("/registro", methods=["GET", "POST"])
def registro():

    if request.method == "POST":

        nombre = request.form["nombre"]
        email = request.form["email"]
        password = request.form["password"]
        rol = request.form["rol"]

        usuario_existente = Usuario.query.filter_by(email=email).first()

        if usuario_existente:
            return "Ese email ya esta registrado"

        usuario = Usuario(
            nombre=nombre,
            email=email,
            password=password,
            rol=rol
        )

        db.session.add(usuario)
        db.session.commit()

        return redirect(url_for("login"))

    return render_template("registro.html")


# =========================
# LOGIN
# =========================

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form["email"]
        password = request.form["password"]

        usuario = Usuario.query.filter_by(email=email).first()

        if usuario and usuario.password == password:

            login_user(usuario)

            return redirect(url_for("dashboard"))

        return "Email o contraseña incorrectos"

    return render_template("login.html")


# =========================
# LOGOUT
# =========================

@app.route("/logout")
@login_required
def logout():

    logout_user()

    return redirect(url_for("inicio"))


# =========================
# DASHBOARD
# =========================

@app.route("/dashboard")
@login_required
def dashboard():

    return render_template("dashboard.html")


# =========================================================
# ALUMNO - MATERIAS
# =========================================================

@app.route("/materias")
@login_required
def materias():

    if current_user.rol != "alumno":
        return "No tenes permiso para acceder"

    inscripciones = Inscripcion.query.filter_by(
        alumno_id=current_user.id
    ).all()

    materias = []

    for inscripcion in inscripciones:

        materia = Materia.query.get(inscripcion.materia_id)

        if materia:
            materias.append(materia)

    return render_template(
        "materias.html",
        materias=materias
    )


@app.route("/materia/<int:materia_id>")
@login_required
def materia(materia_id):

    if current_user.rol != "alumno":
        return "No tenes permiso para acceder"

    inscripcion = Inscripcion.query.filter_by(
        alumno_id=current_user.id,
        materia_id=materia_id
    ).first()

    if not inscripcion:
        return "No estas inscripto en esta materia"

    materia = Materia.query.get_or_404(materia_id)

    tareas = Tarea.query.filter_by(
        materia_id=materia.id
    ).all()

    return render_template(
        "materia.html",
        materia=materia,
        tareas=tareas
    )


@app.route("/materia/<int:materia_id>/inscribirse")
@login_required
def inscribirse(materia_id):

    if current_user.rol != "alumno":
        return "No tenes permiso para acceder"

    materia = Materia.query.get_or_404(materia_id)

    inscripcion_existente = Inscripcion.query.filter_by(
        alumno_id=current_user.id,
        materia_id=materia.id
    ).first()

    if not inscripcion_existente:

        inscripcion = Inscripcion(
            alumno_id=current_user.id,
            materia_id=materia.id
        )

        db.session.add(inscripcion)
        db.session.commit()

    return redirect(url_for("materias"))


# =========================================================
# PROFESOR - MATERIAS
# =========================================================

@app.route("/profesor/materias")
@login_required
def materias_profesor():

    if current_user.rol != "profesor":
        return "No tenes permiso para acceder"

    materias = Materia.query.filter_by(
        profesor_id=current_user.id
    ).all()

    return render_template(
        "profesor/materias.html",
        materias=materias
    )


@app.route("/profesor/materia/crear", methods=["GET", "POST"])
@login_required
def crear_materia():

    if current_user.rol != "profesor":
        return "No tenes permiso para acceder"

    if request.method == "POST":

        nombre = request.form["nombre"]
        descripcion = request.form["descripcion"]

        materia = Materia(
            nombre=nombre,
            descripcion=descripcion,
            profesor_id=current_user.id
        )

        db.session.add(materia)
        db.session.commit()

        return redirect(url_for("materias_profesor"))

    return render_template(
        "profesor/materia.html",
        materia=None
    )


@app.route(
    "/profesor/materia/<int:materia_id>/editar",
    methods=["GET", "POST"]
)
@login_required
def editar_materia(materia_id):

    if current_user.rol != "profesor":
        return "No tenes permiso para acceder"

    materia = Materia.query.get_or_404(materia_id)

    if materia.profesor_id != current_user.id:
        return "No podes modificar esta materia"

    if request.method == "POST":

        materia.nombre = request.form["nombre"]
        materia.descripcion = request.form["descripcion"]

        db.session.commit()

        return redirect(url_for("materias_profesor"))

    return render_template(
        "profesor/materia.html",
        materia=materia
    )


@app.route("/profesor/materia/<int:materia_id>/eliminar")
@login_required
def eliminar_materia(materia_id):

    if current_user.rol != "profesor":
        return "No podes eliminar esta materia"

    materia = Materia.query.get_or_404(materia_id)

    if materia.profesor_id != current_user.id:
        return "No podes eliminar esta materia"

    db.session.delete(materia)
    db.session.commit()

    return redirect(url_for("materias_profesor"))


# =========================================================
# PROFESOR - TAREAS
# =========================================================

@app.route(
    "/profesor/materia/<int:materia_id>/tarea/crear",
    methods=["GET", "POST"]
)
@login_required
def crear_tarea(materia_id):

    if current_user.rol != "profesor":
        return "No tenes permiso"

    materia = Materia.query.get_or_404(materia_id)

    if materia.profesor_id != current_user.id:
        return "No podes modificar esta materia"

    if request.method == "POST":

        titulo = request.form["titulo"]
        descripcion = request.form["descripcion"]
        fecha_entrega = request.form["fecha_entrega"]

        tarea = Tarea(
            titulo=titulo,
            descripcion=descripcion,
            fecha_entrega=fecha_entrega,
            materia_id=materia.id
        )

        db.session.add(tarea)
        db.session.commit()

        return redirect(
            url_for(
                "gestionar_materia",
                materia_id=materia.id
            )
        )

    return render_template(
        "profesor/tarea.html",
        tarea=None,
        materia=materia
    )


@app.route(
    "/profesor/materia/<int:materia_id>/gestionar"
)
@login_required
def gestionar_materia(materia_id):

    if current_user.rol != "profesor":
        return "No tenes permiso"

    materia = Materia.query.get_or_404(materia_id)

    if materia.profesor_id != current_user.id:
        return "No podes acceder"

    tareas = Tarea.query.filter_by(
        materia_id=materia.id
    ).all()

    return render_template(
        "profesor/materia.html",
        materia=materia,
        tareas=tareas
    )


@app.route(
    "/profesor/tarea/<int:tarea_id>/editar",
    methods=["GET", "POST"]
)
@login_required
def editar_tarea(tarea_id):

    if current_user.rol != "profesor":
        return "No tenes permiso"

    tarea = Tarea.query.get_or_404(tarea_id)

    materia = Materia.query.get_or_404(
        tarea.materia_id
    )

    if materia.profesor_id != current_user.id:
        return "No podes modificar esta tarea"

    if request.method == "POST":

        tarea.titulo = request.form["titulo"]
        tarea.descripcion = request.form["descripcion"]
        tarea.fecha_entrega = request.form["fecha_entrega"]

        db.session.commit()

        return redirect(
            url_for(
                "gestionar_materia",
                materia_id=materia.id
            )
        )

    return render_template(
        "profesor/tarea.html",
        tarea=tarea,
        materia=materia
    )


@app.route(
    "/profesor/tarea/<int:tarea_id>/eliminar"
)
@login_required
def eliminar_tarea(tarea_id):

    if current_user.rol != "profesor":
        return "No tenes permiso"

    tarea = Tarea.query.get_or_404(tarea_id)

    materia = Materia.query.get_or_404(
        tarea.materia_id
    )

    if materia.profesor_id != current_user.id:
        return "No podes eliminar esta tarea"

    db.session.delete(tarea)
    db.session.commit()

    return redirect(
        url_for(
            "gestionar_materia",
            materia_id=materia.id
        )
    )


# =========================================================
# ALUMNO - VER TAREA
# =========================================================

@app.route("/tarea/<int:tarea_id>")
@login_required
def ver_tarea(tarea_id):

    if current_user.rol != "alumno":
        return "No tenes permiso"

    tarea = Tarea.query.get_or_404(tarea_id)

    inscripcion = Inscripcion.query.filter_by(
        alumno_id=current_user.id,
        materia_id=tarea.materia_id
    ).first()

    if not inscripcion:
        return "No estas inscripto en esta materia"

    entrega = Entrega.query.filter_by(
        tarea_id=tarea.id,
        alumno_id=current_user.id
    ).first()

    return render_template(
        "tarea.html",
        tarea=tarea,
        entrega=entrega
    )


# =========================================================
# ALUMNO - ENTREGAR TAREA
# =========================================================

@app.route(
    "/tarea/<int:tarea_id>/entregar",
    methods=["POST"]
)
@login_required
def entregar_tarea(tarea_id):

    if current_user.rol != "alumno":
        return "No tenes permiso"

    tarea = Tarea.query.get_or_404(tarea_id)

    inscripcion = Inscripcion.query.filter_by(
        alumno_id=current_user.id,
        materia_id=tarea.materia_id
    ).first()

    if not inscripcion:
        return "No estas inscripto en esta materia"

    contenido = request.form["contenido"]

    entrega = Entrega.query.filter_by(
        tarea_id=tarea.id,
        alumno_id=current_user.id
    ).first()

    if entrega:

        entrega.archivo = contenido

    else:

        entrega = Entrega(
            archivo=contenido,
            tarea_id=tarea.id,
            alumno_id=current_user.id
        )

        db.session.add(entrega)

    db.session.commit()

    return redirect(
        url_for(
            "ver_tarea",
            tarea_id=tarea.id
        )
    )


# =========================================================
# PROFESOR - VER ENTREGAS
# =========================================================

@app.route(
    "/profesor/tarea/<int:tarea_id>/entregas"
)
@login_required
def ver_entregas(tarea_id):

    if current_user.rol != "profesor":
        return "No tenes permiso"

    tarea = Tarea.query.get_or_404(tarea_id)

    materia = Materia.query.get_or_404(
        tarea.materia_id
    )

    if materia.profesor_id != current_user.id:
        return "No podes acceder"

    entregas = Entrega.query.filter_by(
        tarea_id=tarea.id
    ).all()

    return render_template(
        "profesor/tarea.html",
        tarea=tarea,
        materia=materia,
        entregas=entregas
    )


# =========================================================
# PROFESOR - CALIFICAR
# =========================================================

@app.route(
    "/profesor/entrega/<int:entrega_id>/calificar",
    methods=["POST"]
)
@login_required
def calificar_entrega(entrega_id):

    if current_user.rol != "profesor":
        return "No tenes permiso"

    entrega = Entrega.query.get_or_404(
        entrega_id
    )

    tarea = Tarea.query.get_or_404(
        entrega.tarea_id
    )

    materia = Materia.query.get_or_404(
        tarea.materia_id
    )

    if materia.profesor_id != current_user.id:
        return "No podes calificar esta entrega"

    entrega.calificacion = request.form["calificacion"]
    entrega.comentario = request.form["comentario"]

    db.session.commit()

    return redirect(
        url_for(
            "ver_entregas",
            tarea_id=tarea.id
        )
    )