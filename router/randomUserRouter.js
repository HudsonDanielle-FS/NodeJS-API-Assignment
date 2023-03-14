const express = require("express");
const {
  randomUserService,
  randomUserServiceById,
} = require("../services/randomUserService");
const randomUserRouter = express.Router();

//localhost:3000/randomUser
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

//localhost:3000/randomUser/?gender=male
randomUserRouter.get("/?gender=male", (req, res, next) => {
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
