import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Contact/Header';
import Form from '@/components/InnerPages/Contact/Form';
import Footer from '@/components/Freelancer/Footer';


function PageContact() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    window.scrollTo(0, 0);

    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Lava Digital - Contacto</title>
      </Head>

      <Loader />
      {/*<Navbar mainBg />*/}
      <Navbar noStatic subBg/>
      <main>
        {/*<Header />*/}
        <Form />
      </main>
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;