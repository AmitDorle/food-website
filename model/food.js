import { model, Schema } from "mongoose";


const foodSchema = new Schema({
id : Number,
title : String,
category : String,
price : Number
})

const Food = model('Food',foodSchema)

export default Food