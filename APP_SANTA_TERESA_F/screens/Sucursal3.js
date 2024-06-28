import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Sucursal3 = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    dni: '',
    direccion: '',
    montoAlquiler: '',
    fechaInicio: '',
    fechaFin: '',
    garantia: '',
    ruc: ''
  });

  const handleEdit = (local) => {
    setSelectedLocal(local);
    setModalVisible(true);
  };

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los datos
    console.log('Datos guardados:', formData);
    setModalVisible(false);
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 20 }, (_, index) => (
        <View key={index} style={styles.localContainer}>
          <Text style={styles.localText}>Local {index + 1}</Text>
          <TouchableOpacity onPress={() => handleEdit(index + 1)} style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Editar Local {selectedLocal}</Text>
          <ScrollView>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={formData.nombre}
              onChangeText={(text) => handleChange('nombre', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="DNI"
              value={formData.dni}
              onChangeText={(text) => handleChange('dni', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Dirección"
              value={formData.direccion}
              onChangeText={(text) => handleChange('direccion', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Monto de Alquiler"
              value={formData.montoAlquiler}
              onChangeText={(text) => handleChange('montoAlquiler', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha de Inicio"
              value={formData.fechaInicio}
              onChangeText={(text) => handleChange('fechaInicio', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha de Fin"
              value={formData.fechaFin}
              onChangeText={(text) => handleChange('fechaFin', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Garantía"
              value={formData.garantia}
              onChangeText={(text) => handleChange('garantia', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="RUC"
              value={formData.ruc}
              onChangeText={(text) => handleChange('ruc', text)}
            />
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  localContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  localText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#8E0E00',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#8E0E00',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#bbb',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Sucursal3;
