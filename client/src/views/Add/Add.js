import React from "react";
import axios from "axios";
import "./Add.css";
import swal from 'sweetalert'
import { Link } from "react-router-dom";

function Add(props) {
  function deleteFood(id) {
    axios.post('/delete_food', { id: id }).then((res) => {
      swal({
        title: "Item deleted",
        text: "Item deleted successfully!",
        icon: "success",
      })
      window.location.reload();
    })
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
          <button type="button" className="delete-button" onClick={(e) => { deleteFood(props.id) }}>
            Delete
          </button>
        </div>
        <div>
        <Link to={`/Update/${props.id}`}>
          <button className='update-button'>Update</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Add;
