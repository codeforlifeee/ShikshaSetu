import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const WelcomePage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        <Title style={styles.welcomeMessage}>Welcome to ShikshaSetu!</Title>
        <View style={styles.cardContainer}>
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              title={`Course ${item}`}
              image={{ uri: '' }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default WelcomePage;