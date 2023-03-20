const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  res.json({
    message: "Directors - GET",
  });
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
  .exec()
  .then(director => {
    console.log(director);
    res.status(201).json({
      director: director
    })
  })
  .catch(err => {
    res.status(500).json({
      error: {
        message: err.message
      }
    })
  })
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
  res.json({
    message: "Directors - DELETE",
    id: directorId,
  });
});

module.exports = router;
