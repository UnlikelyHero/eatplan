const mongoose = require('mongoose');
const { mongo } = require('../config');

const db = async (callback) => {
  try {
    await mongoose.connect(mongo.url, mongo.options);
    console.log('... successfully accessed mongodb');
    const response = await callback();
    await mongoose.connection.close();
    return response;
  } catch (error) {
    console.error('... unable to access mongodb:', error);
    return null;
  }
};

module.exports = db;
