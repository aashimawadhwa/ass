// pages/_app.tsx

import "@/styles/globals.css";
import React from 'react';
import Header from '../components/Header';
import  hostnamesDB  from '@/lib/db';
import type { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="h-screen bg-white">
      <Header hostnames={hostnamesDB} />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
