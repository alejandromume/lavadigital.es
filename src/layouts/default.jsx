import React, { useEffect } from 'react';
//= Packages
import Head from "next/head";
//= Scripts
import correctStylesheetsOrder from '@/common/correctStylesheetsOrder';
//= Components
import Cursor from '@/components/Common/Cursor';
import ProgressScroll from '@/components/Common/ProgressScroll';

const DefaultLayout = ({ children, lightMode }) => {
  useEffect(() => {
    correctStylesheetsOrder({ lightMode });
  }, [lightMode]);

  return (
    <>
      <Head>
        {
          lightMode ?
            <>
              <link rel="stylesheet" href="/light/assets/css/plugins.css" />
              <link rel="stylesheet" href="/light/assets/css/style.css" />
            </>
            :
            <link rel="stylesheet" href="/dark/assets/css/base.css" />
        }
      </Head>

      {/*<Cursor />*/}
      <ProgressScroll />
      {children}
    </>
  );
};

export default DefaultLayout;
