# 🌿 EcoPass Landing Page

O **EcoPass** é uma plataforma inovadora que incentiva a sustentabilidade urbana. Através dela, os usuários podem trocar materiais recicláveis por créditos, que podem ser utilizados para pagar passagens de transporte público ou obter outros benefícios.

Esta aplicação é a landing page oficial e o portal de entrada para o sistema EcoPass, projetada com um design moderno, responsivo (mobile-first) e altamente focado na conversão de novos usuários.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com uma stack moderna focada em performance e experiência do desenvolvedor:

- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**: Para uma renderização rápida e um ambiente de desenvolvimento ultra-veloz.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e escalabilidade do código.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização utilitária para construção rápida de interfaces customizadas e responsivas.
- **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas e navegação entre as páginas (Início, Sobre Nós, Pontos de Coleta).
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones consistente e leve.

## 🗺️ Estrutura do Projeto

O site é dividido em três páginas principais:

1. **Início (`/`)**: Apresenta a proposta de valor principal, como a plataforma funciona (3 passos) e os principais indicadores do impacto da comunidade.
2. **Sobre Nós (`/sobre-nos`)**: Detalha os benefícios do sistema, tanto para o usuário quanto para o meio ambiente, apresentando cards de impacto.
3. **Pontos de Coleta (`/pontos-de-coleta`)**: Mostra os locais reais e simulados (ambientados em Garça/SP) onde as máquinas de coleta estão instaladas, seus horários de funcionamento e status operacional em tempo real.

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação em sua máquina local:

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Git

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/DarioKlein/landing-page-ecopass-react.git
```

2. Acesse a pasta do projeto:
```bash
cd landing-page-ecopass-react
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

## 📱 Funcionalidades de Destaque

- **Navegação Inteligente**: A navbar identifica automaticamente a página atual e destaca o link correspondente. Conta com um menu hambúrguer suave para dispositivos móveis.
- **Scroll Suave (Smooth Scroll)**: Ao clicar em links de âncora (como o "Sobre"), a tela desliza suavemente até a seção desejada.
- **Chamada para Ação (CTA)**: Botões estratégicos de "Acessar Plataforma" espalhados pela página que levam diretamente para o portal de login do sistema.
- **Responsividade Pura**: Todos os elementos (textos, botões, grades) se adaptam perfeitamente do menor celular a grandes monitores desktop.

---
*Desenvolvido para conectar sustentabilidade e mobilidade urbana.*
