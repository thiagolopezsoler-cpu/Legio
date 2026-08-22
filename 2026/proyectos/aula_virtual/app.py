from flask import Flask
from config import Config
from extensions import db, login_manager
from models import Usuario

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

login_manager.init_app(app)
login_manager.login_view = "login"


@login_manager.user_loader
def cargar_usuario(id):
    return Usuario.query.get(int(id))


from routes import *


if __name__ == "__main__":
    app.run(debug=True)