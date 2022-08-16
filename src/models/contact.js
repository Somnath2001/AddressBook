const mongoose = require("mongoose");
const { isEmail } = require("validator");
// const { ObjectId } = mongoose.Schema;

const addressSchema = new mongoose.Schema({
  authorizedContactCreaterId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "invalid email"],
  },
  phone: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Contact = new mongoose.model("Contact", addressSchema);

module.exports = Contact;
