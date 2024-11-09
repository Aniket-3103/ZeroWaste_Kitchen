import React from "react";
import { LandingPageNavbar } from "./LandingPageNavbar";
import LandingPageFooter from "./LandingPageFooter";

const Layout = ({ children }) => {
  return (
    <>
      <LandingPageNavbar />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export { Layout };
