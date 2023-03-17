const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
    res.json({
        message: "Movies - GET"
    })
})

router.post("/", (req, res, next) => {
    res.json({
        message: "Movies - POST"
    })
})

router.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    res.json({
        message: "Movies - GET",
        id: movieId
    })
})

router.patch("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    res.json({
        message: "Movies - PATCH",
        id: movieId
    })
})

router.delete("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    res.json({
        message: "Movies - DELETE",
        id: movieId
    })
})

module.exports = router