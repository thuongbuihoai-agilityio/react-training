import axios from "axios";
import Head from "next/head";
import { Banner, Navigation } from "@components/common";
import { BLOG_URL } from "@constants/url";
import { Blog } from "@common-types/blog";
import { useContext, useEffect } from "react";
import { DataContext } from "@context/DataContext";
import type { NextPage } from "next";
import Header from "@sections/Header";
import Footer from "@sections/Footer";
import MainSection from "@sections/MainSection";

interface HomeProps {
  blogs: Blog[];
  errorCode: string;
}

export const getStaticProps = async () => {
  try {
    const res = await axios.get(BLOG_URL);
    const blogs = res.data;
    return {
      props: {
        blogs: blogs,
        errorCode: false,
      },
    };
  } catch (errorCode) {
    return {
      props: {
        blogs: [],
        errorCode: errorCode,
      },
    };
  }
};

const Home: NextPage<HomeProps> = ({ blogs, errorCode }) => {
  const { setBlogs, setErrorCode } = useContext(DataContext);
  useEffect(() => {
    setBlogs(blogs);
    setErrorCode(errorCode);
  }, []);

  return (
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

      <main>
        <Header />
        <Navigation />
        <Banner
          url="/images/backgrounds/home-page.png"
          blurDataURL="/images/backgrounds/blur.jpg"
          text="Expert Automotive Knowledge at Your Fingertips"
        />
        <MainSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
