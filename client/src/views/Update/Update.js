import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { useParams } from "react-router-dom";
import "./Update.css"

function Update() {

  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    axios.post("/get_food", { id: id }).then((res) => {
        setTitle(res.data.data.title);
        setPrice(res.data.data.price);
        setCategory(res.data.data.category);
    })
}, [id])

function Update() {
    axios.post('/update_food', {
        id: id,
        title: title,
        price: price,
        category: category,
    }).then((res) => {
        swal({
            title: "Food Item updated",
            text: "Food Item updated successfully!",
            icon: "success",
          })
        window.location = "/"
    })
}

  return (
    <div className='add-food-item-container'>
      <div className='food-details-container'>
        <form>
          Title<br /><input type="text" value={title} className='box-style' placeholder='Enter Title' onChange={(e) => { setTitle(e.target.value) }} /><br /><br /> 
          Category<br /><input type="text" value={category} className='box-style' placeholder='Enter Category' onChange={(e) => { setCategory(e.target.value) }} /><br /><br /> 
          Price<br /><input type="number" value={price} className='box-style' placeholder='Enter Price' onChange={(e) => { setPrice(e.target.value) }} /><br /><br /> 

          <button type="button" className='add-food-btn' onClick={Update}>Update</button>
        </form>
      </div>
    </div>
  )
}
export default Update