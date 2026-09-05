# VollMed Cypress

Projeto de automação de testes desenvolvido com **Cypress**, com foco na validação de funcionalidades da aplicação VollMed através de testes **End-to-End (E2E)** e **testes de API**.

O projeto também utiliza práticas de qualidade de código, geração de dados para testes, comandos customizados, relatórios de execução e **Integração Contínua (CI)** utilizando GitHub Actions.

---

## 🎯 Objetivo

O objetivo deste projeto é automatizar cenários importantes da aplicação VollMed, garantindo que funcionalidades como:

* Cadastro de especialistas
* Login de clínicas
* Acesso ao dashboard
* Logout
* Autenticação via API
* Requisições HTTP
* Validação de respostas da API

funcionem conforme o comportamento esperado.

A automação permite identificar regressões de forma mais rápida e executar os mesmos cenários de maneira consistente.

---

## 🛠️ Tecnologias utilizadas

### Cypress

Principal ferramenta de automação utilizada no projeto.

O Cypress é utilizado para realizar testes automatizados no navegador e também requisições diretamente às APIs.

Entre os recursos utilizados estão:

* Testes End-to-End
* `cy.visit()`
* `cy.get()`
* `cy.contains()`
* `cy.request()`
* `cy.url()`
* `cy.location()`
* Assertions
* `cy.session()`
* Comandos customizados

### JavaScript

A linguagem utilizada para desenvolver os testes automatizados.

Os arquivos de teste utilizam a extensão:

```text
.cy.js
```

Exemplos:

```text
login-clinica.cy.js
login-api.cy.js
dashboard.cy.js
cadastro-sucesso.cy.js
clinica-api-e-logout.cy.js
```

---

### Node.js

Utilizado como ambiente de execução para o projeto de automação e para gerenciamento das dependências através do npm.

O projeto possui arquivos `package.json` tanto na estrutura principal de testes quanto nas aplicações frontend e backend.

---

### npm

Utilizado para instalação e gerenciamento das dependências do projeto.

As principais dependências relacionadas à automação incluem:

* Cypress
* ESLint
* Faker
* Mochawesome
* Cypress Plugin API

---

### Cypress Plugin API

O pacote `cypress-plugin-api` é utilizado para facilitar a visualização e execução de requisições HTTP dentro do Cypress.

Ele complementa os testes de API realizados no projeto.

---

### Faker.js

O projeto utiliza:

```text
@faker-js/faker
```

para geração de dados aleatórios utilizados nos testes.

Isso permite criar dados dinâmicos e reduzir a dependência de informações fixas durante a execução da automação.

Exemplos de dados que podem ser gerados:

* Nome
* E-mail
* Senha
* Dados cadastrais
* Informações de usuários

---

### ESLint

Utilizado para análise estática do código e padronização dos arquivos JavaScript.

O projeto possui configurações específicas para Cypress e comandos para executar o lint:

```bash
npm run lint
```

Também existe um comando para correção automática:

```bash
npm run lint:fix
```

---

### Mochawesome

Utilizado como reporter dos testes do Cypress.

O projeto está configurado para gerar relatórios em:

```text
cypress/results
```

O formato HTML facilita a visualização dos resultados das execuções automatizadas.

---

## 🧪 Estratégia de testes

A automação está dividida principalmente entre testes de interface e testes de API.

### Testes End-to-End

Os testes E2E simulam ações realizadas por um usuário real através da interface da aplicação.

Exemplo de fluxo:

```text
Acessar aplicação
      ↓
Realizar login
      ↓
Validar redirecionamento
      ↓
Acessar dashboard
      ↓
Executar ação
      ↓
Validar resultado
```

Entre os cenários automatizados estão:

* Cadastro
* Login
* Dashboard
* Logout

---

### Testes de API

Além dos testes de interface, o projeto realiza requisições diretamente aos endpoints da aplicação.

O Cypress permite realizar essas requisições utilizando:

```javascript
cy.request()
```

Isso possibilita validar:

* Status HTTP
* Corpo da resposta
* Autenticação
* Token
* Rotas retornadas
* Dados da API

Exemplo de validação:

```javascript
expect(response.status).to.eq(200)
expect(response.body.auth).to.be.true
expect(response.body.token).to.exist
```

---

## 🔐 Autenticação

O projeto utiliza comandos customizados para centralizar o processo de autenticação.

Foi criado um comando:

```javascript
cy.login(email, senha)
```

Esse comando utiliza `cy.session()` para armazenar e reutilizar a sessão durante os testes.

Também existe um comando específico para autenticação através da API:

```javascript
cy.loginApi(email, senha)
```

Dessa forma, os testes podem realizar autenticação tanto pela interface quanto diretamente através da API.

---

## 🧩 Custom Commands

Os comandos customizados ficam em:

```text
cypress/support/commands.js
```

Atualmente existem comandos relacionados a:

* Login pela interface
* Cadastro de especialista
* Login através da API

Essa abordagem evita duplicação de código e facilita a manutenção dos testes.

Exemplo:

```javascript
Cypress.Commands.add('login', (email, senha) => {
    // fluxo de login
})
```

---

## ⚙️ Configuração do Cypress

As principais configurações estão no arquivo:

```text
cypress.config.js
```

Entre elas:

* `baseUrl`
* Variáveis de ambiente
* Reporter Mochawesome
* Diretório dos relatórios
* Timeout padrão
* Configuração do Cypress Cloud

A aplicação frontend é executada em:

```text
http://localhost:3000
```

e a API em:

```text
http://localhost:8080
```

---

## 🔑 Variáveis de ambiente

O projeto possui um arquivo:

```text
cypress.env.example.json
```

para servir como referência das variáveis utilizadas pela automação.

As configurações incluem informações relacionadas a:

* E-mail
* Senha
* Endpoint de login
* Endpoint de clínica
* Endpoint de especialista

A utilização de variáveis de ambiente permite separar configurações dos testes e evita deixar informações de configuração diretamente espalhadas pelos arquivos de teste.

---

A estrutura do repositório contém as pastas `cypress`, `server` e `web`, além da configuração do Cypress, ESLint e arquivos de gerenciamento de dependências.

---

## 🖥️ Frontend

A aplicação frontend está localizada em:

```text
web/
```

O frontend utiliza principalmente:

* React
* TypeScript
* React Router
* Material UI
* Emotion
* Styled Components
* MobX
* Recharts

O frontend utiliza a porta:

```text
3000
```

As dependências e scripts podem ser encontrados no `web/package.json`.

---

## 🔙 Backend

O backend está localizado em:

```text
server/
```

Entre as tecnologias utilizadas estão:

* Node.js
* TypeScript
* Express
* TypeORM
* SQLite
* MySQL
* JWT
* CORS
* Jest
* Supertest

O backend disponibiliza os endpoints utilizados pelos testes automatizados.

A API é executada na porta:

```text
8080
```

A estrutura e as dependências do backend estão definidas em `server/package.json`.

---

## 🔄 CI/CD com GitHub Actions

O projeto possui um workflow de Integração Contínua em:

```text
.github/workflows/cypress.yml
```

O workflow é executado quando ocorre:

* Push na branch `main`
* Pull Request direcionado para `main`
* Execução manual

Durante o processo, o GitHub Actions:

1. Faz checkout do projeto;
2. Prepara o backend;
3. Instala as dependências;
4. Inicializa o servidor;
5. Inicializa o frontend;
6. Aguarda as aplicações ficarem disponíveis;
7. Executa os testes Cypress;
8. Registra os resultados no Cypress Cloud.

O workflow também utiliza execução paralela dos testes através de uma matriz de containers.

---

## ☁️ Cypress Cloud

O projeto possui integração com o **Cypress Cloud** para registrar as execuções automatizadas.

A configuração utiliza:

```text
projectId
```

e a chave de gravação é fornecida através de:

```text
CYPRESS_RECORD_KEY
```

A chave é armazenada como secret no GitHub Actions, evitando que ela seja exposta diretamente no código.

---

## 📱 Testes em diferentes resoluções

O projeto possui scripts para executar os testes simulando diferentes ambientes.

### Tablet

```bash
npm run cy:open:tablet
```

Executa o Cypress com:

```text
768x1024
```

Também é possível executar os testes em modo headless:

```bash
npm run test:tablet
```

---

### Microsoft Edge

O projeto também possui configuração para execução dos testes no Edge:

```bash
npm run test:browser:edge
```

---

## ▶️ Como executar

Clone o projeto e entre na pasta:

```bash
git clone https://github.com/LucasLamarques/vollmecypress.git
cd vollmecypress
```

No primeiro terminal, inicie o backend:

```bash
cd server
npm install
npm start
```

Em outro terminal, inicie o frontend:

```bash
cd web
npm install
npm start
```

Com o backend e o frontend em execução, abra um terceiro terminal na pasta principal e execute o Cypress:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```
---

## 🔍 Qualidade de código

Para verificar o código utilizando ESLint:

```bash
npm run lint
```

Para corrigir automaticamente problemas encontrados pelo ESLint:

```bash
npm run lint:fix
```

---

## 📊 Relatórios

Os resultados dos testes podem ser gerados utilizando o **Mochawesome**.

Os relatórios são configurados para serem armazenados em:

```text
cypress/results
```

Isso permite consultar posteriormente o resultado das execuções automatizadas.

---

## 🚀 Competências demonstradas

Este projeto demonstra conhecimentos em:

* Quality Assurance
* Automação de testes
* Cypress
* JavaScript
* Testes End-to-End
* Testes de API
* HTTP
* Assertions
* Autenticação
* JWT
* Cypress Commands
* `cy.session()`
* Geração de dados de teste
* ESLint
* Relatórios de testes
* Git
* GitHub
* GitHub Actions
* CI/CD
* Cypress Cloud
* Execução paralela de testes
* Testes em diferentes navegadores
* Testes responsivos

---

## 👨‍💻 Autor

**Lucas Lamarques Maia Júnior**

Este projeto foi desenvolvido a partir de uma aplicação proposta pela Alura como parte da formação em QA.

---

## 📌 Projeto

[VollMed Cypress — GitHub](https://github.com/LucasLamarques/vollmecypress?utm_source=chatgpt.com)
