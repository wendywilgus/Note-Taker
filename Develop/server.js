
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const savedNotes = require('./db/db.json');



app.get('/api/notes', (req, res) => {
    res.json(savedNotes.slice(1));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'));
});

app.get('/notes', (req, res) =>  {
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'));
});

 //connects to index.html for all other routes
 app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + 'Develop/public/index.html'));
});

//function to save user notes to json file
function saveToDatabase(body, notesArray)   {
    const newNote = body;

    if (!Array.isArray(notesArray))
        notesArray = [];
    
    if (notesArray.length === 0)
        notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;
    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname, './db/db.json', {encoding:'utf8', flag:'r'}),
    JSON.stringify(notesArray, null, 2)
    );

    return newNote;
}


    fs.writeFile('Develop/db/db.json', JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
    });



// Posts new notes to database
app.post('/api/notes', (req, res)  =>  {
    fs.readFileSync('./db/db.json', {encoding:'utf8', flag:'r'});
    let newNote = req.body;
    notes.push( {
        title: req.body.title,
        text:  req.body.text});
    saveToDatabase();
    return newNote;
    
});

//join notes.html to api 
app.get('/api/notes', (req, res) => {
    res.json(notes); //read the json file and return all notes 
});







    

    //gets notes information based on specific id
    app.get('/api/notes/:id', (req, res)  =>  {
        res.json(notes[req.params.id]);
    });

    //deletes notes based on specific id
    app.delete('./api/notes/:id', (req, res)    =>  {
        notes.splic(req.params.id, 1);
        saveToDatabase();
    });

    //show notes on notes.html
    app.get('/notes', (req, res)    =>  {
        res.sendFile(path.join(__dirname + 'Develop/public/notes.html'));
    });
}

app.listen(PORT, () => {
console.log("express server listening on port ${PORT} 🚀");
});
