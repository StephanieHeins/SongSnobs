const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addSong(songText: String!): Song
        addComment(songId: ID!, commentText: String!): Song
        removeSong(songId: String): Song
        removeComment(songId: ID!, commentId: ID!): Song
    }

    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        songs: [Song]
    }

    type Song {
        _id: ID
        author: String!
        songText: String
        title: String!
        image: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String!
        commentAuthor: String!
        createdAt: String
    }

    type Auth {
        token: ID
        user: User
    }

`

module.exports = typeDefs;

// Commenting out the BookInput incase we need something similar for later.
    // input BookInput {
    //     bookId: String!
    //     authors: [String]
    //     description: String
    //     title: String!
    //     image: String
    //     link: String
    // }