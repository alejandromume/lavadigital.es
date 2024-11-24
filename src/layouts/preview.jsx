import React, { useEffect } from 'react';
//= Packages
import Head from "next/head";
//= Components
import Loader from '@/components/Common/Loader';
import Cursor from '@/components/Common/Cursor';
import ProgressScroll from '@/components/Common/ProgressScroll';
//= Scripts
import correctStylesheetsOrder from '@/common/correctStylesheetsOrder';

const PreviewLayout = ({ children }) => {
  useEffect(() => {
    correctStylesheetsOrder({ preview: true });
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/landing-preview/css/preview-style.css" />
      </Head>

      <Loader />
      <Cursor />
      <ProgressScroll />
      {children}
    </>
  );
};

export default PreviewLayout;
