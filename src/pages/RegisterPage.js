import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [educationalStatus, setEducationalStatus] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Logic for registration goes here...
    // After registration, navigate to the main tab and select the "Home" tab (WelcomePage)
    navigation.navigate('Main', { screen: 'Home' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Date of Birth"
        value={dob}
        onChangeText={setDob}
        placeholder="DD/MM/YYYY"
        style={styles.input}
      />
      <TextInput
        label="Educational Status"
        value={educationalStatus}
        onChangeText={setEducationalStatus}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleRegister}  // Update to use handleRegister function
        style={styles.registerButton}
      >
        Register
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  registerButton: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default RegisterPage;
