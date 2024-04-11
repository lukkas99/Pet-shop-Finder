import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h2>informações de Contato:</h2>
                <p>

                    Nome: Lucas Morato de Oliveira Xavier <br />
                    Email: lmoxavier@gmail.com <br />
                    Telefone: (31) 98600-3017
                </p>
            </div>
            <div className="footer-right">
                {/* Aqui você pode adicionar os ícones que desejar */}
                <a href="https://www.linkedin.com/in/lucas-morato-057a94252/" target="_blank" rel="noopener noreferrer">
                    <img src="linkeicon.ico" alt="Ícone Facebook" className="footer-icon" />
                </a>
                <a href="https://github.com/lukkas99" target="_blank" rel="noopener noreferrer">
                    <img src="githubicon.ico" alt="Ícone GitHub" className="footer-icon" />
                </a>
                <a href="https://www.instagram.com/lukaomorato/" target="_blank" rel="noopener noreferrer">
                    <img src="instaicon.ico" alt="Ícone Instagram" className="footer-icon" />
                </a>

            </div>
        </footer>
    );
}

export default Footer;
