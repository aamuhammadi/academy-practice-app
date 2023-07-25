import React from "react";

function ServicesSec() {
  return (
    <>
      <section id="services">
        <div className="title-text">
          <p>SERVICES</p>
          <h1>We Provide Better</h1>
        </div>
        <div className="services-box">
          <div className="single-services">
            <div className="overlay" />
            <img src="img/hamam2.jpg" />
            <div className="overlay" />
            <div className="service-desc">
              <h3>HAIR STYLING</h3>
              <hr />
              <p>
                {" "}
                <em>
                  Salons offer a wide range of haircare services such as
                  haircuts, hairstyling, hair coloring, highlights, hair
                  treatments.
                </em>
              </p>
            </div>
          </div>
          <div className="single-services">
            <img src="img/berid.jpg" />
            <div className="overlay" />
            <div className="service-desc">
              <h3>BEARD TRIM</h3>
              <hr />
              <p>
                {" "}
                <em>
                  Salons provide skincare services such as facials, skin
                  treatments, exfoliation, acne treatments, anti-aging
                  treatments, and skincare consultations.
                </em>
              </p>
            </div>
          </div>
          <div className="single-services">
            <img src="img/hamam5.jpg" />
            <div className="overlay" />
            <div className="service-desc">
              <h3>HAIR CUT</h3>
              <hr />
              <p>
                <em>
                  Salons often have professional makeup artists who offer makeup
                  services for special occasions like weddings, parties, or
                  photoshoots.{" "}
                </em>
              </p>
            </div>
          </div>
          <div className="single-services">
            <img src="img/hamam4.jpg" />
            <div className="overlay" />
            <div className="service-desc">
              <h3>CHILD CUTING</h3>
              <hr />
              <p>
                <em>
                  Some salons offer specialized services like henna application,
                  hair straightening or perming, hair and scalp treatments,
                  scalp massages, or specific beauty treatments based on
                  cultural or regional preferences.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSec;
