import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AlquileresScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.row}>
        <View style={styles.optionContainer}>
          <Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/f7/bc/24/santa-catalina-a-royal.jpg' }} style={styles.optionImage} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sucursal_1')} style={styles.option}>
              <AntDesign name="shoppingcart" size={32} color="#8E0E00" />
              <Text style={styles.optionText}>Santa Catalina</Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('GraficoVentas')} style={styles.button}>
                <Text style={styles.buttonText}>Ingresos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('sucursal1egresos')} style={styles.button}>
                <Text style={styles.buttonText}>Egresos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.optionContainer}>
          <Image source={{ uri: 'https://i.ytimg.com/vi/NVM5fH4Ov9Y/maxresdefault.jpg' }} style={styles.optionImage} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SUCURSAL_2')} style={styles.option}>
              <AntDesign name="home" size={32} color="#8E0E00" />
              <Text style={styles.optionText}>Goyoneche</Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('GraficoVentas')} style={styles.button}>
                <Text style={styles.buttonText}>Ingresos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('sucursal2Egresos')} style={styles.button}>
                <Text style={styles.buttonText}>Egresos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.optionContainer}>
          <Image source={{ uri: 'https://elcomercio.pe/resizer/z4shfFZFtbB0_gnSieEAgOiATwo=/1200x675/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/F5Q6HEHQABGTDETMKUSVVD2HII.jpg' }} style={styles.optionImage} />
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Sucursal3')} style={styles.option}>
              <AntDesign name="book" size={32} color="#8E0E00" />
              <Text style={styles.optionText}>Simon Bolivar</Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('GraficoVentas')} style={styles.button}>
                <Text style={styles.buttonText}>Ingresos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('sucursal3egresos')} style={styles.button}>
                <Text style={styles.buttonText}>Egresos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row', // Alinea los contenedores en una fila
    justifyContent: 'space-between',
    width: '100%',
  },
  optionContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  optionImage: {
    width: 430, // Tamaño más grande para las imágenes
    height: 430,
    marginBottom: 10,
    borderRadius: 10, // Añadido para redondear las esquinas de las imágenes
  },
  textContainer: {
    alignItems: 'center',
  },
  option: {
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#8E0E00',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#8E0E00',
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AlquileresScreen;
