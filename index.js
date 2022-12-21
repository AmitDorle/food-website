import express from "express";
// const mongoose = require("mongoose")
const app = express();

// const Food = require('./model/food')

// require('dotenv').config()
// const PORT = process.env.PORT || 5000;
app.use(express.json())

//temp database
//let tasks = [];

// mongoose.connect(process.env.MONGODB_URI, () => {
//     console.log("connected to MongoDB Database.....")
// })

// user array as temporary database
const db = [{
  id: 1,
  title: 'Samosa',
  price: 15,
  category: 'breakfast'
},
{
  id: 2,
  title: 'Poha',
  price: 20,
  category: 'breakfast'
},
{
  id: 3,
  title: 'Mutton',
  price: 250,
  category: 'lunch'
},
{
  id: 4,
  title: 'Chicken tikka',
  price: 250,
  category: 'lunch'
}]

// get all items
app.get('/all-food-items', (req, res) => {
  res.json({
    success: true,
    data: db,
    message: 'All food items fetched successfully'
  })
})

// add new item
app.post('/add-food-item', (req, res) => {
  const { id, title, price, category } = req.body;

  const newItem = {
    id: id,
    title: title,
    price: price,
    category: category
  }

  // check if food item already exists with the same id
  db.forEach((item) => {
    if (item.id === id) {
      return res.json({
        success: false,
        data: null,
        message: 'Food item already exists'
      })
    }
  })

  db.push(newItem);

  res.json({
    success: true,
    data: newItem,
    message: 'New food item added successfully'
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