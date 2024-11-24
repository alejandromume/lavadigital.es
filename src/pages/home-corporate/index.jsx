import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Corporate/Header';
import Services from '@/components/Corporate/Services';
import About from '@/components/Corporate/About';
import Marq from '@/components/Corporate/Marq';
import Portfolio from '@/components/Corporate/Portfolio';
import Numbers from '@/components/Corporate/Numbers';
import Testimonials from '@/components/Corporate/Testimonials';
import Block from '@/components/Corporate/Block';
import Pricing from '@/components/Corporate/Pricing';
import Blog from '@/components/Corporate/Blog';
import Footer from '@/components/Corporate/Footer';

function HomeCorporate() {
  useEffect(() => {
    document.body.classList.add('home-corp');
    return () => document.body.classList.remove('home-corp');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Corporate</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar />
      <main className="main-bg">
        <Header />
        <Services />
        <About />
        <Marq />
        <Portfolio />
        <Numbers />
        <Testimonials />
        <Block />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

HomeCorporate.getLayout = page => <Layout>{page}</Layout>

export default HomeCorporate;