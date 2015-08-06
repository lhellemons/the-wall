var Mongoose = require("mongoose");

// the schema
var ChannelSchema = new Mongoose.Schema({
    title: String
});

// the model
var Channel = Mongoose.model('Channel', ChannelSchema );

// expose the underlying schema through a public property
Channel.Schema = ChannelSchema;

// export the model
module.exports = Channel;