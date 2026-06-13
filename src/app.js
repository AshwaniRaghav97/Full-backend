// app.js main server ko create karte hai

const express = require('express');
const noteModel = require("./models/note.model")
const app = express();

// module path in express
app.use(express.json());
// const notes = [];

// app.post('/notes',(req,res)=>{
//     notes.push(req.body);
//     res.status(201).json({message:"Note created successfully!"});
// })
// app.get('/notes',(req,res)=>{
//     res.status(200).json({
//         message:"Notes fetched successfully!",
//         notes:notes

//     })
// })

// app.delete('/notes/:id',(req,res)=>{
//     const id = req.params.id;
//     delete notes[id];
//     res.status(200).json({message:"Note deleted successfully!"});
// });

// app.patch('/notes/:id',(req,res)=>{
//     const id = req.params.id;
//     const des = req.body.des;
//     notes[id].des = des;
//     res.status(200).json({message:"Note updated successfully!"});

// })

app.post("/notes", async (req,res)=>{
    const data  = req.body;
    await noteModel.create({
      tit:data.tit,
      des: data.des
    });
    res.status(201).json({message:"Note created successfully!"});
})


app.get('/notes', async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetched successfully!",
        notes: notes
    });
});


app.delete("/notes/:id", async (req,res)=>{
  const id = req.params.id;
  await noteModel.findByIdAndDelete({
    _id : id
  });
  res.status(200).json({message:"Note deleted successfully!"});
})

app.patch("/notes/:id",async (req,res)=>{
  const id = req.params.id;
  const des = req.body.des;
  await noteModel.findByIdAndUpdate({
    _id : id
  }, {des: des});
  res.status(200).json({message:"Note updated successfully!"});
})

module.exports = app;

