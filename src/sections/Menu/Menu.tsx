import React from "react";
import "./Menu.scss";

import { FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../../store/store";
import { bakeries, increment } from "../../store/cartReducer";

function Menu() {
  const dispatch = useAppDispatch();

  const [isPulsing, setIsPulsing] = React.useState("");

  const handlePulse = (name: string) => {
    setIsPulsing(name);
    // Reset pulsing after a short delay (adjust as needed)
    setTimeout(() => {
      setIsPulsing("");
    }, 300);
  };

  return (
    <section className="menu">
      <h2 id="menu">Bakery Items</h2>
      <p className="info whole-menu">
        Dive into a world of delectable wonders with our diverse menu. From
        flaky pastries to sweet indulgences, each bite is a journey to
        happiness. Savor the symphony of flavors crafted just for you.
      </p>
      <div className="cards-wrapper">
        {bakeries.map((bakery) => (
          <div className="card">
            <button
              onClick={() => {
                dispatch(increment(bakery.name));
                handlePulse(bakery.name);
              }}
              className={`add-item round ${
                isPulsing === bakery.name ? "pulse" : ""
              }`}
            >
              <FaPlus />
            </button>
            <img alt={bakery.description} src={bakery.image} />
            <p className="name">{bakery.name}</p>
            <p className="info">{bakery.description}</p>
            <p className="price">{bakery.price} €</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
