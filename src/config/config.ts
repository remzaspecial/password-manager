const dotenv = require('dotenv')
dotenv.config();

export default {
    DB_CONNECTION_STRING: String(process.env.DB_CONNECTION_STRING),
  };