const express = require("express");
const { randomUserService, randomUserById } = require("../services/randomUserService");
const randomUserRouter = express.Router();

//localhost:3000/jokes/ten
randomUserRouter.get("/", (req, res, next) => {
  randomUserService()
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
randomUserRouter.get("/:id", (req, res, next) => {
  randomUserServiceById(req.params.id)
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

module.exports = randomUserRouter;
