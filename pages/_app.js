import '../styles/global.css';
import React, { useState } from 'react';
import NavBar from '../components/nav-bar';

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <NavBar open={open} setOpen={setOpen}>
      <Component {...pageProps} open={open} setOpen={setOpen} />
    </NavBar>
  );
}
