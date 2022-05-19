/* eslint-disable prettier/prettier */
import { AppProps } from 'next/app';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
