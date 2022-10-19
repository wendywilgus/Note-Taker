
const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs.readFile('Develop/db/db.json', 'utf8', (err, data)   =>  {
        if (err) throw err;

        let notes = JSON.parse(notes);
    

        //join notes.html to api 
        app.get('/api/notes', (req, res) => {
        res.json(notes); //read the json file and return all notes 
        });

        // Posts new notes to database
        app.post('/api/notes', (req, res)  =>  {
            fs.readFileSync('./db/db.json', {encoding:'utf8', flag:'r'});
            let newNote = req.body;
            notes.push( {
                title: req.body.title,
                text:  req.body.text});
            saveToDatabase();
            return;
            
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


        //connects to index.html for all other routes
        app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + 'Develop/public/index.html'));
        });

        //function to save user notes to json file
        function saveToDatabase()   {
            fs.writeFile('Develop/db/db.json', JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            });
        }
    });

}