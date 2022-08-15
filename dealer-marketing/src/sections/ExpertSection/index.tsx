import React from "react";
import { Text } from "@components/common";
import styleExpertSection from "./expertSection.module.css";
import CustomImage from "@components/common/CustomImage/CustomImage";

const ExpertSection = () => (
  <div className={styleExpertSection.expert}>
    <div className={styleExpertSection["expert-position"]}>
      <div className={styleExpertSection["expert-title"]}>
        <Text size="large" text="DMM Expert Podcast Interviews" />
      </div>
      <div className={styleExpertSection["expert-list"]}>
        <div className={styleExpertSection["expert-section"]}>
          <figure className={styleExpertSection["expert-layout"]}>
            <CustomImage
              url="/images/avatar/ibrahim-mesbah.png"
              alt="This is image of Mr adam dennis"
              className={styleExpertSection["expert-image"]}
              width={130}
              height={130}
            />
          </figure>
          <p className={styleExpertSection["expert-description"]}>
            Evaluating OEM Programs and Providing Better Customer Experiences
            with Ibrahim Mesbah
          </p>
          <figure className={styleExpertSection["expert-contact"]}>
            <CustomImage
              url="/images/inside-auto.png"
              alt="This is image inside auto"
              className={styleExpertSection["expert-image-contact"]}
              width={135}
              height={60}
            />
          </figure>
        </div>
        <div className={styleExpertSection["expert-section"]}>
          <figure className={styleExpertSection["expert-layout"]}>
            <CustomImage
              url="/images/avatar/ilana-shabtay.png"
              alt="This is image of Mr adam dennis"
              className={styleExpertSection["expert-image"]}
              width={130}
              height={130}
            />
          </figure>
          <p className={styleExpertSection["expert-description"]}>
            Experimarketing Episode 27: No Inventory? No Problem.
          </p>
          <figure className={styleExpertSection["expert-contact"]}>
            <CustomImage
              url="/images/experimaketing.png"
              alt="This is image inside auto"
              className={styleExpertSection["expert-image-contact"]}
              width={135}
              height={60}
            />
          </figure>
        </div>
        <div className={styleExpertSection["expert-section"]}>
          <figure className={styleExpertSection["expert-layout"]}>
            <CustomImage
              url="/images/avatar/brent-albrecht.png"
              alt="This is image of Mr adam dennis"
              className={styleExpertSection["expert-image"]}
              width={130}
              height={130}
            />
          </figure>
          <p className={styleExpertSection["expert-description"]}>
            Website Clicks?! they`re Still Clickin
          </p>
          <figure className={styleExpertSection["expert-contact"]}>
            <CustomImage
              url="/images/experimaketing.png"
              alt="This is image inside auto"
              className={styleExpertSection["expert-image-contact"]}
              width={135}
              height={60}
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
);

export default ExpertSection;
