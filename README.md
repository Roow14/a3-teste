# A3-Teste

Este projeto foi criado com [TinaCMS](https://tina.io) integrado ao [Astro](https://astro.build), permitindo edição de conteúdo visual diretamente no navegador.

## 🚀 Tecnologias Utilizadas

- [Astro](https://astro.build)
- [TinaCMS](https://tina.io)
- [React](https://reactjs.org)
- [TypeScript (opcional)]

## 📦 Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Roow14/a3-teste.git
   cd a3-teste
Instale as dependências:

bash

npm install
🧪 Ambiente de Desenvolvimento
Para iniciar o servidor de desenvolvimento com TinaCMS:

bash

npm run dev
Isso irá rodar o site localmente em http://localhost:4321 e a interface de CMS estará disponível em http://localhost:4321/admin.

📝 Estrutura de Pastas
csharp

a3-teste/
├── .tina/               # Configuração do TinaCMS
├── content/             # Arquivos de conteúdo (ex: markdown)
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React/Astro
│   ├── layouts/         # Layouts do site
│   └── pages/           # Páginas do site
├── package.json         # Configuração do projeto
└── README.md            # Este arquivo
📂 Acesso ao CMS
Você pode acessar o CMS em:

bash

http://localhost:4321/admin
Certifique-se de que você está editando conteúdos válidos no diretório content/.

🛠️ Scripts Disponíveis
npm run dev — Inicia o servidor de desenvolvimento com TinaCMS.

npm run build — Gera a build de produção.

npm run preview — Visualiza a build de produção localmente.

🧠 Dicas
Se o CMS não aparecer em /admin, verifique se o arquivo admin.astro está dentro de src/pages/.

Para evitar erros com módulos do Node no Astro, use import ao invés de require.
