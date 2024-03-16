import React, { useRef } from "react";
import "./Cart.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  bakeries,
  changeValue,
  cleanUp,
  finishOrder,
} from "../../store/cartReducer";
import { closeCart, toggleCart } from "../../store/cartOpenReducer";
import { FaCheck } from "react-icons/fa";

function Cart() {
  const cartCount = useAppSelector((state) => {
    let count = 0;
    for (let key in state.cart) {
      count += state.cart[key] ?? 0;
    }
    return count;
  });

  const cartState = useAppSelector((state) => {
    return state.cart;
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  const dispatch = useAppDispatch();

  const cartOpen = useAppSelector((state) => state.cartOpen.cartOpen);

  const makePayment = () => {
    dialogRef.current?.showModal();
  };

  const handleOrderFinished = () => {
    setTimeout(() => {
      dialogRef.current?.close();
      setOrderFinished(false);
      dispatch(finishOrder());
      dispatch(closeCart());
    }, 2000);
    setOrderFinished(true);
  };

  const [orderFinished, setOrderFinished] = React.useState(false);

  const bakeriesInCart = Object.entries(cartState).filter(
    (value) => value[1] !== null
  );

  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch(toggleCart());
          dispatch(cleanUp());
        }}
        className={`cart round ${cartOpen ? "active" : ""}`}
        title="Your cart"
      >
        {!cartOpen && (
          <React.Fragment>
            <div className="count">{cartCount}</div>
            <FaShoppingCart />
          </React.Fragment>
        )}
        {cartOpen && (
          <div className="active-cart-wrapper">
            <div className="bakeries-cart-wrapper">
              {bakeriesInCart.map((cartBakery) => (
                <div className="bakery-cart-wrapper">
                  <span className="bakery-cart-name">{cartBakery[0]}:</span>
                  <input
                    onClick={(event) => {
                      event?.stopPropagation();
                    }}
                    onChange={(event) => {
                      const target = event?.target as HTMLInputElement;
                      if (target) {
                        dispatch(
                          changeValue({
                            name: cartBakery[0],
                            value: +target.value,
                          })
                        );
                      }
                    }}
                    value={cartBakery[1]!}
                    type="number"
                  />
                  <span className="bakery-cart-price">
                    *{" "}
                    {bakeries
                      .find((bakery) => bakery.name === cartBakery[0])
                      ?.price.toFixed(2)}
                    €
                  </span>
                </div>
              ))}

              {bakeriesInCart.length === 0 && (
                <span className="empty-cart-info">
                  Oops! It looks like your cart is as empty as a bakery without
                  any pastries. Time to fill it up with some delicious treats!
                </span>
              )}
            </div>

            <button
              onClick={(event) => {
                event.stopPropagation();
                makePayment();
              }}
              disabled={bakeriesInCart.length === 0}
              className="primary"
            >
              Checkout:{" "}
              {Object.entries(cartState)
                .filter(
                  (cartBakery) => cartBakery[1] !== null && cartBakery[1] > 0
                )
                .reduce(
                  (total, currentCartBakery) =>
                    total +
                    currentCartBakery[1]! *
                      bakeries.find(
                        (bakery) => bakery.name === currentCartBakery[0]
                      )!.price,
                  0
                )
                .toFixed(2)}
              €
            </button>
          </div>
        )}
      </button>
      <dialog
        className={orderFinished ? "order-finished" : ""}
        id="orderDialog"
        ref={dialogRef}
      >
        {!orderFinished && (
          <React.Fragment>
            <p>
              <strong>
                Please enter your information to complete your delicious bakery
                order! We promise not to share your address with the cookie
                monsters. 😉
              </strong>
            </p>
            <form method="dialog" onSubmit={handleOrderFinished}>
              <div className="inputs-wrapper">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required />
                </div>
                <div className="input-group">
                  <label htmlFor="address">Address</label>
                  <input id="address" type="text" required />
                </div>
              </div>

              <div className="buttons-wrapper">
                <button
                  className="secondary"
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                >
                  Cancel
                </button>
                <button className="primary" type="submit">
                  Confirm
                </button>
              </div>
            </form>
          </React.Fragment>
        )}
        {orderFinished && <FaCheck />}
      </dialog>
    </React.Fragment>
  );
}

export default Cart;
