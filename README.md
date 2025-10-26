# Playwright Frontend Test Automation Skeleton

Este projeto fornece um esqueleto completo para automação de testes frontend utilizando [Playwright](https://playwright.dev/) com TypeScript. Ele segue o modelo de Page Object, inclui exemplos de testes de UI e API, aplica padrões de clean code e já vem preparado para execução local, geração de relatórios e integração contínua no GitHub Actions.

## Requisitos

- Node.js 18+ (recomendado 20)
- npm 9+

## Instalação

```bash
npm install
```

O script `postinstall` instala automaticamente os navegadores necessários do Playwright.

## Scripts Disponíveis

- `npm run test:ui` – Executa todos os testes Playwright em modo headless.
- `npm run test:ui:headed` – Executa os testes com interface gráfica.
- `npm run test:ui:debug` – Executa os testes em modo de depuração.
- `npm run test:api` – Executa apenas os testes localizados em `tests/api`.
- `npm run lint` – Verifica o padrão de código com ESLint.

## Estrutura de Pastas

```
├── tests
│   ├── api
│   │   ├── clients        # Clientes para consumo de APIs
│   │   ├── specs          # Exemplos de testes de API
│   │   └── utils          # Assertivas e utilitários específicos de API
│   ├── shared             # Configurações compartilhadas (ex.: variáveis de ambiente)
│   └── ui
│       ├── fixtures       # Fixtures reutilizáveis do Playwright
│       ├── pages          # Page Objects seguindo POM
│       ├── specs          # Especificações de testes de UI
│       └── utils          # Funções utilitárias para testes de UI
```

## Relatórios

Após a execução, os relatórios são gerados automaticamente:

- `playwright-report/` – Relatório HTML interativo do Playwright.
- `reports/results.xml` – Relatório JUnit para integrações.
- `artifacts/` – Screenshots e vídeos quando habilitados.

## Integração Contínua

O workflow `.github/workflows/playwright.yml` executa lint, testes e publica relatórios automaticamente a cada push/pull request na branch `main`.

## Convenções de Código

- Page Objects centralizam interações com a UI.
- Utilitários fornecem métodos facilitadores e reutilizáveis.
- ESLint (com regras do TypeScript) garante padronização e qualidade de código.

## Variáveis de Ambiente

Configure a variável `BASE_URL` caso queira sobrescrever o `baseURL` padrão (`https://playwright.dev`). As variáveis são validadas pelo schema definido em `tests/shared/environment.ts`.
