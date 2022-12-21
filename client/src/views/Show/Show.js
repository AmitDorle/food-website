import {React , useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Add from '../Add/Add'
import "./Show.css"


import axios from "axios"

function Show() {

const [foodItems , setfoodItem] = useState([])

async function loadData()
{
    const response = await axios.get('/all-food-items')
    setfoodItem(response.data.data)
}

useEffect(()=>{
    loadData()
} ,)

  return (
    <div>
      <div className='Add-item-btn-container'>
        <Link to="/AddItem"><button className='add-item-btn'>Add Food Item</button></Link>
      </div>
    
    <div className="row">
        {
        foodItems.map((item)=>
        {
            return <div className="col-md-4">
                <Add id={item.id} 
                     title={item.title}
                     category={item.category}
                     price={item.price} />
                     </div>
        }
        )
        }
    </div>
    </div>
  )
}

export default Show