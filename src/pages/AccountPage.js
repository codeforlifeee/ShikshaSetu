import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, List, Button } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'; // Import global styles

const AccountPage = () => {
  // Placeholder user data
  const user = {
    username: 'johndoe',
    email: 'john@example.com',
    age: 30,
    dob: '1993-05-15',
    educationalStatus: 'Postgraduate',
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Title style={styles.title}>Account Information</Title>

      <List.Section>
        <List.Item
          title="Username"
          description={user.username}
          left={props => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="Email"
          description={user.email}
          left={props => <List.Icon {...props} icon="email" />}
        />
        <List.Item
          title="Age"
          description={user.age.toString()}
          left={props => <List.Icon {...props} icon="calendar" />}
        />
        <List.Item
          title="Date of Birth"
          description={user.dob}
          left={props => <List.Icon {...props} icon="cake" />}
        />
        <List.Item
          title="Educational Status"
          description={user.educationalStatus}
          left={props => <List.Icon {...props} icon="school" />}
        />
      </List.Section>

      <Button
        icon="share"
        mode="outlined"
        onPress={() => console.log('Share profile')}
        style={styles.button}
      >
        Share Profile
      </Button>

      <Button
        icon="logout"
        mode="contained"
        onPress={() => console.log('Logout')}
        style={styles.button}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default AccountPage;
