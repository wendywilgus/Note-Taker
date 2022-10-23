# ExpressJS Note Taker
Module 11 Assignment
## Overview

This application allows the user to create a list of notes using an Express.js back end.  Additionally, users can save and retrieve note data from a JSON file, as well as delete notes.  The front end was created with HTML and CSS, with the back end using ExpressJS.  

Solving the problems of this project taught me how to use Express, connect back end and front end, and deploy using Heroku. 


## Table of Contents

- [Story](#user-story)
- [Mockup](#mockup) 
- [Installation](#installation)
- [License](#license)
- [Resources](#resources)
## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](Assets/11-express-homework-demo-02.png)

## Installation
No installation is needed for this application.  Please find the deployed site here.
- [Heroku Deployed Site](https://notesapp1234567.herokuapp.com/notes)

## License
This project was completed as part of Georgia Tech's Full Stack Development Boot Camp course. 
---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

## Resources
The following resources were helpful in researching best practices and problem-solving on the project.
* [ExpressJs](https://expressjs.com/en/guide/routing.html)
* [Routing](https://expressjs.com/en/guide/routing.html)
* [readFileSync Method](https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/)
* [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
