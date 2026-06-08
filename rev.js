const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World!");
}).listen(3000,()=>{
    console.log("Example app listening on port 3000!");
});

// get = server se data fetch karne ke liye
// post = server me data create karne ke liye
// delete = server se data delete karne ke liye
// patch = server me data update karne ke liye

// src ke andar app.js = server ko create karna
// server.js = server ko start karna
// frontend se data ata h bho req.body me ata h