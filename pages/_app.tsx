import '../styles/global.css';
import React, { useState } from 'react';
import NavBar from '../components/nav-bar';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <NavBar open={open} setOpen={setOpen}>
      <Component {...pageProps} open={open} setOpen={setOpen} />
    </NavBar>
  );
}
