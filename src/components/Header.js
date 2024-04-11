import React, { useState } from 'react';
import Modal from './Modal';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-left">
                {/* Ícone no início */}
                <img src="favicon.ico" alt="Ícone" className="header-icon" />
            </div>
            {/* Título */}
            <h1 className="header-title">PET-SHOP FINDER</h1>
            <div className="header-right">
                {/* Ícone de informações usando Font Awesome */}
                <img src="pawicon.ico" alt="Ícone" className="header-icon" onClick={() => setIsModalOpen(true)} title="Clique aqui para ver as informações sobre os pet-shops disponíveis" />
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Informações dos Petshops</h2>
                <p><strong>Meu Canino Feliz:</strong> Está distante 2km do canil. Em dias de semana o banho para cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00. Durante os finais de semana o preço dos banhos é aumentado em 20%.</p>
                <p><strong>Vai Rex:</strong> Está localizado na mesma avenida do canil, a 1,7km. O preço do banho para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00. Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os grandes é R$ 55,00.</p>
                <p><strong>ChowChawgas:</strong> Fica a 800m do canil. O preço do banho é o mesmo em todos os dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00.</p>
            </Modal>
        </header>
    );
}

export default Header;
