const express = require('express');
const app = express();

const path = require('path')
const db = require('./db/db.json')
const fs = require('fs')


const PORT = process.env.PORT || 3001;

//Process.env.port is the port that the host is using.
//Server is always listening for a request through the PORT.

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


//Creating new routes for API

app.get('/api/notes', (req, res) =>
  res.json(db)
  );

app.post('/api/notes', (req, res) => {
req.body.id = db.length;
const newNote = req.body;
db.push(newNote);
fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(db, null, 2));
res.json(newNote)
}
)

//The correct order in order to delete everything accordingly. 

app.delete('/api/notes/:id', (req,res) => {
  const deletePost = req.params.id; 
  notes.splice(deletePost, 1); 
  //Update ids when deleted 
  for( i=0; i < notes.length; i++){
      notes[i].id=i;
  }
  // rewrite to file
  fs.writeFileSync(
      path.join(__dirname, '/db/db.json'),
      JSON.stringify(notes,null, 2)
  );
  res.json(req.body); 
  });


//Creating new routes for HTML 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
