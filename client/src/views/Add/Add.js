import React from "react";
import axios from "axios";
import "./Add.css";

function Add(props) {
  function Delete() {
    axios.get("/delete-food-item-by-id");
  }

  function Update() {
    axios.get("/delete-food-item-by-id");
  }

  return (
    <div className="food-container">
      <h3>
        {props.id} : {props.title}
      </h3>
      <h4>
        {props.category} : ₹{props.price}
      </h4>
      <div className="button-container">
        <div>
          <button type="button" className="delete-button" onClick={Delete}>
            Delete
          </button>
        </div>
        <div>
          <button type="button" className="update-button" onClick={Update}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
