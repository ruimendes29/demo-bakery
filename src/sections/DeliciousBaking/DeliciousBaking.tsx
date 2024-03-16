import React from "react";
import "./DeliciousBaking.scss";
import institutionsImage from "../../assets/images/institutions.png";
import bakedFreshImage from "../../assets/images/bakedFresh.png";
import greatValueImage from "../../assets/images/greatValue.png";
import deliveryImage from "../../assets/images/delivery.png";
import noOrderTooBigImage from "../../assets/images/noOrderTooBig.png";
import deliciousImage from "../../assets/images/delicious.png";

const items = [
  {
    title: "Baked Fresh Daily",
    description:
      "Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft",
    image: bakedFreshImage,
  },
  {
    title: "Great Value",
    description:
      "With the most competitive prices on the market we are able to deliver great value without compromising on taste",
    image: greatValueImage,
  },
  {
    title: "Institutions",
    description:
      "We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow",
    image: institutionsImage,
  },
  {
    title: "Delivery To Your Door",
    description:
      "We deliver to your door, so you can enjoy our delicious bread without leaving your home. Order now and get it!",
    image: deliveryImage,
  },
  {
    title: "No Order Too Large",
    description:
      "No order is too large for us. We have the capacity to deliver to any institution, no matter how big or small.",
    image: noOrderTooBigImage,
  },
  {
    title: "Delicious Baking",
    description:
      "Our baking is delicious and we have a wide range of products to choose from.",
    image: deliciousImage,
  },
];

function DeliciousBaking() {
  return (
    <section className="delicious-baking" id="more-info">
      {items.map((item, index) => (
        <div key={index} className="item">
          <img src={item.image} alt={item.title} />
          <div className="item-wrapper">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default DeliciousBaking;
