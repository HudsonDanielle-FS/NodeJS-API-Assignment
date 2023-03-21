const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Director.find({})
  .exec()
  .then(result => {
    console.log(result)
    res.status(200).json({
      message: "All directors returned"
    })
  })
  .catch(err => {
    console.error(error)
    res.status(500).json({
      error: {
        message: err.message
      }
    })
  })
});

router.post("/", (req, res, next) => {
  res.json({
    message: "Directors - POST",
  });
});

router.get("/:directorId", (req, res, next) => {
  const directorId = req.params.directorId;
  Author.findById(directorId)
    .select("name _Id")
    .populate("movie", "title director")
    .exec()
    .then((director) => {
      if(!director){
        console.log(director)
        return res.status(404).json({
          message: "Director not found"
        })
      }
      res.status(201).json({
        director: director,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

router.patch("/:directorId", (req, res, next) => {
  const directorId = req.params.directorId;
  res.json({
    message: "Directors - PATCH",
    id: directorId,
  });
});

router.delete("/:directorId", (req, res, next) => {
  const directorId = req.params.directorId;

  Director.deleteOne({
    _id: directorId,
  })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Director Deleted",
        request: {
          method: "GET",
          url: "http://localhost:3000/directors/" + directorId,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = router;
