const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Asegúrate de que User esté correctamente importado

// Ruta para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Buscar todos los documentos en la colección User

    // Verificar si se encontraron usuarios
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Si se encontraron usuarios, enviar la respuesta
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

// Ruta para registrar un nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const { nombre, numero, dni, contraseña, gmail, area } = req.body;

    // Validar que se proporcionen todos los campos requeridos
    if (!nombre || !numero || !dni || !contraseña || !gmail || !area) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Crear un nuevo usuario en la base de datos
    const newUser = new User({
      nombre,
      numero,
      dni,
      contraseña,
      gmail,
      area,
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    // Enviar una respuesta de éxito
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { gmail, contraseña } = req.body;

    // Buscar usuario por correo electrónico y contraseña
    const user = await User.findOne({ gmail, contraseña });

    if (!user) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    // Si se encontró el usuario, enviar una respuesta exitosa
    res.status(200).json({ message: 'Inicio de sesión exitosa' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

module.exports = router;
