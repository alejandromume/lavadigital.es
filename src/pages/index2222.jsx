import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/preview';
//= Components
import Navbar from '@/components/Preview/Navbar';
import Overlay from '@/components/Preview/Overlay';
import Header from '@/components/Preview/Header';
import Demos from '@/components/Preview/Demos';
import Marq from '@/components/Preview/Marq';
import Pages from '@/components/Preview/Pages';
import ShopDemos from '@/components/Preview/ShopDemos';
import CallToAction from '@/components/Preview/CallToAction';
import Footer from '@/components/Preview/Footer';

function LandingPreview() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Preview</title>
      </Head>

      <Navbar />
      <Overlay />
      <main>
        <Header />
        <Demos />
        <Marq />
        <Pages />
        <ShopDemos />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

LandingPreview.getLayout = page => <Layout>{page}</Layout>

export default LandingPreview;