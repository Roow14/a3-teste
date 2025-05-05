import { defineConfig } from 'tinacms';

export default defineConfig({
  schema: {
    collections: [
      {
        name: 'pages',
        label: 'Páginas',
        path: 'content/pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Título',
          },
          {
            type: 'text',
            name: 'content',
            label: 'Conteúdo',
          },
        ],
      },
    ],
  },
});
