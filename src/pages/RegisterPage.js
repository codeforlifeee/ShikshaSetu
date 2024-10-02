import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper'; // Ensure you have react-native-paper installed

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [educationalStatus, setEducationalStatus] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error handling

  const handleRegister = async () => {
    try {
      // Perform registration logic, e.g., API call here
      // await axios.post('http://localhost:5000/api/auth/register', { username, email, dob, educationalStatus, password });

      // Navigate to home screen on successful registration
      navigation.navigate('Main', { screen: 'Home' });
    } catch (err) {
      setError('Registration failed. Please try again.'); // Set error message on failure
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Register</Text>
      {error && <Text style={styles.error}>{error}</Text>} {/* Display error message */}
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Date of Birth"
        value={dob}
        onChangeText={setDob}
        placeholder="DD/MM/YYYY"
        style={styles.input}
        mode="outlined"
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
    backgroundColor: '#f5f5f5',
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
    color: '#6200ee',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  registerButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#6200ee',
  },
  loginButton: {
    marginTop: 10,
  },
});

export default RegisterPage;
