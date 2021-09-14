const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    },
    (err) => {
      console.error("Connection error", err.message);
    }
);

const db = mongoose.connection

module.exports = db



