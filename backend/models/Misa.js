// Misa.js
const mongoose = require('mongoose');

const misaSchema = new mongoose.Schema({
  nombreCliente: { type: String, required: true },
  descripcion: { type: String },
  fecha: { type: Date, required: true },
  motivo: { type: String },
  hora: { type: String, required: true },
  costo: { type: Number, required: true },
});

module.exports = mongoose.model('Misa', misaSchema);
