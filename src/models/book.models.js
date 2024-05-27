const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true, ref: "genre" },
    author: { type: String },
    description: { type: String },
    file: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("book", bookSchema);
module.exports = book;
