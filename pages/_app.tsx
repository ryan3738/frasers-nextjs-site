import React, { useState } from 'react'
import { AppProps } from 'next/app'
import SimpleReactLightbox from 'simple-react-lightbox'
import NavBar from '../components/nav-bar'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)
  return (
    <NavBar open={open} setOpen={setOpen}>
      <SimpleReactLightbox>
        <Component {...pageProps} open={open} setOpen={setOpen} />
      </SimpleReactLightbox>
    </NavBar>
  )
}
