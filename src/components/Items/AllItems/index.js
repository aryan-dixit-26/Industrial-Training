//Dependencies
import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import map from "lodash/map";
//Internals
import PRODUCTS from "../../Data";

const AllItems = () => (
  <div className="items">
    {map(PRODUCTS, (product) => (
      <div key={product.id} className="item">
        <Link to={`/products/${product.id}`}>
          <div className="product-img">
            <img alt={product.name} src={product.img} />
          </div>
          <div className="product-details">
            <h1 id="product-name">{product.name}</h1>
            <h4 id="product-description">{product.description}</h4>
          </div>
        </Link>
        <div className="price-add">
          <h5 id="product-price">${product.price}</h5>
          <div
            onClick={() => {
              console.log(product);
              product.inCart = true;
              let x = document.createElement("span");
              x.innerHTML += "Product added to cart";
              x.style.position = "fixed";
              x.style.bottom = "20px";
              x.style.right = "30px";
              x.style.backgroundColor = "green";
              x.style.color = "white";
              x.style.border = "solid 1px gray";
              x.style.padding = "20px";
              x.style.fontSize = "large";
              x.style.borderRadius = "5px";
              x.style.transition = "500ms";
              document.getElementsByTagName("body")[0].appendChild(x);
              setTimeout(() => {
                x.remove();
              }, 2000);
            }}
          >
            <Icon small id="add-icon">
              {" "}
              add_shopping_cart{" "}
            </Icon>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default AllItems;
