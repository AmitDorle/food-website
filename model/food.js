const mongoose = require('mongoose');

const {schema} = mongoose;

const foodSchema = new mongoose.Schema({
id : Number,
title : String,
category : String,
price : Number
})

const Food = mongoose.model('Food',foodSchema)

 module.exports = Food;