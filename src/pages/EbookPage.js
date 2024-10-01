import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import Card from '../components/Card';

const EbookPage = () => {
  const ebooks = [
    {
      id: 1,
      title: 'Introduction to React Native',
      description: 'Learn the basics of React Native development',
      image: require('../../assets/images/ebook1.png'),
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Master advanced concepts in JavaScript',
      image: require('../../assets/images/ebook2.png'),
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      description: 'Comprehensive guide to DS&A',
      image: require('../../assets/images/ebook3.png'),
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      description: 'Get started with machine learning concepts',
      image: require('../../assets/images/ebook4.png'),
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
            image={ebook.image}
            style={styles.card} // Added a style prop
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
    backgroundColor: '#f9f9f9', // Light background for better contrast
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200ee', // Primary color for title
    textAlign: 'center', // Center the title
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Set width for card responsiveness
    marginBottom: 16, // Space between cards
    borderRadius: 10, // Rounded corners for cards
    elevation: 3, // Shadow for depth
    backgroundColor: '#fff', // Card background
  },
});

export default EbookPage;
