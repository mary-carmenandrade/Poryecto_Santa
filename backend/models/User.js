
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  numero: { type: String, required: true },
  dni: { type: String, required: true },
  contraseña: { type: String, required: true },
  gmail: { type: String, required: true },
  area: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

