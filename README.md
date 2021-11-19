# SongSnobs
Project #3 UW Full-Stack Coding Bootcamp

## Description
For the second group project of the course, we were required to use everything we've learned over the past 3 months to create a real-world full-stack application that we'd be able to showcase to potential employers. Our group decided to create Where to Watch, an application that allows users to input any movie and access links where the movie can be streamed online. Additionally, if users create a Where to Watch account, they can add and remove movies to their very own "Watchlist". 

### Installation Instructions 
Download the repository from Github. Install the dependencies (using npm -i or node install). Then, follow the steps below to configure your db connection:

1. Copy the contents of .env.EXAMPLE into a new file .env
2. Fill in the user name and password for your db

Next, follow these steps to set up your database:
1. Navigate to the DB in your terminal ("cd db")
2. Type "mysql source schema.sql" into your terminal
3. Type "quit" into your terminal

Then, follow these steps to seed the database (optional):
1. Enter "npm run seed" in your terminal

Finally, to start the server enter "npm start" into your terminal.

You're all set!

## User Story
```md
AS a user who likes to watch movies using subscription services
I WANT a website 
SO THAT I can track movies on my watch list and where they are streaming
```
## Acceptance Criteria
```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes suggestions for popular movies; navigation links for the homepage and my movie list; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the movie list, and the option to log out
WHEN I click on the homepage option in the navigation AND I am signed in
THEN I am taken to the homepage and presented with my movie list that include where specific movies of my choice are being streamed 
WHEN I click on an movie
THEN I am presented with the movie title, streaming options, average viewer ratings
WHEN I click on the movie list option in the navigation
THEN I am taken to the movie list page and presented with my list of movies, ability to remove a move from the list, and the ability to add a movie to the list
WHEN I click on the button to add a new movie
THEN I am prompted to enter the title of the movie
WHEN I enter the title of the movie, 
THEN the movie will be added to my list if it exists in the API database
WHEN The movie does not exist in the database and I want to add it, 
THEN we do a search on the internet for the movie and add it to the database
WHEN I attempt to add a movie that doesn't exist, 
THEN an error message appears to inform me the movie doesn't exist
WHEN I click the button to delete a movie
THEN the movie is removed from my list. 
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view the page but I am prompted to log in again before I can add, update, or delete from my movie watchlist
```md

## Built With:
JavaScript
jQuery
Node.js
MySQL2
MySQL Workbench
Sequelize
Express.js
express-session
Passport
Passport-Local
bcryps.js
dotenv
Handlebars
file-system
Bulma UI

## Deployed Links:
* [See Live Site](https://wheretomovie.herokuapp.com/)
* [Link to GitHub Repo](https://github.com/egraham96/Where-to-Watch)

## Preview of Working Site:
![Screenshot of Deployed Application](Screenshot.PNG)


## How to Contribute:
If you'd like to contribute to this project please send an email to eeg4@uw.edu.

## How to Test the Application:
Please see installation instructions above. 

## License:

![](https://img.shields.io/badge/License:%20MIT-pink`)

Copyright <2021><Emma Graham, Steven Chung, Stephanie Heins, Troy Atkinson>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.