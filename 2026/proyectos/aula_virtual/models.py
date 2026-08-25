from extensions import db
from flask_login import UserMixin


class Usuario(db.Model, UserMixin):

    id = db.Column(db.Integer, primary_key=True)

    nombre = db.Column(
        db.String(100),
        nullable=False
    )

    email = db.Column(
        db.String(100),
        unique=True,
        nullable=False
    )

    password = db.Column(
        db.String(200),
        nullable=False
    )

    rol = db.Column(
        db.String(20),
        nullable=False
    )


class Materia(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    nombre = db.Column(
        db.String(100),
        nullable=False
    )

    descripcion = db.Column(
        db.Text
    )

    codigo = db.Column(
        db.String(20),
        unique=True,
        nullable=False
    )

    profesor_id = db.Column(
        db.Integer,
        db.ForeignKey("usuario.id"),
        nullable=False
    )


class Inscripcion(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    alumno_id = db.Column(
        db.Integer,
        db.ForeignKey("usuario.id"),
        nullable=False
    )

    materia_id = db.Column(
        db.Integer,
        db.ForeignKey("materia.id"),
        nullable=False
    )


class Tarea(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    titulo = db.Column(
        db.String(100),
        nullable=False
    )

    descripcion = db.Column(
        db.Text
    )

    fecha_entrega = db.Column(
        db.Date
    )

    archivo = db.Column(
        db.String(255)
    )

    materia_id = db.Column(
        db.Integer,
        db.ForeignKey("materia.id"),
        nullable=False
    )


class Entrega(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    archivo = db.Column(
        db.String(255)
    )

    fecha_entrega = db.Column(
        db.DateTime
    )

    calificacion = db.Column(
        db.Float
    )

    comentario = db.Column(
        db.Text
    )

    tarea_id = db.Column(
        db.Integer,
        db.ForeignKey("tarea.id"),
        nullable=False
    )

    alumno_id = db.Column(
        db.Integer,
        db.ForeignKey("usuario.id"),
        nullable=False
    )


class Material(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    titulo = db.Column(
        db.String(100),
        nullable=False
    )

    descripcion = db.Column(
        db.Text
    )

    archivo = db.Column(
        db.String(255)
    )

    enlace = db.Column(
        db.String(255)
    )

    materia_id = db.Column(
        db.Integer,
        db.ForeignKey("materia.id"),
        nullable=False
    )


class Evaluacion(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    titulo = db.Column(
        db.String(100),
        nullable=False
    )

    materia_id = db.Column(
        db.Integer,
        db.ForeignKey("materia.id"),
        nullable=False
    )


class Pregunta(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    texto = db.Column(
        db.Text,
        nullable=False
    )

    evaluacion_id = db.Column(
        db.Integer,
        db.ForeignKey("evaluacion.id"),
        nullable=False
    )


class Respuesta(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    texto = db.Column(
        db.String(255),
        nullable=False
    )

    correcta = db.Column(
        db.Boolean,
        default=False
    )

    pregunta_id = db.Column(
        db.Integer,
        db.ForeignKey("pregunta.id"),
        nullable=False
    )