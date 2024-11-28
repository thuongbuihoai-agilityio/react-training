import React from "react";
import Footer from "../components/footer/Footer";

export default {
  title: "Component/Footer",
  component: Footer,
};

export function Default() {
	const COPYRIGHT_INFO = "© Copyright Brood Designer. All Rights Reserved";
  return (
    <Footer copyrightInfo={COPYRIGHT_INFO} />
  );
}
