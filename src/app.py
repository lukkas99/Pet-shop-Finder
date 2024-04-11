from flask import Flask, request, jsonify
from datetime import datetime  
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Dados dos petshops
petshops = [
    {
        'nome': 'Meu Canino Feliz',
        'distancia': 2,
        'preco_semana_pequeno': 20,
        'preco_semana_grande': 40,
        'preco_fim_semana_pequeno': 20 * 1.2,
        'preco_fim_semana_grande': 40 * 1.2
    },
    {
        'nome': 'Vai Rex',
        'distancia': 1.7,
        'preco_semana_pequeno': 15,
        'preco_semana_grande': 50,
        'preco_fim_semana_pequeno': 20,
        'preco_fim_semana_grande': 55
    },
    {
        'nome': 'ChowChawgas',
        'distancia': 0.8,
        'preco_semana_pequeno': 30,
        'preco_semana_grande': 45,
        'preco_fim_semana_pequeno': 30,
        'preco_fim_semana_grande': 45
    }
]

# Endpoint para lidar com as requisições do frontend
@app.route('/melhor_petshop', methods=['POST'])
def calcular_melhor_petshop():
    data = request.json['data']
    qtd_pequenos = request.json['qtd_pequenos']
    qtd_grandes = request.json['qtd_grandes']

    # Calcular o dia da semana (0 para segunda-feira, 6 para domingo)
    dia_semana = datetime.strptime(data, '%Y-%m-%d').weekday()
    fim_semana = dia_semana >= 5  # Se for sábado (5) ou domingo (6)

    # Calcular o preço total em cada petshop
    precos_totais = []
    for petshop in petshops:
        preco_pequenos = petshop['preco_fim_semana_pequeno' if fim_semana else 'preco_semana_pequeno']
        preco_grandes = petshop['preco_fim_semana_grande' if fim_semana else 'preco_semana_grande']
        preco_total = (preco_pequenos * qtd_pequenos) + (preco_grandes * qtd_grandes)
        precos_totais.append({'petshop': petshop['nome'], 'preco_total': preco_total, 'distancia': petshop['distancia']})

    # Ordenar os petshops pelo preço total e pela distância
    precos_totais.sort(key=lambda x: (x['preco_total'], x['distancia']))

    # Retornar o melhor petshop (o primeiro da lista ordenada)
    response = jsonify({
    'melhor_petshop': precos_totais[0]['petshop'],
    'preco_total': precos_totais[0]['preco_total'],
    'menor_distancia': precos_totais[0]['distancia'],
    'outros_petshops': precos_totais[1:]  
     
})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


if __name__ == '__main__':
    app.run(debug=True)
