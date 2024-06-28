import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-web-swiper';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const carouselItems = [
  { id: '1', url: 'https://i.pinimg.com/564x/6d/4c/91/6d4c9175c93acdba9e96b982d702a920.jpg' },
  { id: '2', url: 'https://i.pinimg.com/564x/45/03/15/45031528ced39a1a455a9552c98e292b.jpg' },
  { id: '3', url: 'https://i.pinimg.com/564x/0d/9a/b1/0d9ab114e7f5c8e00b8c202e0c4f16ba.jpg' },
  { id: '4', url: 'https://i.pinimg.com/564x/bb/c8/e1/bbc8e192edefefdf85586eb2c3160b99.jpg' },
  { id: '6', url: 'https://i.pinimg.com/564x/79/17/dc/7917dcde8648e2616416635e6f3a6526.jpg' },
  { id: '7', url: 'https://i.pinimg.com/564x/2f/f8/44/2ff8447da5fe3ef0f58882b9a66f0218.jpg' },
  { id: '8', url: 'https://i.pinimg.com/564x/9c/cd/05/9ccd053579d15af433ea9d42cbaa9fdd.jpg' },
  { id: '9', url: 'https://i.pinimg.com/564x/6a/0b/2c/6a0b2c37d5f8e62eecd294078be6c3a4.jpg' },
  { id: '10', url: 'https://i.pinimg.com/564x/4e/cd/b8/4ecdb8ea6e7d33783ad8b46c00f64890.jpg' },
  { id: '11', url: 'https://i.pinimg.com/564x/6d/27/28/6d2728b18ca06a09a96a5eabf8286134.jpg' },
  { id: '12', url: 'https://i.pinimg.com/564x/b1/f9/1d/b1f91ded4fdea4ab09464c18489070eb.jpg' },
];

const randomPhrases = [
  "La vida es corta, come postre primero.",
  "La repostería es un arte que se come.",
  "Un día sin pastel es un día perdido.",
  "El azúcar es mi combustible.",
  "La felicidad es hornear algo dulce."
];

const MisasScreen = ({ navigation }) => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const changePhrase = () => {
      const randomIndex = Math.floor(Math.random() * randomPhrases.length);
      setPhrase(randomPhrases[randomIndex]);
    };
    changePhrase();
    const interval = setInterval(changePhrase, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Swiper loop timeout={2.5} controlsEnabled={false}>
          {carouselItems.map(item => (
            <View key={item.id} style={styles.carouselItem}>
              <Image style={styles.carouselImage} source={{ uri: item.url }} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FormularioMisas')}
        >
          <Text style={styles.buttonText}>Registrar Misas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListaMisas')}
        >
          <Text style={styles.buttonText}>Ver Misas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseText}>{phrase}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8E0E00',
    padding: 20,
  },
  carouselContainer: {
    width: '100%',
    height: '70%',
    marginBottom: 20,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
    height: '9%',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 8,
    transitionDuration: '0.25s',
  },
  buttonText: { 
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  phraseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  phraseText: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default MisasScreen;
