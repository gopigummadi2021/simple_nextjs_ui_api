import react, { useEffect } from "react";
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Header from './header';
import "../styles/globals.css";
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = react.useState<any>(null);
  useEffect(() => {
    // Perform localStorage action
    let temp = localStorage.getItem('accessToken');
    console.log(temp)
    setAccessToken(temp)
  })
  return <>
    {accessToken ? <Header /> : null}
    <Component {...pageProps} />
  </>
}

export default MyApp
