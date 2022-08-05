import Head from "next/head";
import React from "react";
import Footer from "@sections/Footer";
import Header from "@sections/Header";
import AboutSection from "@sections/AboutSection";
import { Banner, Navigation } from "@components/common";

const AboutPage = () => (
  <>
    <Head>
      <title>Dealer Marketing</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Head>

    <Header />
    <Navigation />
    <Banner url="/images/backgrounds/bg-oto.jpg" text="About Us" />
    <AboutSection />
    <Footer />
  </>
);

export default AboutPage;
