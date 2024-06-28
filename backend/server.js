const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); // Importa el middleware CORS
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');
const productoRoutes = require('./routes/productos'); // Importa la ruta de productos
const manualidadRoutes = require('./routes/manualidades'); // Importa la ruta de manualidades

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/mean_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado a MongoDB');
})
.catch((error) => {
  console.error('Error de conexión a MongoDB:', error);
});

// Middleware
app.use(express.json());
app.use(cors()); // Habilita CORS para todas las rutas

// Rutas
app.use('/api', authRoutes);
app.use('/api/productos', productoRoutes); // Usa la ruta de productos
app.use('/api/manualidades', manualidadRoutes); // Usa la ruta de manualidades

// Ruta para obtener todos los usuarios
const User = require('./models/User'); // Asegúrate de que la ruta sea correcta según tu estructura de archivos

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
