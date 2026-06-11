const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  tit: String,
  des: String
});

const noteModel = mongoose.model("note", nodeSchema);

module.exports = noteModel;