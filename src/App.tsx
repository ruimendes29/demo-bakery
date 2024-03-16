import React from "react";
import "./App.scss";
import Intro from "./sections/Intro/Intro";
import Menu from "./sections/Menu/Menu";
import InteractionSeparator from "./sections/InteractionSeparator/InteractionSeparator";
import DeliciousBaking from "./sections/DeliciousBaking/DeliciousBaking";
import VisitUs from "./sections/VisitUs/VisitUs";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Intro />
        <Menu />
        <InteractionSeparator />
        <DeliciousBaking />
        <VisitUs />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
