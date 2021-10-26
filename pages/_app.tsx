import { useState } from 'react';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <NavBar open={open} setOpen={setOpen}>
      <Component {...pageProps} />
    </NavBar>
  );
}
