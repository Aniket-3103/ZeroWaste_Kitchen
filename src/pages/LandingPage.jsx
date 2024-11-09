import React from "react";
import { Layout } from "../components/LayoutComponent";
import LandingPageComponent from "../components/landingpage/LandingPageComponent";

function LandingPage() {
  return <Layout children={<LandingPageComponent />} />;
}

export default LandingPage;
