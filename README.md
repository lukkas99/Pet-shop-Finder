# Petshop Finder
- Author: Lucas Morato de Oliveira Xavier
- Email: lmoxavier@gmail.com 

## Instruções para Executar o Sistema

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. Clone o repositório do projeto para o seu ambiente local.
3. No terminal, navegue até o diretório raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a instalação das dependências, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
6. Para executar o backend Flask, navegue até o diretório `\teste_pratico_dti\src` no terminal e execute o comando `python app.py`.
7. O Flask Python pode ser instalado executando `pip install Flask` no terminal, caso ainda não esteja instalado no ambiente.
8. Certifique-se de que o backend Flask esteja sendo executado enquanto testa a aplicação frontend.

## Lista de Premissas Assumidas

- A aplicação assume que o usuário fornecerá uma data válida no formato DD/MM/AAAA.
- O usuário informará a quantidade de cães pequenos e grandes para o banho.
- A aplicação realizará cálculos com base nas informações fornecidas pelo usuário e fornecerá o melhor petshop com os preços mais baixos.

## Decisões de Projeto

- Utilização do React.js para construir a interface do usuário de forma eficiente e reativa.
- Separação de componentes para facilitar a manutenção e reutilização do código.
- Utilização de estado local para gerenciar os dados do formulário e as informações de retorno da API.
- Estilização com CSS para garantir uma interface visualmente agradável e responsiva.
- Utilização do Flask Python para criar um backend simples que integra com o frontend e fornece os dados necessários.
- Utilização de um servidor de desenvolvimento para testar a aplicação localmente antes de implantação em produção.
