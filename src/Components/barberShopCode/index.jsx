import React from "react";
import MainBannerSec from "./mainBannerSec";
import FeaturesSec from "./featuresSec";
import ServicesSec from "./servicesSec";
import Testimonials from "./testimonials";
import Footer from "./footer";
import TestComponent from "./testComponent";

function BarberShop() {
  return (
    <div>
      <title>Bilal Shop Website Design</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />{" "}
      {/* main banner */}
      <MainBannerSec />
      {/* FEATURES */}
      <FeaturesSec />
      {/* SERVICES */}
      <ServicesSec />
      {/* TESTIMONIALS */}
      <Testimonials />
      {/* footter */}
      <Footer></Footer>
    </div>
  );
}

export default BarberShop;
