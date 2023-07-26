import React from "react";

function TwoServices() {
  return (
    <>
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
              hair straightening or perming, hair and scalp treatments, scalp
              massages, or specific beauty treatments based on cultural or
              regional preferences.
            </em>
          </p>
        </div>
      </div>
    </>
  );
}

export default TwoServices;
