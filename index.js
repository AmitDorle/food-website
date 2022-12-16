import express from "express";

const app = express();
app.use(express.json());

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
  title: 'Mutton-rogan-josh',
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