import React from "react";
import NavbarPC from "./navbar_pc";
import NavbarMB from "./navbar_mobile";
import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavbarPC />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
