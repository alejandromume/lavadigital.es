import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Details from './Details';
import Footer from '@/components/Startup/Footer';
import Header from './Header';
import CallToAction from '@/components/MarketingAgency/CallToAction';


function BlogDetails() {
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

  return (
    <>
      <Head>
        <title>Lava Digital - Desarrollo Web</title>
      </Head>

      <Loader />
      {/*<Navbar mainBg />*/}
      <Navbar noStatic subBg/>
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header/>
            <Details />
            <CallToAction />

          </div>
        </div>
      </main>
    </>
  )
}

BlogDetails.getLayout = page => <Layout>{page}</Layout>

export default BlogDetails;