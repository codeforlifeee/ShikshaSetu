import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Card, Paragraph } from 'react-native-paper';
import SearchBar from '../components/SearchBar';

const TeacherDashboardPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const students = [
    { id: 1, name: 'Alice Johnson', course: 'Mathematics' },
    { id: 2, name: 'Bob Smith', course: 'Physics' },
    { id: 3, name: 'Charlie Brown', course: 'Chemistry' },
    { id: 4, name: 'Diana Miller', course: 'Biology' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.welcomeMessage}>Welcome, Teacher!</Title>

      <SearchBar
        placeholder="Search students"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <View style={styles.cardContainer}>
        {students.map((student) => (
          <Card key={student.id} style={styles.card}>
            <Card.Content>
              <Title>{student.name}</Title>
              <Paragraph>{student.course}</Paragraph>
            </Card.Content>
          </Card>
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
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
});

export default TeacherDashboardPage;