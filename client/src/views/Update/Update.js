import React, { useState } from 'react'
import axios from 'axios'
import "./Update.css"

function AddItem() {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  async function Update() {
    const response = await axios.post('/add-food-item',
      {
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
          Title<br /><input type="text" className='box-style' placeholder='Enter Title' onChange={(e) => { setTitle(e.target.value) }} /><br /><br /> 
          Category<br /><input type="text" className='box-style' placeholder='Enter Category' onChange={(e) => { setCategory(e.target.value) }} /><br /><br /> 
          Price<br /><input type="number" className='box-style' placeholder='Enter Price' onChange={(e) => { setPrice(e.target.value) }} /><br /><br /> 

          <button type="button" className='add-food-btn' onClick={Update}>Update</button>
        </form>
      </div>
    </div>
  )
}
export default AddItem