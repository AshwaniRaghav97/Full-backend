// app.js main server ko create karte hai

const express = require('express');
const app = express();
app.use(express.json());
const notes = [];

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({message:"Note created successfully!"});
})
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"Notes fetched successfully!",
        notes:notes

    })
})

app.delete('/notes/:id',(req,res)=>{
    const id = req.params.id;
    delete notes[id];
    res.status(200).json({message:"Note deleted successfully!"});
});

app.patch('/notes/:id',(req,res)=>{
    const id = req.params.id;
    const des = req.body.des;
    notes[id].des = des;
    res.status(200).json({message:"Note updated successfully!"});

})

module.exports = app;

