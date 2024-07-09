const dotenv = require("dotenv");
dotenv.config();

const serverConfig = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
};
module.exports = serverConfig;
