import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Swiper from 'react-native-swiper';

const SliderScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { title: 'Welcome to ShikshaSetu', content: 'Your learning companion' },
    { title: 'Learn Anytime, Anywhere', content: 'Access courses on the go' },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        activeDotColor="#6200ee"
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.content}>{slide.content}</Text>
          </View>
        ))}
      </Swiper>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        {activeIndex === slides.length - 1 ? 'Get Started' : 'Skip'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

export default SliderScreen;