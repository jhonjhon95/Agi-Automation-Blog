# Informações de contato:

- [<img src="https://img.icons8.com/color/48/000000/linkedin.png" width="24"/>](https://www.linkedin.com/in/jjhon/) **Linkedin:** [Perfil Linkedin](https://www.linkedin.com/in/jjhon/)
  
- [<img src="https://img.icons8.com/color/48/000000/portfolio.png" width="24"/>](https://jhonjhon95.github.io/portfolio-site/) **Portfólio:** [Portfólio Online](https://jhonjhon95.github.io/portfolio-site/)
  
- [<img src="https://img.icons8.com/color/48/000000/whatsapp--v2.png" width="24"/>](https://api.whatsapp.com/send?phone=5566997218952) **WhatsApp:** [Conversar no WhatsApp](https://api.whatsapp.com/send?phone=5566997218952)
  
- [<img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" width="24"/>](https://github.com/jhonjhon95) **GitHub:** [Perfil GitHub](https://github.com/jhonjhon95)


# Testes WEB com Cypress

## Automação desenvolvida para Avaliação NTConsult

Projeto para garantir cobertura de testes de usabilidade para a aplicação Blog do Agi


##  Requisitos para execução
* Node.js 16+ instalado
* NPM configurado no PATH da aplicação
* IDE: IntelliJ IDEA, VSCode ou qualquer editor de texto

## Estrutura do projeto

````text
cypress-automation-blog/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   ├── tests/
│   │   │   └── blogSearch.spec.js
│   ├── pages/
│   │   ├── BlogHomePage.js
│   │   ├── SearchResultsPage.js
│   ├── plugins/
│   ├── support/
│       └── index.js
│   ├── videos/
│   ├── screenshots/
├── cypress.config.js
├── package.json
└── README.md

````

## Como executar os testes

Depois de clonar o projeto;

Execução através da IDE: É possível selecionar o teste desejado e simplesmente clicar em 'play' no método correspondente
do teste ou pode-se executar pela linha de comando usando o seguinte comando:<br>

Instalar dependências<br>
```bash
npm install
```
Rodar todos os testes<br>
```bash
npx cypress run
```
Rodar testes na interface gráfica do Cypress
```bash
npx cypress open
```

# Configuração do GitHub Actions

O GitHub Actions está configurado para rodar automaticamente os testes Cypress em cada push ou pull request no branch main. Os vídeos e screenshots dos testes são salvos como artefatos que podem ser baixados.

# Plano de Teste e Estratégia de Testes.

## Introdução

- Este plano descreve a estratégia de testes para a automação de testes do blog do Agi, visando garantir a cobertura de testes, identificar e corrigir bugs, e assegurar que a aplicação atende aos requisitos.

  ## Objetivos do Teste

- Validar o funcionamento correto da aplicação.
- Garantir robustez e confiabilidade.
- Identificar e corrigir bugs.
- Assegurar conformidade com a documentação técnica e UI/UX.
- Verificar usabilidade e qualidade do código.

  ## Escopo do Teste

- Funcionalidades a Testar: Pesquisa de artigos no blog do Agi.

  ## Abordagem de Teste

- Testes de Usabilidade: Validar funcionalidades conforme os requisitos.

- Testes de Regressão: Assegurar que novas alterações não impactem funcionalidades existentes.

# Conclusão

Este README fornece um guia completo para configurar e executar testes Cypress no projeto cypress-automation-blog. Seguindo as instruções, você poderá garantir que a aplicação esteja funcionando corretamente e identificar quaisquer problemas que possam surgir durante o desenvolvimento.
