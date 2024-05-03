import React from "react";
import "../css/home.css";
import loin from "../Images/loin.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function Home(props) {
  return (
    <div className="redux">
      <div className="main">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={loin} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">King Loin</h5>
            <p className="card-text">
              <strong>price:$1000</strong>
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                props.addtocartHandler({ price: 1000, name: "Iphone 11" });
              }}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.removetocartHandler();
              }}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
