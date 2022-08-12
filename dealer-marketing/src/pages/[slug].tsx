import axios from "axios";
import Script from "next/script";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// constants
import { BLOG_URL } from "@constants/url";

// common-types
import { Blog } from "@common-types/blog";

// components
import { Banner, Navigation, Text } from "@components/common";

// layouts
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import style from "../styles/base/common.module.css";
import { BLOG_RESPONSE_DATA } from "@api-backup/blogResponseData";

interface BlogProps {
  blog: Blog;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  // const blogs = await axios.get(BLOG_URL);
  const blogs: Blog[] = BLOG_RESPONSE_DATA;

  const paths = blogs.map((blog: Blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  // const res = await axios.get(BLOG_URL + "?slug=" + slug);
  const res = BLOG_RESPONSE_DATA.filter((item) => item.slug == slug);

  return {
    props: {
      blog: res[0],
    },
  };
};

const BlogDetail: React.FC<BlogProps> = ({ blog }) => {
  const {
    title = "",
    expertId = "",
    createDate = "",
    description = "",
    image = { url: "/images/past-present-future.png", alt: "" },
  } = blog ? blog : {};

  return (
    <div>
      <Head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-WK9ZN93")`,
          }}></Script>
        {/* End Google Tag Manager */}
        <title>Dealer Marketing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />
      <Banner
        url={image.url}
        text=""
        blurDataURL="/images/backgrounds/blur.jpg"
      />
      <div itemScope itemType="https://schema.org/Blog" className="container">
        <div className={style["style-info"]}>
          <div className={style["style-card"]}>
            <div className={style["style-title"]}>
              <Text size="largeDark" text={title} />
            </div>
            <hr />
            <div className={style["style-author"]}>
              <figure>
                <Image
                  itemProp="image"
                  src={image.url}
                  alt={image.alt}
                  className={style["style-image"]}
                  width={60}
                  height={60}
                  placeholder="blur"
                  blurDataURL="/images/backgrounds/blur.jpg"
                />
              </figure>
              <div className={style["style-funeral"]}>
                <p>
                  by <span>{expertId}</span>
                </p>
                <p>{createDate}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className={style["style-info-regular"]}>
            <Text itemProp="description" size="regular" text={description} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
