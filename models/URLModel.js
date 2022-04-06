const { default: mongoose } = require("mongoose");

const MyURLSchema = new mongoose.Schema({
    urlCode: String,
    actualUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('Url', MyURLSchema)

