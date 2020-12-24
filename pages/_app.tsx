import React, { useState } from 'react';
import { AppProps } from 'next/app';

import NavBar from '../components/nav-bar';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  return (
    <NavBar open={open} setOpen={setOpen}>
      <Component {...pageProps} open={open} setOpen={setOpen} />
    </NavBar>
  );
}
