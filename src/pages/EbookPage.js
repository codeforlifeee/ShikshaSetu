import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import Card from '../components/Card';

const EbookPage = () => {
  // Placeholder ebook data with local images from the assets folder
  const ebooks = [
    {
      id: 1,
      title: 'Introduction to React Native',
      description: 'Learn the basics of React Native development',
      image: require('../../assets/images/ebook1.png') // Local image
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Master advanced concepts in JavaScript',
      image: require('../../assets/images/ebook2.png') // Local image
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      description: 'Comprehensive guide to DS&A',
      image: require('../../assets/images/ebook3.png') // Local image
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      description: 'Get started with machine learning concepts',
      image: require('../../assets/images/ebook4.png') // Local image
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Ebooks</Title>

      <View style={styles.cardContainer}>
        {ebooks.map((ebook) => (
          <Card
            key={ebook.id}
            title={ebook.title}
            description={ebook.description}
            image={ebook.image} // Using local image from assets
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default EbookPage;
