import {React , useEffect, useState} from 'react'
import Add from '../Add/Add'

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
        {
        foodItems.map((item)=>
        {
            return <div>
                <Add id={item.id} 
                     title={item.title}
                     category={item.category}
                     price={item.price} />
                     </div>
        }
        )
        }
    </div>
  )
}

export default Show