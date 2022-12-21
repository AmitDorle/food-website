import React, { useState } from 'react'
import axios from 'axios'
import "./AddItem.css"

function AddItem() {

  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  async function Add() {
    const response = await axios.post('/add-food-item',
      {
        "id": id,
        "title": title,
        "category": category,
        "price": price
      })
    if (response) {
      alert('Item added successfully')
      window.location.href = "/"
    }
  }

  return (
    <div className='add-food-item-container'>
      <div className='food-details-container'>
        <form>
          ID<br /><input type="number" className='box-style' placeholder='Enter ID' onChange={(e) => { setId(e.target.value) }} /><br /><br /> 
          Title<br /><input type="text" className='box-style' placeholder='Enter Title' onChange={(e) => { setTitle(e.target.value) }} /><br /><br /> 
          Category<br /><input type="text" className='box-style' placeholder='Enter Category' onChange={(e) => { setCategory(e.target.value) }} /><br /><br /> 
          Price<br /><input type="number" className='box-style' placeholder='Enter Price' onChange={(e) => { setPrice(e.target.value) }} /><br /><br /> 

          <button type="button" onClick={Add}>Add Food Item</button>
        </form>
      </div>
    </div>
  )
}
export default AddItem