
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html');
  });
//gets notes information from the user
app.get('/api/notes', (req, res)  =>  {
    const notes = fs.readFileSync('./db/db.json', {encoding:'utf8', flag:'r'});
    res.json(JSON.parse(notes));
});

app.post('/api/notes', (req, res)  =>  {
    let notes = fs.readFileSync('./db/db.json', {encoding:'utf8', flag:'r'});
    notes = JSON.parse(notes);
    notes.push( {
        title: req.body.title,
        text:  req.body.text});
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
    
});


app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(3001, () => {
    console.log("express server listening on port 3001");
});