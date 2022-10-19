
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Links to api here
require('./routes/routes')(app);


app.listen(3001, () => {
    console.log("express server listening on port 3001");
});