import mongoose from 'mongoose';


const groceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Grocery item name is required'],
  },
  category: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: 1,//do we want a minimum quantity of 1?
  },
  unitType: {
    type: String,
    required: false,
  },
  threshold: {
    type: Number,
    required: false,
  },
  expirationDate: {
    type: Date, 
    required: false, 
  },
});

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema);

export default GroceryItem;