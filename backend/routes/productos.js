const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto'); // Asegúrate de que la ruta sea correcta según tu estructura de archivos

// Ruta para registrar un nuevo producto
router.post('/', async (req, res) => {
  try {
    const { producto, precio, cantidad, fecha, fechaExpiracion } = req.body;

    const nuevoProducto = new Producto({
      producto,
      precio,
      cantidad,
      fecha,
      fechaExpiracion,
    });

    await nuevoProducto.save();

    res.status(200).json({ message: 'Producto registrado exitosamente' });
  } catch (error) {
    console.error('Error registrando el producto:', error);
    res.status(500).json({ message: 'Error registrando el producto', error: error.message });
  }
});

// Nueva ruta para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
});

module.exports = router;
