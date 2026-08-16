from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return '¡Hola, Mundo!'

@app.route('/calcular', methods=['POST'])
def calcular():
    data = request.get_json()
    resultado = data['num1'] + data['num2']  # Ejemplo de operación
    return jsonify({'resultado': resultado})

if __name__ == '__main__':
    app.run(debug=True)