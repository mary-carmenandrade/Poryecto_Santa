const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  fecha: { type: Date, required: true },
  fechaExpiracion: { type: Date, required: true },
});

module.exports = mongoose.model('Producto', productoSchema);
