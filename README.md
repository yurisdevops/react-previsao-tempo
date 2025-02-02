# Previsão do Tempo

> Aplicação web para consulta de previsões climáticas, desenvolvida com React.js e integração com API externa.

A aplicação **Previsão do Tempo** permite aos usuários buscar informações climáticas detalhadas de qualquer cidade. Com recursos como exibição de temperatura, condições atmosféricas e um plano de fundo dinâmico, o projeto oferece uma experiência intuitiva e visualmente atraente.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Deploy na Vercel](#deploy-na-vercel)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição do Projeto

O **Previsão do Tempo** é uma aplicação web que consome a API do [OpenWeatherMap](https://openweathermap.org/api) para fornecer informações climáticas detalhadas. A interface é projetada para ser responsiva e dinâmica, com a capacidade de alterar o plano de fundo com base nas condições climáticas da cidade consultada.

## Funcionalidades Principais

- **Busca de previsão do tempo por cidade:** Informe o nome da cidade para obter a previsão.
- **Exibição de detalhes climáticos:** Temperatura média, mínima e máxima, umidade do ar, velocidade do vento e descrição do clima.
- **Plano de fundo dinâmico:** Altera-se automaticamente de acordo com a condição climática da cidade.

## Tecnologias Utilizadas

- **React.js:** Para a construção da interface de usuário.
- **CSS:** Para estilização.
- **OpenWeatherMap API:** Para obtenção dos dados climáticos.

## Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/react-previsao-tempo.git
cd react-previsao-tempo
```

### 2. Instalar Dependências

Com `npm`:

```bash
npm install
```

Com `yarn`:

```bash
yarn install
```

### 3. Iniciar o Servidor de Desenvolvimento

Com `npm`:

```bash
npm start
```

Com `yarn`:

```bash
yarn start
```

### 4. Abrir no Navegador

Acesse a aplicação em seu navegador em [Previsão do Tempo](https://react-previsao-tempo.vercel.app).

## Deploy na Vercel

Este projeto está hospedado na **Vercel**. Para fazer o deploy do projeto na Vercel, siga estas etapas:

1. Crie uma conta na [Vercel](https://vercel.com/), se ainda não tiver uma.
2. Clique em **"New Project"** no painel da Vercel.
3. Conecte sua conta do GitHub e selecione este repositório.
4. Clique em **Deploy** e aguarde a publicação. Após o deploy, o link para acessar a aplicação será fornecido.

## Estrutura do Projeto

- **`public`**: Arquivos públicos.
- **`src`**:
  - **`Error`**: Páginas de erro.
  - **`Images`**: Imagens do projeto.
  - **`Style`**: Arquivos de estilo.
  - **`App.js`**: Componente principal da aplicação.
  - **`index.js`**: Ponto de entrada da aplicação.

## Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto, siga os seguintes passos:

1. **Fork** este repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Faça suas alterações e adicione testes, se necessário.
4. **Commit** suas alterações (`git commit -am 'Adiciona nova feature'`).
5. **Push** para a branch (`git push origin minha-nova-feature`).
6. Abra um **Pull Request** explicando suas mudanças.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

### 🌤️ **Descubra o clima em sua cidade de forma prática e visualmente atrativa com o Previsão do Tempo!**

