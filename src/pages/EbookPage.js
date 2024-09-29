import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import Card from '../components/Card';

const EbookScreen = () => {
  // Placeholder ebook data
  const ebooks = [
    { id: 1, title: 'Introduction to React Native', description: 'Learn the basics of React Native development' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master advanced concepts in JavaScript' },
    { id: 3, title: 'Data Structures and Algorithms', description: 'Comprehensive guide to DS&A' },
    { id: 4, title: 'Machine Learning Basics', description: 'Get started with machine learning concepts' },
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
            image={{ uri: 'https://picsum.photos/700' }}
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

export default EbookScreen;