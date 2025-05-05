import { faker } from '@faker-js/faker';

export const generateFakeContent = (slug: string) => {
  return {
    title: `Página ${slug}: ${faker.lorem.sentence()}`,
    content: faker.lorem.paragraphs(3),
  };
};
