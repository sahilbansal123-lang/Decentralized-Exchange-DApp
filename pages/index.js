import React from "react";

import { Footer, HeroSection, Header, Card } from "../components/index";
import Head from "next/head";

const home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
};

export default home;
