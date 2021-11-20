const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const commentSchema = new Schema({
    id: 
    {
        type: Number,
        autoIncrement: true,
    },
    commentText: {
        type: String,
        required: true,
        minlength: 1,
    },
    commentAuthor: {
        type: String,
        required: true,
    },
    createdAt: {
        type: date,
        required: true,
        default: Date.now.apply,
        get: (timestamp) => dateFormat(timestamp),
    }
    
});

const Comment = model('Comment', commentSchema)

module.exports = Comment;
