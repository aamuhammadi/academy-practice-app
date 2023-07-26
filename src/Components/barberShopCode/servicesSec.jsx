import React from "react";
import servicesData from "./servicesData.json";

function ServicesSec() {
  // Step 1: Create an array of service objects

  return (
    <>
      <section id="services">
        <div className="title-text">
          <p>SERVICES</p>
          <h1>We Provide Better</h1>
        </div>
        <div className="services-box">
          {/* Step 2: Map through the services array */}
          {servicesData.slice(0, 2).map((s, i) => (
            <div key={i} className="single-services">
              <img src={s.imageSrc} />
              <div className="overlay" />
              <div className="service-desc">
                <h3>{s.title}</h3>
                <hr />
                <p>
                  <em>{s.description}</em>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicesSec;
