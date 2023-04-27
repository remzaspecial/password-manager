// eslint-disable-next-line
const dotenv = require('dotenv');
dotenv.config();

export default {
  DB_CONNECTION_STRING: String(process.env.DB_CONNECTION_STRING),
  SECRET_TOKEN: String(process.env.SECRET_TOKEN),
  PORT: Number(process.env.PORT),
};
