import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/InnerPages/About/Services';
import Intro from '@/components/InnerPages/About/Intro';
import Testimonials from '@/components/DigitalAgency/Testimonials';
import Team from '@/components/Startup/Team';
import Clients from '@/components/InnerPages/About/Clients';
//import CallToAction from '@/components/Startup/CallToAction';
import CallToAction from '@/components/MarketingAgency/CallToAction';

import Footer from '@/components/Startup/Footer';

function PageAbout() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    window.scrollTo(0, 0);

    if(window.innerWidth > 988){
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollTrigger.normalizeScroll(true)
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    }
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "por qué Lava Digital ?",
    title: "Porque llevamos tu marca al siguiente nivel.",
    text: "POR QUÉ NOSOTROS"
  }

  return (
    <>
      <Head>
        <title>Lava Digital - Sobre nosotros</title>
      </Head>

      <Loader />
      {/*<Navbar mainBg />*/}
      <Navbar noStatic subBg/>
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header data={headerMetadata} />
            <Story />
            <Services />
            <CallToAction innerPageStyle />
          </div>
        </div>
      </main>
    </>
  )
}

PageAbout.getLayout = page => <Layout>{page}</Layout>

export default PageAbout;