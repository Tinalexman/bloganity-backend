const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./src/config/cors");
const app = express();

require("dotenv").config();

const routes = require("./src/routes/api.routes");

const port = process.env.PORT || 3030;


// app.use(cors(corsOptions));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb", extended: true }));


mongoose.connect(
  process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/bloganity-backend`
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database running Successfully");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
