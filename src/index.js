import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import Cart from "./components/Cart";
import BaseLayout from "./components/BaseLayout";
import Women from "./components/Women";
import Men from "./components/Men";
import Clothes from "./components/Clothes";
import Accessories from "./components/Accessories";
import ShowProduct from "./components/ShowProduct";
import registerServiceWorker from "./registerServiceWorker";
import CheckOUT from "./components/checkout/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <BaseLayout>
          <App></App>
        </BaseLayout>
      </Route>
      <Route path="/cart">
        <BaseLayout>
          <Cart></Cart>
        </BaseLayout>
      </Route>
      <Route path="/women">
        <BaseLayout>
          <Women></Women>
        </BaseLayout>
      </Route>
      <Route path="/men">
        <BaseLayout>
          <Men></Men>
        </BaseLayout>
      </Route>
      <Route path="/clothes">
        <BaseLayout>
          <Clothes></Clothes>
        </BaseLayout>
      </Route>
      <Route path="/accessories">
        <BaseLayout>
          <Accessories></Accessories>
        </BaseLayout>
      </Route>
      <Route exact path="/products/:id">
        <BaseLayout>
          <ShowProduct></ShowProduct>
        </BaseLayout>
      </Route>

      <Route path="/checkout">
        <CheckOUT />
      </Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
registerServiceWorker();
