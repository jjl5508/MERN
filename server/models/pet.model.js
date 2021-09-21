const mongoose = require("mongoose");

// {PATH} will be replaced with the field name, such as "location".
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "Name must be {MINLENGTH} characters."],
    },
    type: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "Pet Type must be {MINLENGTH} characters."],
    },
    description: {
      type:String,
      required: [true, "{PATH} is required."],
      minlength: [3, "Description must be at least {MINLENGTH} characters."]
    },
    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
      type: String,
    },
  },
  {timestamps: true}
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Pet = mongoose.model("Pet", PetSchema);

// The mongoose model that lets you connect to it's DB collection.
module.exports = Pet;