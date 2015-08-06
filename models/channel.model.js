var Mongoose = require("mongoose");

// the schema
var ChannelSchema = new Mongoose.Schema({
    title: String
});

// the model
var Channel = Mongoose.model('Channel', ChannelSchema );

// export the model
module.exports = Channel;