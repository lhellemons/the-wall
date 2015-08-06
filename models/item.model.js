var Mongoose = require("mongoose");

// the Item schema
var ItemSchema = new Mongoose.Schema({
    urlHash: String,
    title: String,
    content: String,
    parsed_at: Date
});

// the Item model
var Item = Mongoose.model('Item', ItemSchema);

// expose the underlying schema through a public property
Item.Schema = ItemSchema;

// export the model
module.exports = Item;