import React, { useEffect, useState } from 'react';
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
import HeaderCorporate from '@/components/Corporate/Header';
//import HeaderOnePage from '@/components/OnePage/Header';
import NavResponsive from "@/components/Showcases/Navigation"
import MenuResponsive from "@/components/Showcases/Menu"


import Marq from '@/components/MarketingAgency/Marq';
import About from '@/components/MarketingAgency/About';
import Clients from '@/components/MarketingAgency/Clients';
import SideImage from '@/components/MarketingAgency/SideImage';
//import Services from '@/components/MarketingAgency/Services';
import Portfolio from '@/components/MarketingAgency/Portfolio';
import Intro from '@/components/MarketingAgency/Intro';
import Testimonials from '@/components/MarketingAgency/Testimonials';
import Blog from '@/components/MarketingAgency/Blog';
import CallToAction from '@/components/MarketingAgency/CallToAction';
import Marq2 from '@/components/MarketingAgency/Marq2';
import Footer from '@/components/MarketingAgency/Footer';
//import Footer from '@/components/Startup/Footer';
//import Team from '@/components/OnePage/Team';
import CookieConsent, {Cookies} from 'react-cookie-consent';
import Link from 'next/link';
import Services from '@/components/Corporate/Services';
import Team from '@/components/OnePage/Team';

function HomeMarketingAgency() {

  useEffect(() => {
    document.body.classList.add('digital-marketing', 'sub-bg');
    customScript();
    if(window.innerWidth > 988){
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollTrigger.normalizeScroll(true)
      ScrollSmoother.create({
        smooth: 1.3,
        effects: true,
      });
    }
    return () => document.body.classList.remove('digital-marketing', 'sub-bg');
  }, []);

  return (
    <ParallaxProvider>
      <Head>
        <title>Lava Digital - Agencia de Marketing digital en Lanzarote</title>
      </Head>
      <CookieConsent
          location="bottom"
          buttonText="Aceptar"
          cookieName="cookieConsent"
          style={{ background: "#1A1A1A" }}
          buttonStyle={{borderColor: "#fff", border: "2px solid white", padding: "14px 35px", borderRadius: "30px", background: "transparent", color: "#fff" }}
          
          expires={150}
        >
        Utilizamos <Link href="/cookies"><u>cookies</u></Link> de terceros para analizar el uso del sitio web y mostrarte publicidad relacionada con tus preferencias sobre la base de un perfil elaborado a partir de tus hábitos de navegación (por ejemplo, páginas visitadas).
        </CookieConsent>
      <Loader />

      {/*
        width < 500 ? (
          <>
            <NavResponsive/>
            <MenuResponsive/>
          </>
        ) : (
          <Navbar noStatic subBg />
        )
      */}
          <Navbar noStatic subBg />

      <main className="main-bg">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeaderCorporate/>
            <Services/>
            {/*<Header />
            {/*<Marq />*/}
            <About />
            <Clients />
            <Team/>
            <SideImage/>
            <Intro /> 
            <Blog />
            {/*<Team/>*
            <Clients />
            {/*<SideImage />
            <Services />
            <Portfolio />
            {/*<Intro />*
            <Testimonials />
            <Blog />*/}
            <CallToAction/>
          </div>
        </div>
      </main>
      {/*<Footer />*/}

    </ParallaxProvider>
  )
}

HomeMarketingAgency.getLayout = page => <Layout>{page}</Layout>

export default HomeMarketingAgency;