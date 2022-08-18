import React, { useContext, useEffect } from "react";
// components
import { Navigation, Text } from "@components/common";
import { ExpertList } from "@components";
import { TextType } from "@components/common/Text";

import { Expert } from "@common-types/expert";
import { EXPERT_RESPONSE_DATA } from "@api-backup/expertResponseData";
import Layout from "@layouts";
import style from "./expert.module.css";
import { ExpertContext } from "@context/ExpertContext";

interface OurExpertProps {
  experts: Expert[];
  errorCode: string;
}

export const getStaticProps = async () => {
  try {
    const experts: Expert[] = EXPERT_RESPONSE_DATA;
    return {
      props: {
        experts: experts,
        errorCode: "",
      },
    };
  } catch (errorCode) {
    return {
      props: {
        experts: [],
        errorCode: errorCode,
      },
    };
  }
};

const OurExpertPage: React.FC<OurExpertProps> = ({ experts, errorCode }) => {
  const { handleUpdateExperts } = useContext(ExpertContext);
  useEffect(() => {
    handleUpdateExperts(errorCode, experts);
  }, []);

  return (
    <Layout>
      <div className={style["our-expert-container"]}>
        <div className={style["our-expert-navigation"]}>
          <Navigation />
        </div>
        <div className={style["our-expert-description"]}>
          <h2 className={style["our-expert-heading"]}>The DMM Expert Panel</h2>
          <Text
            size={TextType.regular}
            text="Our Expert Panel consists of thirty automotive industry experts who share their knowledge and experience to help keep dealers informed on various topics such as Business Development, Dealership Business, Fixed Ops, Internet Marketing, Advertising, AI, Tech Solutions, Industry & Consumer Research, and more. With a combined LinkedIn following of 113,000+ followers, as an automotive industry professional or vendor, you are guaranteed to learn something new."
          />
        </div>
        <div className={style["our-expert-list"]}>
          <ExpertList />
        </div>
      </div>
    </Layout>
  );
};

export default OurExpertPage;
