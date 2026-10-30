# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto segue [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Não publicado]

### Adicionado
- **Suíte de Testes Automatizados**: Implementação de testes unitários e de integração utilizando **Vitest**, **React Testing Library**, **@testing-library/jest-dom** e **jsdom**:
  - Testes unitários para validação de dados e constantes (`src/utils/__tests__/data.test.js`).
  - Testes de integração de componentes (`src/components/__tests__/Tabs.test.jsx`, `StatInfoCard.test.jsx`, `LanguageSelector.test.jsx`).
  - Teste de renderização global da aplicação (`src/__tests__/App.test.jsx`).
  - Configuração de mocks globais em `src/setupTests.js` para `react-i18next`, `matchMedia`, `IntersectionObserver`, `ResizeObserver` e `HTMLCanvasElement` (2D Context).
  - Novos scripts npm: `npm test` (`vitest run`), `npm run test:watch` e `npm run test:coverage`.
- **Esteira Unificada de CI/CD (`ci-cd.yml`)**: Pipeline integrada no GitHub Actions com Node.js 22 que executa validação de lint, testes automatizados, build de produção e aciona o **Semantic Release** de forma encadeada (`needs: test`) em pushes para a branch `main`.
- **Deploy Automatizado no Firebase Hosting (`firebase-hosting-merge.yml`)**: Workflow acionado **exclusivamente com a criação de novas tags de versão (`v*.*.*`)**, executando a validação final e o deploy em produção no **Firebase Hosting**.
- **Configuração do Semantic Release (`.releaserc.json`)**: Configuração automatizada baseada em Conventional Commits para geração de changelog, bump de versão no `package.json`, criação de tags Git e releases no GitHub.
- **Documentação Técnica Reestruturada**: Atualização completa do `README.md` contendo guia passo a passo, scripts npm, árvore do projeto e documentação das pipelines.

## [v1.0.0] - 2026-03-08

### Adicionado
- Criação da base da aplicação em React 19 + Vite 6 + Tailwind CSS v4.
- Interface responsiva com seções: Hero, Projects, Technical Proficiency, About, Contact e Footer.
- Funcionalidades de visualização e detalhes de projetos em modal.
- Internacionalização (i18n) completa com suporte a Português e Inglês.
- Animações avançadas com Framer Motion e renderização de partículas no canvas (`ParticleText`).
- Links para redes sociais e canais de contato.

[Não publicado]: https://github.com/JoaoGH/portfolio/compare/v1.0.0..main
[v1.0.0]: https://github.com/JoaoGH/portfolio/releases/tag/v1.0.0
