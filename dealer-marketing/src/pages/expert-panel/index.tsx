import React from "react";
import Head from "next/head";
import Header from "@sections/Header";
import Footer from "@sections/Footer";
import { Navigation, Text } from "@components/common";
import { ExpertList } from "@components";
import style from "../../styles/base/common.module.css";

const OurExpertPage = () => {
  return (
    <div className={style["style-our-expert"]}>
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
      <div className={style["style-navigation"]}>
        <Navigation />
      </div>
      <div className={style["style-description"]}>
        <h2 className={style["style-heading"]}>The DMM Expert Panel</h2>
        <Text
          size="regular"
          text="Our Expert Panel consists of thirty automotive industry experts who share their knowledge and experience to help keep dealers informed on various topics such as Business Development, Dealership Business, Fixed Ops, Internet Marketing, Advertising, AI, Tech Solutions, Industry & Consumer Research, and more. With a combined LinkedIn following of 113,000+ followers, as an automotive industry professional or vendor, you are guaranteed to learn something new."
        />
      </div>
      <div className={style["style-expert"]}>
        <ExpertList />
      </div>
      <Footer />
    </div>
  );
};

export default OurExpertPage;
