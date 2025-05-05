import React from 'react';
import { TinaCMS } from '@tinacms/core';
import { TinaProvider } from '@tinacms/react';

export const TinaWrapper = ({ children }) => {
  const cms = new TinaCMS({
    enabled: true,
    apiUrl: 'http://localhost:4001', // A URL de sua API TinaCMS, você pode configurar conforme o seu ambiente
    // outras configurações do TinaCMS, caso necessário
  });

  return <TinaProvider cms={cms}>{children}</TinaProvider>;
};
