import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker'; // Importar Picker desde '@react-native-picker/picker'
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [dni, setDni] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [gmail, setGmail] = useState('');
  const [selectedArea, setSelectedArea] = useState('ventas');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        nombre,
        numero,
        dni,
        contraseña,
        gmail,
        area: selectedArea,
      });

      if (response.status === 201) {
        alert('Usuario registrado exitosamente');
        navigation.navigate('Login'); // Redirige al usuario a la pantalla de inicio de sesión
      } else {
        alert('Error al registrar usuario');
      }
    } catch (error) {
      alert('Error al registrar usuario');
      console.error('Error:', error);
    }
  };

  return (
    <LinearGradient colors={['#8E0E00', '#1F1C18']} style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={{ uri: 'https://png.pngtree.com/png-vector/20240426/ourlarge/pngtree-christian-nuns-praying-in-the-light-of-moon-png-image_12302825.png' }} style={styles.logo} />
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputContainer}>
          <Icon name="person" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#ccc" value={nombre} onChangeText={setNombre} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="phone" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Número" keyboardType="phone-pad" placeholderTextColor="#ccc" value={numero} onChangeText={setNumero} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="credit-card" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="DNI" placeholderTextColor="#ccc" value={dni} onChangeText={setDni} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} placeholderTextColor="#ccc" value={contraseña} onChangeText={setContraseña} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Gmail" keyboardType="email-address" placeholderTextColor="#ccc" value={gmail} onChangeText={setGmail} />
        </View>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={selectedArea}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) => setSelectedArea(itemValue)}>
            <Picker.Item label="Ventas" value="ventas" />
            <Picker.Item label="Museo" value="museo" />
            <Picker.Item label="Monasterio" value="monasterio" />
            <Picker.Item label="Alquileres" value="alquileres" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(31, 28, 24, 0.95)', // Fondo translúcido negro
    padding: 25,
    borderRadius: 15, // Bordes más redondeados
    borderColor: '#8E0E00', // Borde color vino
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3, // Mayor opacidad para la sombra
    shadowRadius: 8, // Radio mayor para la sombra
    elevation: 10,
  },
  logo: {
    width: 120, // Tamaño mayor del logo
    height: 120,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 60,
  },
  title: {
    fontSize: 26, // Texto más grande
    marginBottom: 30, // Mayor espacio inferior
    textAlign: 'center',
    color: '#fff', // Texto blanco
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#555', // Color de borde más oscuro para inputs
    borderWidth: 1,
    borderRadius: 10, // Bordes más redondeados
    marginBottom: 20,
    backgroundColor: '#2a2a2a', // Fondo oscuro para los inputs
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
},
button: {
  backgroundColor: '#8E0E00', // Botón color vino
  padding: 15,
  borderRadius: 10, // Bordes más redondeados
  alignItems: 'center',
  marginBottom: 20,
},
buttonText: {
  color: '#fff', // Texto del botón en blanco
  fontSize: 18,
  fontWeight: 'bold',
},
footer: {
  flexDirection: 'row',
  justifyContent: 'center',
},
footerText: {
  color: '#ccc', // Texto del pie de página en gris claro
  marginRight: 5,
},
footerLink: {
  color: '#8E0E00', // Enlace en color vino
  fontWeight: 'bold',
},
});

export default RegisterScreen;