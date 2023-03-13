const axios = require("axios");
require("dotenv").config();

const randomUserService = async () => {
  console.log("Real randomUser");
  return await axios.get(`${process.env.randomUserURL}`);
};

const randomUserServiceById = async (id) => {
  console.log("Real randomUser by id");
  return await axios.get(`${process.env.randomUserURL}${id}`);
};

module.exports = { randomUserService, randomUserServiceById };
