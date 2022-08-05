import useSWR from "swr";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { EXPERT_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { Expert } from "@common-types/expert";
import { Banner, Navigation, Text } from "@components/common";
import { useRouter } from "next/router";
import style from "../../styles/base/common.module.css";
import Header from "@sections/Header/Header";
import Footer from "@sections/Footer/Footer";

const OurExpert = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useSWR(EXPERT_URL + "?slug=" + slug, getData<Expert[]>);
  const {
    name = "",
    info = "",
    description = "",
    image = { url: "/images/avatar/matt-childers.png", alt: "" },
  } = data ? data[0] : {};

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
