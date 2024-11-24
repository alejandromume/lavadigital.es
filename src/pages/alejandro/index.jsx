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
import Header from './Header';
import Marq from '@/components/MarketingAgency/Marq';
import About from './About';
import SideImage from '@/components/MarketingAgency/SideImage';
import Services from './Services';
import Portfolio from '@/components/MarketingAgency/Portfolio';
import Intro from '@/components/MarketingAgency/Intro';
import Testimonials from '@/components/MarketingAgency/Testimonials';
import Blog from '@/components/MarketingAgency/Blog';
import CallToAction from '@/components/MarketingAgency/CallToAction';
import Marq2 from '@/components/MarketingAgency/Marq2';
import Footer from '@/components/MarketingAgency/Footer';
//import Footer from '@/components/Startup/Footer';
import Team from '@/components/OnePage/Team';
import CookieConsent, {Cookies} from 'react-cookie-consent';
import Link from 'next/link';

function HomeMarketingAgency() {
  useEffect(() => {
    document.body.classList.add('digital-marketing', 'sub-bg');
    customScript();
    return () => document.body.classList.remove('digital-marketing', 'sub-bg');
  }, []);

  return (
    <ParallaxProvider>
      <Head>
        <title>Lava Digital - Agencia de Marketing en Lanzarote</title>
      </Head>
      <CookieConsent
          location="bottom"
          overlay
          buttonText="Aceptar"
          cookieName="cookieConsent"
          style={{ background: "#1A1A1A" }}
          buttonStyle={{borderColor: "#fff", border: "2px solid white", padding: "14px 35px", borderRadius: "30px", background: "transparent", color: "#fff" }}
          
          expires={150}
        >
         Usamos <Link href="/cookies"><u>cookies</u></Link> para mejorar su experiencia de navegación en nuestra web, para mostrarle contenidos personalizados y para analizar el tráfico en nuestra web.
        </CookieConsent>
      <Loader />
      <Navbar noStatic subBg />
      <main className="main-bg">
        <Header />
        <Services />
        {/*<Marq />
        <About />

        <SideImage/>
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
      </main>
      {/*<Footer />*/}

    </ParallaxProvider>
  )
}

HomeMarketingAgency.getLayout = page => <Layout>{page}</Layout>

export default HomeMarketingAgency;