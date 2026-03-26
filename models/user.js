const mongoose = require('mongoose');
const Schema = mongoose.Schema

const deatail = new Schema({
    name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  }
}, { timestamps: true });
module.exports=mongoose.model('user',deatail);