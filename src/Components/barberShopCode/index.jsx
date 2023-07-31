import React, { useEffect } from "react";
import MainBannerSec from "./mainBannerSec";
import FeaturesSec from "./featuresSec";
import ServicesSec from "./servicesSec";
import Testimonials from "./testimonials";
import Footer from "./footer";
import TestComponent from "./testComponent";

function BarberShop({ MainHeading, SubHeading }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    var manubtn = document.getElementById("manubtn")
    var sideNav = document.getElementById("sideNav")
    var manu = document.getElementById("MANU")
    sideNav.style.right = "-250px"
    manubtn.onclick = function () {
        if (sideNav.style.right == "-250px") {
            sideNav.style.right = "0";
            manu.src = "img/x-solid.svg";
        }
        else {
            sideNav.style.right = "-250px";
            manu.src = "img/menu-icon.svg";

        }

    }
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <title>Bilal Shop Website Design</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />{" "}
      {/* main banner */}
      <MainBannerSec Heading={MainHeading} SubHeading={SubHeading} />
      {/* FEATURES */}
      <FeaturesSec />
      {/* SERVICES */}
      <ServicesSec />
      {/* TESTIMONIALS */}
      <Testimonials />
      {/* footter */}
      <Footer />
    </div>
  );
}

export default BarberShop;
