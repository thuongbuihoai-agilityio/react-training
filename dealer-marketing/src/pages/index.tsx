import type { NextPage } from "next";
import Head from "next/head";
import Header from "@src/components/common/Header/Header";
import Navigation from "@src/components/common/Navigation/Navigation";
import Banner from "@src/components/common/Banner/Banner";
import MainSection from "@src/sections/MainSection/MainSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dealer Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
        <Banner />
        <MainSection />
      </main>
    </div>
  );
};

export default Home;
