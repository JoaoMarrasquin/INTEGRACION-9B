const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CorredorSchema = new Schema({
  Nombre: String,
  Peso: String,
  Altura: String,
  Edad: String
});

const CorredorModel = mongoose.model('Corredor', CorredorSchema);

module.exports = CorredorModel;