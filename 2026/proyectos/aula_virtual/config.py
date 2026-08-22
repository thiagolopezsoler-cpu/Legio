class Config:
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:@localhost/aula_virtual"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "clave-aula-virtual"