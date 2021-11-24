const db = require('./connection');
const { User, Comment, Song } = require('../models');


db.once('open', async () => {
        await User.deleteMany({});
        await Song.deleteMany({});
        await Comment.deleteMany({});


    const users = await User.create([
        {
            username: "luckyduck",
            email: "luckyduck@duck.com",
            password: "luckyduck"
        },
        {
            username: "donaldduck",
            email: "donnyduck@duck.com",
            password: "donduck"
        },
        {
            username: "daffyduck",
            email: "daffyduck@duck.com",
            password: "luckyduck"
        },
        {
            username: "doofusduck",
            email: "doofusduck@duck.com",
            password: "doofyduck"
        },
        {
            username: "duckyduck",
            email: "duckyduck@duck.com",
            password: "duckyduck"
        },
    ]);

    console.log('Users seeder');

    const songs = await Song.insertMany([
        {
            author: "luckyduck",
            songText: "Never gonna give you up, never gonna let you down",
            title: "Rick Roll",
            comments: [
                {
                    commentText: "Wow great song",
                    commentAuthor: "doofusduck",

                },
                {
                    commentText: "I think you stole these lyrics",
                    commentAuthor: "duckyduck",
                }
            ]
        },
        {
            author: "duckyduck",
            songText: "Just a smalltown girl... living in a lonely world",
            title: "Journey",
            comments: [
                {
                    commentText: "Wow great song",
                    commentAuthor: "doofusduck",

                },
                {
                    commentText: "I think you stole these lyrics",
                    commentAuthor: "luckyduck",
                }
            ]
        },
        {
            author: "donaldduck",
            songText: "Baby shark dooo doooo dooo dooo doo",
            title: "Baby Shark",
            comments: [
                {
                    commentText: "Wow that song gets old fast",
                    commentAuthor: "daffyduck",

                },
                {
                    commentText: "I think you stole these lyrics",
                    commentAuthor: "luckyduck",
                }
            ]
        },
        {
            author: "daffyduck",
            songText: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            title: "ABCs",
            comments: [
                {
                    commentText: "Glad you know the alphabet",
                    commentAuthor: "donaldduck",

                },
                {
                    commentText: "....",
                    commentAuthor: "duckyduck",
                }
            ]
        },
        {
            author: "doofusduck",
            songText: "ZYXWVUTSRQPONMLKJIHGFEDCBA",
            title: "Backwards ABCs",
            comments: [
                {
                    commentText: "That'll help when you get pulled over",
                    commentAuthor: "donaldduck",

                },
                {
                    commentText: "HAHAHA",
                    commentAuthor: "duckyduck",
                }
            ]
        }
    ]);
