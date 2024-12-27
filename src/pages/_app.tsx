import { Global, css } from '@emotion/react';
import type { AppProps } from 'next/app';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

