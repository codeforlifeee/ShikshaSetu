import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have react-native-vector-icons installed

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [educationalStatus, setEducationalStatus] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Logic for registration goes here...
    navigation.navigate('Main', { screen: 'Home' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Register</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name={() => <MaterialIcons name="person" size={20} color="#6200ee" />} />}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name={() => <MaterialIcons name="email" size={20} color="#6200ee" />} />}
      />
      <TextInput
        label="Date of Birth"
        value={dob}
        onChangeText={setDob}
        placeholder="DD/MM/YYYY"
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name={() => <MaterialIcons name="calendar-today" size={20} color="#6200ee" />} />}
      />
      <TextInput
        label="Educational Status"
        value={educationalStatus}
        onChangeText={setEducationalStatus}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name={() => <MaterialIcons name="lock" size={20} color="#6200ee" />} />}
      />
      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.registerButton}
      >
        Register
      </Button>
      <Button onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
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
    backgroundColor: '#f5f5f5', // Light background color
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200ee', // Primary color for text
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff', // White background for inputs
  },
  registerButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#6200ee', // Primary color for button
  },
  loginButton: {
    marginTop: 10,
  },
});

export default RegisterPage;
