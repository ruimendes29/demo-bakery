import React from "react";
import interactionSeparatorImage from "../../assets/images/interactionSeparator.jpg";
import "./InteractionSeparator.scss";
import { useAppDispatch } from "../../store/store";
import { openCart } from "../../store/cartOpenReducer";

export default function InteractionSeparator() {
  const handleClickToSeeFullMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };
  const dispatch = useAppDispatch();
  return (
    <section className="interaction-separator">
      <img src={interactionSeparatorImage} alt="Croissant and chocolate" />
      <div className="content-wrapper">
        <h2>Roll, proof, and bake. Every day.</h2>
        <p>
          When it comes to bread and sandwiches, freshness equals quality.
          That's why we bake our loaves, bagels, and sweet treats every single
          morning for maximum freshness.
        </p>
        <div className="btns-wrapper">
          <button onClick={handleClickToSeeFullMenu} className="primary">
            See full menu
          </button>
          <button
            onClick={() => {
              dispatch(openCart());
            }}
            className="secondary"
          >
            Order now
          </button>
        </div>
      </div>
    </section>
  );
}
