var Mongoose = require("mongoose");

// the Item schema
var ItemSchema = new Mongoose.Schema({
    urlHash: String,
    title: String,
    content: String,
    parsed_at: Date
});u

// the Item model
var Item = Mongoose.model('Item', ItemSchema);

// export the model
module.exports = Item;