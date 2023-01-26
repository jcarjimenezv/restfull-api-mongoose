const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.set('debug', true);
    return mongoose.connect(
      `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      {
        serverSelectionTimeoutMS: 5000
      }
    );
  } catch (error) {
    throw new Error(
      `An error occurred trying to connect to mongoDB ${error.message}`
    );
  }
};

module.exports = connection;
