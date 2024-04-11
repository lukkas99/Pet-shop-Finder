import React, { useState } from 'react';
import { sendFormData } from '../api';
import Modal from './Modal';


function InputForm() {

    const [date, setDate] = useState('');
    const [smallDogs, setSmallDogs] = useState('');
    const [bigDogs, setBigDogs] = useState('');
    const [bestPetshop, setBestPetshop] = useState('');
    const [bestDistance, setBestDistance] = useState('');
    const [otherPetshops, setOtherPetshops] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se a data está preenchida
        if (!date) {
            alert('Por favor, preencha a data.');
            return;
        }

        const selectedDateParts = date.split('-').map(part => Number(part));
        const selectedDate = new Date(selectedDateParts[0], selectedDateParts[1] - 1, selectedDateParts[2]);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
            alert('A data selecionada não pode ser anterior à data de hoje. data de hoje: ' + currentDate.toLocaleDateString() + 'data selecionada: ' + selectedDate.toLocaleDateString());
            return;
        }

        // Verifica se os campos de quantidade estão vazios
        if (smallDogs === '' || bigDogs === '') {
            alert('Por favor, preencha os campos de quantidade de cães.');
            return;
        }

        // Converte as quantidades para números
        const smallDogsNumber = Number(smallDogs);
        const bigDogsNumber = Number(bigDogs);

        // Verifica se as quantidades são números válidos
        if (isNaN(smallDogsNumber) || isNaN(bigDogsNumber)) {
            alert('Por favor, insira um número válido para a quantidade de cães.');
            return;
        }

        // Verifica se a quantidade de cães é negativa ou maior que 100
        if (smallDogs < 0 || smallDogs > 100 || bigDogs < 0 || bigDogs > 100) {
            alert('A quantidade de cães não pode ser negativa nem maior que 100.');
            return;
        }

        const { melhor_petshop, preco_total, menor_distancia, outros_petshops } = await sendFormData(date, smallDogs, bigDogs);
        setBestPetshop(melhor_petshop);
        setTotalPrice(preco_total);
        setBestDistance(menor_distancia);
        setOtherPetshops(outros_petshops);
        setIsOpen(true);
    };

    return (
        <div className="container">
            <div className="left-column">
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="left" /></div>
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="right" /></div>
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="left" /></div>
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="right" /></div>
            </div>

            <div className="input-form">
                <h1 className="form-title">Bem vindo ao Pet-shop Finder!</h1>
                <p className="form-description">Este teste prático avalia a solução criada para auxiliar o senhor Eduardo a encontrar o melhor petshop para o banho de seus cães.</p>
                <form onSubmit={handleSubmit} className="form">
                    <fieldset className="form-step">
                        <legend className="step-title">Passo 1:</legend>
                        <p className="step-description">Insira a data desejada no formato DD/MM/AAAA.</p>
                        <div className="form-group">
                            <label htmlFor="date" className="label">Data:</label>
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="input" />
                        </div>
                    </fieldset>
                    <fieldset className="form-step">
                        <legend className="step-title">Passo 2:</legend>
                        <p className="step-description">Informe a quantidade de cães pequenos e grandes que você pretende levar para o banho.</p>
                        <div className="form-group">
                            <label htmlFor="smallDogs" className="label">Quantidade de cães pequenos:</label>
                            <input type="number" id="smallDogs" value={smallDogs} onChange={(e) => setSmallDogs(e.target.value ? parseInt(e.target.value) : 0)} className="input" />                    </div>
                        <div className="form-group">
                            <label htmlFor="bigDogs" className="label">Quantidade de cães grandes:</label>
                            <input type="number" id="bigDogs" value={bigDogs} onChange={(e) => setBigDogs(e.target.value ? parseInt(e.target.value) : 0)} className="input" />                    </div>
                    </fieldset>
                    <fieldset className="form-step">
                        <legend className="step-title">Passo 3:</legend>
                        <p className="step-description">Clique no botão "Calcular" para descobrir o melhor petshop com os preços mais baixos.</p>
                        <button type="submit" className="submit-button">Calcular</button>
                    </fieldset>
                </form>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <img src="bath.jpg" alt="Imagem do Petshop" />
                    <h2 className="result-title">Melhor petshop:</h2>
                    <p className="result-text">Nome: <strong>{bestPetshop}</strong> - Preço: <strong>{totalPrice}R$</strong> - Distância: <strong>{bestDistance}km</strong></p>
                    <h2 className="result-title">Preços nos outros petshops:</h2>
                    {otherPetshops.map((petshop) => (
                        <p className="result-text">Nome: <strong>{petshop.petshop}</strong> - Preço: <strong>{petshop.preco_total}R$</strong> - Distância: <strong>{petshop.distancia}km</strong></p>
                    ))}
                </Modal>

            </div>
            <div className="right-column">
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="right" /></div>
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="left" /></div>
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="right" /></div>
                <div className="paw-print"><img src="dogpawicon.ico" alt="Patinha de pet" className="left" /></div>
            </div>
        </div>

    );
}

export default InputForm;
