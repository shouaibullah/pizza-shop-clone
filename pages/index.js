import React from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Head from 'next/head';

const index = () => {
  return (
    <main>
      <Head>
        <title>Pizza Shop | Home</title>
        <link rel="icon" href="/svgs/logo.svg" />
      </Head>
      <Hero />
      <Cart />
    </main>
  );
};

export default index;
