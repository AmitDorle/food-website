import React, {useState} from 'react'
import axios from 'axios'

function AddItem() {

    const [id , setId] = useState("")
    const [title , setTitle] = useState("")
    const [category , setCategory] = useState("")
    const [price , setPrice] = useState("")

async function Add()
{
    const response = await axios.post('/add-food-item' , 
    {
        "id" : id,
        "title" : title,
        "category" : category,
        "price" : price
    })
    if(response){
        alert('Item added successfully')
        window.location.href="/"
       }
    }
  
    return (
      <div>
        <h1>Add Food Item</h1>
        <form>
         <input type="number" placeholder='Enter ID' onChange={(e)=>{setId(e.target.value)}} /> <br /><br />
         <input type="text" placeholder='Enter Title' onChange={(e)=>{setTitle(e.target.value)}}/> <br /><br />
         <input type="text" placeholder='Enter Category' onChange={(e)=>{setCategory(e.target.value)}}/> <br /><br />
         <input type="number" placeholder='Enter Price' onChange={(e)=>{setPrice(e.target.value)}}/> <br /><br /><br />
  
          <button type="button" onClick={Add}>Add Food Item</button>
        </form>
      </div>
    )
  }
export default AddItem