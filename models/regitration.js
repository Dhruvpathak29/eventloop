const mongoose = require('mongoose');
const Schema = mongoose.Schema

const logg = new Schema({
    name: String,
  email: {
    type: String,
    unique: true, // ✅ email unique
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports=mongoose.model('regitration',logg);