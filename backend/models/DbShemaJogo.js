const mongoose = require("mongoose");
const slug = require("slug");

const { Schema } = mongoose;

const DbShemaJogo = new Schema({
  hash: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      
      return (
         slug(Math.random()+this.hash+Math.random())
        )
    },
  },
  valorMoeda: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("apelidoModeloDbShemaJogo", DbShemaJogo);
