var Mongoose = require("mongoose");
var Channel = require("./channel.model");
var Item = require("./item.model");

// the QueuItem schema
var QueueItemSchema = new Mongoose.Schema({
    channel: Channel.Schema,
    item: Item.Schema,
    number: Number,
    last_played_at: Date,
    play_count: Number
});

// the QueueItem model
var QueueItem = Mongoose.model('QueueItem', QueueItemSchema);

// expose the underlying model through a public property
QueueItem.Schema = QueueItemSchema;

// export the model
module.exports = QueueItem;