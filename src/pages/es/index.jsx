import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
//= Layout
import Layout from '@/layouts/default';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/MarketingAgency/Header';
import Marq from '@/components/MarketingAgency/Marq';
import About from '@/components/MarketingAgency/About';
import Clients from '@/components/MarketingAgency/Clients';
import SideImage from '@/components/MarketingAgency/SideImage';
import Services from '@/components/MarketingAgency/Services';
import Portfolio from '@/components/MarketingAgency/Portfolio';
import Intro from '@/components/MarketingAgency/Intro';
import Testimonials from '@/components/MarketingAgency/Testimonials';
import Blog from '@/components/MarketingAgency/Blog';
import CallToAction from '@/components/MarketingAgency/CallToAction';
import Marq2 from '@/components/MarketingAgency/Marq2';
import Footer from '@/components/MarketingAgency/Footer';
//import Footer from '@/components/Startup/Footer';
import Team from '@/components/OnePage/Team';

function HomeMarketingAgency() {
  useEffect(() => {
    document.body.classList.add('digital-marketing', 'sub-bg');
    customScript();
    return () => document.body.classList.remove('digital-marketing', 'sub-bg');
  }, []);

  return (
    <ParallaxProvider>
      <Head>
        <title>Lava Creativa - Agencia de Marketing</title>
      </Head>

      <Loader />
      <Navbar noStatic subBg />
      <main className="main-bg">
        <Header />
        {/*<Marq />*/}
        <About />
        <Team/>
        <Clients />
        {/*<SideImage />
        <Services />
        <Portfolio />
        {/*<Intro />*
        <Testimonials />
        <Blog />*/}
        <CallToAction/>
        
      </main>
      {/*<Footer />*/}

    </ParallaxProvider>
  )
}

HomeMarketingAgency.getLayout = page => <Layout>{page}</Layout>

export default HomeMarketingAgency;