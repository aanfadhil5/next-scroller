import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
