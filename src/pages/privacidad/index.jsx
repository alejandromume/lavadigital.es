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
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Lava Digital - Política de Privacidad</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header/>
        <Details />
      </main>
      <CallToAction />
    </>
  )
}

BlogDetails.getLayout = page => <Layout>{page}</Layout>

export default BlogDetails;