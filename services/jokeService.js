const axios = require("axios");
require("dotenv").config();

const jokeService = async () => {
  console.log("Real Jokes");
  return await axios.get(`${process.env.jokeURL}`);
};

const jokeServiceById = async (id) => {
  console.log("Real Jokes by id");
  return await axios.get(`${process.env.jokeURL}${id}`);
};

module.exports = { jokeService, jokeServiceById };
