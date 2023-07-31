import React from "react";

function SocialLinks() {
  return (
    <>
      <a href="https://web.facebook.com/" target="_blank">
        {" "}
        <i className="fab fa-facebook" />
      </a>
      <a href="https://www.instagram.com/bilalamanatmuhammadi/" target="_blank">
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
    </>
  );
}

export default SocialLinks;
