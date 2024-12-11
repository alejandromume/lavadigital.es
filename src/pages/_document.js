import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from "@next/third-parties/google"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Lava Digital es una agencia de marketing e innovación digital en Lanzarote especializada en el desarrollo web y digitalización que impulsa empresas en internet." />
        <meta name="keywords" content="lava digital, lavadigital, lavacreatuva, lanzarote, marketing, seo, desarrollo, canarias" />
        <meta name="author" content="" />
        <meta property="og:url" content="https://lavadigital.es/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Lava Digital - Agencia de Marketing Digital en Lanzarote"/>
        <meta property="og:description" content="Lava Digital es una agencia de marketing e innovación digital en Lanzarote especializada en el desarrollo web y digitalización que impulsa empresas en internet."/>
        <meta property="og:image" content="https://lavadigital.es/dark/assets/imgs/Portada.jpg"/>
        {/* ------ Favicon ------ */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="192x192" />
        {/* ------ Google Fonts ------ */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" />
        {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" />*/}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        {/* ------ bootstrap icons cdn ------ */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        {/* ------ Plugins ------ */}
        <link rel="stylesheet" href="/dark/assets/css/plugins.css" />
        {/* ------ Core Style Css ------ */}
        <link rel="stylesheet" href="/dark/assets/css/style.css" />
      </Head>
      <GoogleAnalytics gaId='G-H7LS6W9QLW'/>
      <script async src='/analytics.js'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
