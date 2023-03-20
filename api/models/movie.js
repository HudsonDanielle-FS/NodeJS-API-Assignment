const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    }
})

module.export = mongoose.model("Movie", movieSchema)