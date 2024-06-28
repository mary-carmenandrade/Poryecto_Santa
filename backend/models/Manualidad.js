const mongoose = require('mongoose');

const manualidadSchema = new mongoose.Schema({
  manualidad: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  fecha: { type: Date, required: true },
});

module.exports = mongoose.model('Manualidad', manualidadSchema);
