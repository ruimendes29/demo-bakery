import React from "react";
import "./VisitUs.scss";
import visitUsImage from "../../assets/images/visitUs.jpg";

function VisitUs() {
  return (
    <section className="visit-us">
      <div className="visit-wrapper">
        <h2>Visit us</h2>
        <p>
          123 Bakery Lane,
          <br />
          Cookieville, CA 12345
        </p>
        <h2>Opening hours</h2>
        <p>
          Monday to Friday: 7am - 7pm
          <br />
          Saturday and Sunday: 8am - 5pm
        </p>
        <h2>Contact us</h2>
        <p>
          Phone: 123-456-7890
          <br />
          Email: <a href="mailto:cakeboss@bakery.com">cakeboss@bakery.com</a>
        </p>
      </div>
      <img src={visitUsImage} alt="Visit us" />
    </section>
  );
}

export default VisitUs;
