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
    
});

module.exports = app;

