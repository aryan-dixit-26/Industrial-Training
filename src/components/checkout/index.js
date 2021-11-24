import React from "react";
import PRODS from "../Data/index";
import "./style.css";

export default function Checkout() {
  return (
    <div className="Bg">
      <div className="card">
        <h1>Your Total Bill</h1>
        <table>
          {PRODS.filter((x) => x.inCart).map((x) => {
            return (
              <tr>
                <td>{x.name}</td>
                <td style={{ textAlign: "end" }}>{x.price}$</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td style={{ textAlign: "end" }}>-------------</td>
          </tr>
          <tr>
            <td>Total</td>
            <td style={{ textAlign: "end" }}>
              {Math.round(
                PRODS.reduce((prev, x) => {
                  if (x.inCart) return prev + x.price;
                  return prev;
                }, 0)
              )}
              $
            </td>
          </tr>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "20px 0px",
          }}
        >
          <a className = 'a' href="https://www.paypal.com/in/home" target="_blank">Pay</a>
        </div>
      </div>
    </div>
  );
}
