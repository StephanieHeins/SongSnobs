const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const songSchema = new Schema({
  author: {
      type: String,
      required: true,
    },
  songText: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  // saved book id from GoogleBooks
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  comments: [
    {
      /*
      commentText: {
        type: String,
        required: true,
        minlength: 1,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      commentDate: {
        type: Date,
        default: Date.now,
        get: (timestamp => dateFormat(timeStamp)),
      },
      */
     // Utilizing comment schema already created in Comment.js model
     type: Schema.Types.ObjectId,
      ref: "Comment"
    },
  ],
});


// const Song = model('Song', songSchema)


module.exports = songSchema;
