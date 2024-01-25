import React from "react";

import { Footer, HeroSection, Header, Card } from "../components/index";
import Head from "next/head";

const home = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
};

export default home;
