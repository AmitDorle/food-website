import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

import Food from './model/food.js'

dotenv.config()
const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("connected to MongoDB Database.....")
})


// get all items
app.get('/all-food-items', async(req, res) => {

  const allFoods = await Food.find()

  res.json({
    success: true,
    data: allFoods,
    message: 'All food items fetched successfully'
  })
})

// add new item
app.post('/add-food-item', async(req, res) => {
  const { id, title, price, category } = req.body;

  const newItem = new Food({
    id: id,
    title: title,
    price: price,
    category: category
  })

  const savedFood = await newItem.save()
  // check if food item already exists with the same id
  // db.forEach((item) => {
  //   if (item.id === id) {
  //     return res.json({
  //       success: false,
  //       data: null,
  //       message: 'Food item already exists'
  //     })
  //   }
  // })

  res.json({
    success: true,
    data: newItem,
    message: 'New food item added successfully'
  })
})

app.post('/delete_food', async (req, res) => {
  const id = req.body.id;
  const results = await Food.deleteOne({ id: id });

  /*let index = -1;

  tasks.map((task, i) => {
      if (id === task.id) {
          index = i;
      }
  })
  tasks.splice(index, 1)*/

  res.json({
      'status': 'success',
      'massage': `successfully deleted task with id : ${id}`,
      'data': results
  })


})
app.post('/get_food', async (req, res) => {
  const id = req.body.id;

  const specificFood = await Food.findOne({ id: id });

  res.json({
      'status': 'success',
      // 'data': resultTask
      'data': specificFood
  })
})


app.post('/update_food', async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  const category = req.body.category;
 
  const updateResult = await Food.updateOne({ id: id }, {
      $set: {
          title: title,
          price: price,
          category: category,
      }
  })
  res.json({
      'status': 'success',
      'massage': ' Item updated successfully ',
      'data': updateResult
  })
})


app.get('/food-item-by-id', (req, res)=>{
  // read id from query params
  const id = req.query.id

  db.forEach((item)=>{
    if(item.id == id){
      return res.json({
        success: true,
        data: item,
        message: 'Food item fetched successfully'
      })
    }
  })

  res.json({
    success: false,
    data: null,
    message: 'Food item not found'
  })
})

app.get('/delete-food-item-by-id', (req, res)=>{
  const id = req.query.id

  db.forEach((item, index)=>{
    if(item.id == id){
      db.splice(index, 1)
      return res.json({
        success: true,
        data: db,
        message: 'Food item deleted successfully'
      })
    }
  })

  res.json({
    success: false,
    data: null,
    message: 'Food item not found'
  })
})





app.listen(5000, () => {
  console.log('listening on port 5000');
});