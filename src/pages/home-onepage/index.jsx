import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import LinesTwo from '@/components/Common/LinesTwo';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/OnePage/Header';
import About from '@/components/OnePage/About';
import Marq from '@/components/OnePage/Marq';
import Services from '@/components/OnePage/Services';
import Portfolio from '@/components/OnePage/Portfolio';
import Intro from '@/components/OnePage/Intro';
import Testimonials from '@/components/OnePage/Testimonials';
import ImageSection from '@/components/OnePage/Image';
import Team from '@/components/OnePage/Team';
import Blog from '@/components/OnePage/Blog';
import Contact from '@/components/OnePage/Contact';
import Footer from '@/components/OnePage/Footer';

function HomeOnePage() {
  useEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - One Page</title>
      </Head>

      <Loader />
      <LinesTwo />
      <Navbar curve noStatic />
      <main className="main-bg">
        <Header />
        <About />
        <Marq />
        <Services />
        <Portfolio />
        <Intro />
        <Testimonials />
        <ImageSection />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

HomeOnePage.getLayout = page => <Layout>{page}</Layout>

export default HomeOnePage;