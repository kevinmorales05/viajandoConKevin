import { Global, css } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Poppins, Roboto_Slab, Lora } from 'next/font/google';

// Configuración de las fuentes
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Párrafos
  variable: '--font-poppins',
});

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['700'], // Títulos
  variable: '--font-roboto',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'], // Subtítulos
  variable: '--font-lora',
});

// Estilos globales usando variables CSS
const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-poppins), sans-serif;
    line-height: 1.6;
  }
  h1, h2, h3 {
    font-family: var(--font-roboto), sans-serif; /* Fuente para títulos */
  }
  h4, h5, h6 {
    font-family: var(--font-lora), serif; /* Fuente para subtítulos */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main className={`${poppins.variable} ${roboto.variable} ${lora.variable}`}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
