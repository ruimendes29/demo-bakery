import React from "react";
import "./Intro.scss";
import introImage from "../../assets/images/intro.jpg";

function Intro() {
  return (
    <section className="intro">
      <img src={introImage} alt="Bunch of bread in a basket" />
      <div>
        <h1>Crumb you believe it?</h1>
        <p>
          Welcome to our bakery, where calories hide in delicious disguises! Our
          pastries are so good, they're breaking up with your diet. Resistance
          is futile, indulge guilt-free!
        </p>
        <button
          onClick={() => {
            document
              .getElementById("more-info")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="primary"
        >
          Read More
        </button>
      </div>
    </section>
  );
}

export default Intro;
