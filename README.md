# Portfólio Profissional

> Portfólio moderno, interativo e responsivo desenvolvido com **React 19**, **Vite**, **Tailwind CSS v4** e **Framer Motion**, projetado para apresentar projetos, competências técnicas, experiência profissional e canais de contato.

---

## Visão Geral do Projeto

Este projeto consiste em uma Single Page Application (SPA) de alta performance que destaca a trajetória profissional e o portfólio de desenvolvimento de software. A aplicação conta com suporte nativo a múltiplos idiomas (i18n), animações fluidas baseadas em física vetorial e canvas interativo (`ParticleText`), além de esteiras completas de automação CI/CD com testes unitários/integração e deploy contínuo no **Firebase Hosting**.

---

## Tecnologias Utilizadas

### Core & Framework
| Tecnologia | Versão | Finalidade |
| :--- | :--- | :--- |
| **React** | `^19.0.0` | Biblioteca declarativa e orientada a componentes para interfaces web |
| **Vite** | `^6.2.0` | Build tool e dev server ultrarrápido com Hot Module Replacement (HMR) |
| **Tailwind CSS** | `^4.0.14` | Framework CSS utility-first com nova engine de alta performance |
| **Node.js** | `>= 22.14.0` | Ambiente de execução JavaScript LTS |

### Bibliotecas Principais
| Pacote | Finalidade |
| :--- | :--- |
| **Framer Motion** (`^12.5.0`) | Animações fluidas, transições de layout e microinterações |
| **i18next** & **react-i18next** | Suporte completo a internacionalização (Português e Inglês) |
| **Embla Carousel React** | Carrossel acessível e otimizado para dispositivos móveis |
| **React Scroll** | Rolagem suave ancorada aos itens do menu |
| **React Icons** | Pacote abrangente de ícones vetoriais em SVG |

### Qualidade de Código & Testes
| Ferramenta | Finalidade |
| :--- | :--- |
| **Vitest** | Test runner nativo para Vite, rápido e integrado |
| **React Testing Library** | Testes de integração centrados no comportamento do usuário |
| **@testing-library/jest-dom** | Matchers customizados para asserções no DOM |
| **jsdom** | Simulação leve do ambiente de navegador para testes |
| **ESLint 9** | Padronização de código e prevenção de problemas |

---

## Estrutura de Pastas

```bash
portfolio/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml                   # Pipeline de validação (Lint, Testes, Build) e Semantic Release
│       └── firebase-hosting-merge.yml  # Deploy automático no Firebase Hosting ativado por tags (v*.*.*)
├── public/                             # Recursos estáticos servidos diretamente na raiz
│   ├── icon.svg                        # Ícone da aplicação
│   └── locales/                        # Arquivos JSON de internacionalização (en, pt_br)
├── src/
│   ├── __tests__/                      # Testes globais da aplicação (ex: App.test.jsx)
│   ├── assets/                         # Imagens e mídias estáticas importadas via código
│   ├── components/                     # Componentes modulares da interface
│   │   ├── __tests__/                  # Testes unitários e de integração de componentes
│   │   ├── About.jsx                   # Seção Sobre Mim e trajetória
│   │   ├── Contact.jsx                 # Seção de contato e links sociais
│   │   ├── ContactInfoCard.jsx         # Card com informações de contato
│   │   ├── Footer.jsx                  # Rodapé da página com copyright dinâmico
│   │   ├── Hero.jsx                    # Seção inicial de apresentação
│   │   ├── LanguageSelector.jsx        # Seletor interativo de idiomas (Desktop & Mobile)
│   │   ├── Navbar.jsx                  # Barra de navegação com links de ancoragem
│   │   ├── ParticleText.jsx            # Animação interativa de partículas em canvas HTML5
│   │   ├── ProjectCard.jsx             # Card visual de exibição de cada projeto
│   │   ├── ProjectDetailModal.jsx      # Modal detalhado de especificações do projeto
│   │   ├── Projects.jsx                # Carrossel e listagem dos projetos
│   │   ├── SkillCard.jsx               # Card de habilidade com rating em estrelas
│   │   ├── StatDetails/                # Componentes com detalhes adicionais de estatísticas
│   │   ├── StatInfoCard.jsx            # Card numérico de métricas e estatísticas
│   │   ├── Tabs.jsx                    # Abas de filtro para categorias de tecnologias
│   │   └── TechnicalProficiency.jsx    # Seção de proficiência técnica e skills
│   ├── utils/                          # Constantes, dados centralizados e helpers
│   │   ├── __tests__/                  # Testes unitários para regras de dados
│   │   ├── data.js                     # Dados centralizados de habilidades, menus e métricas
│   │   └── i18n.js                     # Inicialização do ecossistema i18next
│   ├── App.jsx                         # Componente principal que orquestra a estrutura
│   ├── index.css                       # Estilos globais e diretivas do Tailwind CSS v4
│   ├── main.jsx                        # Ponto de entrada React (createRoot)
│   └── setupTests.js                   # Configuração e mocks globais do ambiente de testes
├── .firebaserc                         # Configuração do projeto default do Firebase
├── .gitignore                          # Arquivos e diretórios ignorados pelo Git
├── .releaserc.json                     # Configuração do versionamento semântico (Semantic Release)
├── eslint.config.js                    # Configuração de linting com ESLint 9
├── firebase.json                       # Regras de roteamento e hosting do Firebase
├── package.json                        # Gerenciamento de scripts e dependências npm
└── vite.config.js                      # Configuração do Vite, Tailwind e ambiente Vitest
```

---

## Como Executar o Projeto Localmente

### Pré-requisitos
* **Node.js**: Versão `22.x` recomendada (compatível com `.tool-versions`).
* **npm**: Versão `10.x` ou superior.

### 1. Clonar o Repositório
```bash
git clone https://github.com/JoaoGH/portfolio.git
cd portfolio
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

---

## Qualidade de Código e Testes Automatizados

O projeto conta com suíte de testes unitários e de integração utilizando **Vitest** e **Testing Library**:

```bash
# Executa a suíte de testes uma única vez (modo CI)
npm test

# Executa os testes em modo interativo (Watch Mode) durante o desenvolvimento
npm run test:watch

# Gera relatório completo de cobertura de código (Code Coverage)
npm run test:coverage

# Executa o linter para verificar conformidade de código
npm run lint

# Corrige automaticamente inconsistências apontadas pelo linter
npm run lint:fix
```

---

## Build e Homologação Local

Para gerar os artefatos estáticos otimizados para produção:

```bash
# Gera o build de produção na pasta dist/
npm run build

# Inicia um servidor HTTP local para pré-visualizar a pasta dist/
npm run preview
```

---

## Integração Contínua (CI/CD) e Deploy

O ciclo de vida do software é totalmente automatizado via **GitHub Actions**:

### 1. Pipeline de CI & Semantic Release (`.github/workflows/ci-cd.yml`)
* **Gatilhos**: Executado em pushes e Pull Requests em todas as branches.
* **Etapa `test`**: Executa a verificação estática (`npm run lint`), a suíte de testes (`npm test`) e a validação do build de produção (`npm run build`). Caso qualquer etapa falhe, o pipeline é interrompido e o merge é bloqueado.
* **Etapa `release`**: Acionada automaticamente após aprovação dos testes **exclusivamente na branch `main`**. O `semantic-release` analisa as mensagens de commit (seguindo o padrão *Conventional Commits*), calcula a nova versão semântica, gera o `CHANGELOG.md`, faz o bump no `package.json` e cria uma nova tag Git (ex: `v1.1.0`) e Release no GitHub.

### 2. Deploy no Firebase Hosting (`.github/workflows/firebase-hosting-merge.yml`)
* **Gatilho**: Disparado **exclusivamente pela criação de uma nova tag** de versão (`v*.*.*` ou `v*`).
* **Processo**: Clona o repositório no ponto exato da tag, instala dependências limpas (`npm ci`), roda o build de produção do Vite e efetua o deploy da pasta `dist/` para o canal ao vivo (`live`) do **Firebase Hosting**.

### Variáveis de Ambiente & Secrets no Repositório
Para que os pipelines operem de forma autônoma, cadastre as seguintes secrets no GitHub (**Settings > Secrets and variables > Actions**):

| Secret | Finalidade |
| :--- | :--- |
| `FIREBASE_SERVICE_ACCOUNT_JGHARTMANN_B8718` | Chave privada JSON da Conta de Serviço do Google Cloud / Firebase com privilégios de publicação no Firebase Hosting. |
