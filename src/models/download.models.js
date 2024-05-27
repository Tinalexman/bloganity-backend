const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const downloadSchema = new Schema(
  {
    bookId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const download = mongoose.model("download", downloadSchema);
module.exports = download;
