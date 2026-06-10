const mongoose = require('mongooose');

const nodeSchema = new mongoose.Schemea({
  tit: String,
  des: String
})
const noteModel = mongoose.model("note", noteSchema);


module.exports = noteModel;