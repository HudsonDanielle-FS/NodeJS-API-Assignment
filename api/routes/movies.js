const express = require("express");
const mongoose = require("mongoose");
const { request } = require("../../app/app");
const Book = require("../models/movie");
const router = express.Router();

router.get("/get", (req, res, next) => {
  res.json({
    message: "Movies - GET",
  });
});

router.post("/get", (req, res, next) => {
  const newMovie = new Movie({
    _id: mongoose.Type.ObjectId(),
    title: req.body.title,
    author: req.body.director,
  });

  //write to the database
  newMovie
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Movie saved",
        book: {
          title: result.title,
          author: result.director,
          id: result._id,
          metadata: {
            method: req.method,
            host: req.hostname,
          },
        },
      });
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

router.get("/:movieId", (req, res, next) => {
  const movieId = request.params.movieId;
  res.json({
    message: "Movies - GET",
    id: movieId,
  });
});

router.patch("/:movieId", (req, res, next) => {
  const movieId = request.params.movieId;

  const updatedMovie = {
    title: request.body.title,
    author: request.body.director,
  };

  Movie.updateOne(
    {
      _id: movieId,
    },
    {
      $set: updatedMovie,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: "Updated Movie",
        movie: {
          title: result.title,
          director: result.author,
          id: result._id,
        },
        metadata: {
          host: req.hostname,
          method: req.method
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error:{
          message: err.message
        }
      })
    });
});

router.delete("/:movieId", (req, res, next) => {
  const movieId = request.params.bookId;
  res.json({
    message: "Movies - DELETE",
    id: movieId,
  });
});

module.exports = router;