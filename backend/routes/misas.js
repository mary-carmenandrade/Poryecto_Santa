// misas.js
const express = require('express');
const router = express.Router();
const Misa = require('../models/Misa');

// Obtener todas las misas
router.get('/', async (req, res) => {
  try {
    const misas = await Misa.find();
    res.json(misas);
  } catch (error) {
    console.error('Error al obtener misas:', error);
    res.status(500).json({ message: 'Error al obtener misas' });
  }
});

// Crear una nueva misa
router.post('/', async (req, res) => {
  const { nombreCliente, descripcion, fecha, motivo, hora, costo } = req.body;

  try {
    const nuevaMisa = new Misa({ nombreCliente, descripcion, fecha, motivo, hora, costo });
    await nuevaMisa.save();
    res.status(200).json(nuevaMisa);
  } catch (error) {
    console.error('Error al crear misa:', error);
    res.status(500).json({ message: 'Error al crear misa' });
  }
});

module.exports = router;
