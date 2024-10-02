import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const SliderPage = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: 'Explore your\nnew skills today',
      content: 'You can learn various kinds of\ncourses in your hand',
      image: require('../../assets/images/slider1.png'),
    },
    {
      title: 'Empower your\neducation to next level',
      content: 'Learn new things and develop your\nproblem-solving skills',
      image: require('../../assets/images/slider2.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Swiper
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        activeDotColor="#6200ee"
        dotColor="#E0E0E0"
        paginationStyle={styles.pagination}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.image} resizeMode="contain" />
            <LinearGradient
              colors={index === 0 ? ['#FFFFFF', '#FFFFFF'] : ['#FFFFFF', '#7870ff']}
              style={styles.contentContainer}
            >
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.content}>{slide.content}</Text>
              <View style={styles.buttonContainer}>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('Login')}
                  style={styles.button}
                  labelStyle={styles.buttonLabel}
                >
                  Next
                </Button>
                <Button
                  mode="text"
                  onPress={() => navigation.navigate('Login')}
                  style={styles.skipButton}
                  labelStyle={styles.skipButtonLabel}
                >
                  Skip
                </Button>
              </View>
            </LinearGradient>
          </View>
        ))}
      </Swiper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  slide: {
    flex: 1,
  },
  image: {
    width: width,
    height: height * 0.5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  content: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 30,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  skipButton: {
    backgroundColor: 'transparent',
  },
  skipButtonLabel: {
    color: '#6200ee',
    fontSize: 16,
  },
  pagination: {
    bottom: 20,
  },
});

export default SliderPage;
