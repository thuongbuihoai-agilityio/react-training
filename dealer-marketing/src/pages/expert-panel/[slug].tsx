import React from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { EXPERT_URL } from "@constants/url";
import { Expert } from "@common-types/expert";
import { Banner, Navigation, Text } from "@components/common";
import { ParsedUrlQuery } from "querystring";
import Header from "@sections/Header";
import Footer from "@sections/Footer";
import style from "../../styles/base/common.module.css";

interface ExpertProps {
  expert: Expert;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const experts = await axios.get(EXPERT_URL);

  const paths = experts.data.map((expert: Expert) => {
    return {
      params: { slug: expert.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await axios.get(EXPERT_URL + "?slug=" + slug);

  return {
    props: {
      expert: res.data[0],
    },
  };
};

const OurExpert: React.FC<ExpertProps> = ({ expert }) => {
  const {
    name = "Matt Childers",
    info = "",
    description = "",
    image = { url: "/images/avatar/matt-childers.png", alt: "" },
  } = expert ? expert : {};

  return (
    <div>
      <Head>
        <title>Dealer Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />
      <Banner url="/images/backgrounds/bg-oto.jpg" text="" />
      <div className={style["container-expert"]}>
        <figure className={style["style-layout-image"]}>
          <Image
            src={image.url}
            alt={image.alt}
            className={style["style-image"]}
            width={130}
            height={130}
            placeholder="blur"
            blurDataURL="/images/backgrounds/blur.jpg"
          />
        </figure>
        <div className={style["style-info"]}>
          <h2 className={style["style-name"]}>{name}</h2>
          <p className={style["style-content"]}>{info}</p>
          <Text size="regular" text={description} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurExpert;
