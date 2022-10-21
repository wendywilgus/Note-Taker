
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) =>  {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});


app.get('/api/notes', (req, res) => {
    fs.readFile('/Users/wendywilgus/git/wendywilgus/Note Taker/Develop/db/db.json', 'utf8', (err, data) =>  {
        const noteText = JSON.parse(data);
        res.json(noteText);
});
 
// Posts new notes to database
app.post('/api/notes', (req, res)  =>  {
    // const {title, text} = req.body;
    console.log(req.body);

    // if (title && text)  {
    //     const newNote = {
    //         title,
    //         text,
    //         // id,
    //     };

        fs.readFile('db/db.json', 'utf8', (err, data) =>  {
            const noteText = JSON.parse(data);

            noteText.push(req.body);

            fs.writeFile('db/db.json', JSON.stringify(noteText, null, 4), (err) => {
                console.log(err);
            });
        });


    // const response = {
    //     status: 'sucess',
    //     body: newNote,
    //     };
});



 //gets note by id
app.get('/api/notes/:id', (req, res) => {
    fs.readFile('/Users/wendywilgus/git/wendywilgus/Note Taker/Develop/db/db.json', 'utf8', (err, data) => {
        const noteText = JSON.parse(data);
        res.json(noteText[req.param.id]);
    }

)
});

//deletes notes based on specific id
app.delete("/api/notes/:id", function(req, res) {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      const noteText = JSON.parse(data);
      noteText.splice(req.params.id, 1); 
      fs.writeFile(`./db/db.json`, JSON.stringify(noteText, null, 4), (err) => err
                ? console.error(err)
                : console.log(
                    `Deleted note.`)
              );
      });
      res.redirect('back'); 
})
});
  
app.listen(PORT, () =>
    console.log(`express server listening on port ${PORT} 🚀`)
);