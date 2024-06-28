import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

// Importaciones específicas para web
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai';

// Importaciones específicas para móvil
import DateTimePicker from '@react-native-community/datetimepicker';

const FormularioManualidades = ({ navigation }) => {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [fecha, setFecha] = useState(new Date());
  const [showFecha, setShowFecha] = useState(false);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = {
        manualidad: producto, // Asegúrate de que el nombre del campo coincida
        precio: parseFloat(precio), // Convierte precio a número
        cantidad,
        fecha,
      };
      console.log('Enviando datos:', data);
      
      const response = await axios.post('http://localhost:5000/api/manualidades', data);
  
      if (response.status === 200) {
        alert('Manualidad registrada exitosamente');
        if (navigation) {
          navigation.goBack();
        }
      } else {
        alert('Error al registrar la manualidad');
      }
    } catch (error) {
      console.error('Error registrando la manualidad:', error);
      alert('Error registrando la manualidad');
    }
  };

  const onChangeFecha = (event, selectedDate) => {
    const currentDate = selectedDate || fecha;
    setShowFecha(Platform.OS === 'ios');
    setFecha(currentDate);
  };


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Registro de Manualidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del producto"
          value={producto}
          onChangeText={setProducto}
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />

        {Platform.OS === 'web' ? (
          <>
            <View style={styles.dateContainer}>
              <Text style={styles.dateLabel}>Fecha:</Text>
              <DatePicker
                selected={fecha}
                onChange={(date) => setFecha(date)}
                dateFormat="dd/MM/yyyy"
                customInput={
                  <TouchableOpacity style={styles.datePickerInput} onClick={() => setShowFecha(true)}>
                    <Text style={styles.dateText}>{fecha.toLocaleDateString()}</Text>
                    <AiOutlineCalendar size={20} color="#333" />
                  </TouchableOpacity>
                }
              />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={() => setShowFecha(true)} style={styles.dateInput}>
              <Text style={styles.dateText}>Fecha: {fecha.toDateString()}</Text>
            </TouchableOpacity>
            {showFecha && (
              <DateTimePicker
                testID="dateTimePicker"
                value={fecha}
                mode="date"
                display="default"
                onChange={onChangeFecha}
              />
            )}
            {showFechaExpiracion && (
              <DateTimePicker
                testID="dateTimePicker"
                value={fechaExpiracion}
                mode="date"
                display="default"
                onChange={onChangeFechaExpiracion}
              />
            )}
          </>
        )}

        <View style={styles.cantidadContainer}>
          <Text style={styles.cantidadLabel}>Cantidad:</Text>
          <TouchableOpacity onPress={disminuirCantidad} style={styles.cantidadButton}>
            <Text style={styles.cantidadButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.cantidadInput}
            value={String(cantidad)}
            onChangeText={(text) => setCantidad(Number(text))}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={aumentarCantidad} style={styles.cantidadButton}>
            <Text style={styles.cantidadButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  dateInput: {
    height: 40,
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  datePickerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    height: 40,
  },
  dateText: {
    fontSize: 16,
    marginRight: 5,
  },
  cantidadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cantidadLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  cantidadButton: {
    padding: 10,
    backgroundColor: '#8E0E00',
    borderRadius: 5,
  },
  cantidadButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cantidadInput: {
    height: 40,
    width: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#8E0E00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default FormularioManualidades;
