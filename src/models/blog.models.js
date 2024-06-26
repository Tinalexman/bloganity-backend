const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true, ref: "user" },
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
