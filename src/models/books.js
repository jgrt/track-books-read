const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookschema = new Schema(
    {
        name: { type: String, unique: true, required: true },
        author: { type: String, required: true },
        updated: { type: Date, default: Date.now() }
    }
)

module.exports = mongoose.model('books', bookschema);