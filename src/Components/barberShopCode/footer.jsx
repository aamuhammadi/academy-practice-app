import React from "react";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footer-img">
          <img src="img/vecter.png" />
        </div>
        <div className="title-text">
          <p>CONTACT</p>
          <h1>Visit Shop Today</h1>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h1>Opening Hours</h1>
            <p>
              <i className="far fa-clock" />
              Monday To Friday - 9AM To 9PM
            </p>
            <p>
              <i className="far fa-clock" />
              Saturday To Sunday - 8AM To 11PM
            </p>
          </div>
          <div className="footer-right">
            <h1>Get In Touch</h1>
            <p>
              <i className="fas fa-map-marker-alt" />
              #30 Shahzada Model City Chunian, XYZ City In Chunian
            </p>
            <p>
              <i className="fas fa-envelope" />
              example@website.com
            </p>
            <i className="fas fa-phone" />
            +92 3194476740
            <p />
            <div className="social-links">
              <a href="https://web.facebook.com/" target="_blank">
                {" "}
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://www.instagram.com/bilalamanatmuhammadi/"
                target="_blank"
              >
                {" "}
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@bilalamanatmuhammadi?lang=en/"
                target="_blank"
              >
                {" "}
                <i className="fab fa-tiktok" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCedD9jYhdMOCy-n6eqfMeMQ"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
              <p>Copyright Easy Toturial Youtube Channel</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
