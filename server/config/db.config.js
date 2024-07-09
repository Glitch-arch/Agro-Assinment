const mongoose = require("mongoose");
const { MONGODB_URL } = require("./server.config");

async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

module.exports = connectToDB;
