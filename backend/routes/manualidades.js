const express = require('express');
const router = express.Router();
const Manualidad = require('../models/Manualidad');

// Ruta para obtener todas las manualidades
router.get('/', async (req, res) => {
  try {
    const manualidades = await Manualidad.find();
    res.json(manualidades);
  } catch (error) {
    console.error('Error al obtener manualidades:', error);
    res.status(500).json({ message: 'Error al obtener manualidades' });
  }
});

// Ruta para crear una nueva manualidad
router.post('/', async (req, res) => {
  const { manualidad, precio, cantidad, fecha } = req.body;

  try {
    const nuevaManualidad = new Manualidad({ manualidad, precio, cantidad, fecha });
    await nuevaManualidad.save();
    res.status(200).json(nuevaManualidad);
  } catch (error) {
    console.error('Error al crear manualidad:', error);
    res.status(500).json({ message: 'Error al crear manualidad' });
  }
});

module.exports = router;
