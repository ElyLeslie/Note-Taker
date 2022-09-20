// const apirouter = require('express').Router();
// const path = require('path')
// const db = require('../db/db.json')
// const fs = require('fs')

// apirouter.get('/api/notes', (req, res) =>
//   res.json(db)
//   );

// apirouter.post('/api/notes', (req, res) => {
// res.body.id = db.length;
// const newNote = req.body;
// db.push(newNote);
// fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db, null));
// res.json(newNote)
// }
// )

// module.exports = apirouter