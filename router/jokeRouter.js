const express = require("express");
const { jokeService, jokeServiceById } = require("../services/jokeService");
const jokeRouter = express.Router();

//localhost:3000/jokes/ten
jokeRouter.get("/", (req, res, next) => {
  jokeService()
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

//localhost:3000/jokes/23
jokeRouter.get("/:id", (req, res, next) => {
  jokeServiceById(req.params.id)
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = jokeRouter;
