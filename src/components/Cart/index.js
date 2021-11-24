//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import { NavLink } from "react-router-dom";
//Internals
import "./index.css";
import PRODS from "../Data/index";

class CartProducts extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Shoping Cart</h1>
        <div className="items">
          {PRODS.filter((x) => x.inCart).map((x) => {
            return (
              <div className="cartItem">
                <div>
                  <img src={x.img} />
                </div>
                <div className="yo">
                  <h4>{x.name}</h4>
                  <p>{x.description}</p>
                </div>
                <div className="yo">
                  <p>{x.gender}</p>
                  <p>{x.type}</p>
                  <p>{x.category}</p>
                </div>
                <div className="yo">
                  <h3>{x.price}$</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <p>
            <NavLink
              activeClassName="select"
              className="nav-link-head"
              to="/checkout"
            >
              Check Out
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}

export default CartProducts;
