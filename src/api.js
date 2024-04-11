// api.js
export async function sendFormData(date, smallDogs, bigDogs) {
    const response = await fetch('http://localhost:5000/melhor_petshop', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: date, qtd_pequenos: smallDogs, qtd_grandes: bigDogs })
    });

    return await response.json();
}
