from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 解決 CORS 問題

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email == 'cgu@gmail.com' and password == '123':
        return jsonify({'result': 'success'})
    else:
        return jsonify({'result': 'fail'})

if __name__ == '__main__':
    app.run(port=5000)
