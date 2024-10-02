import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Ensure navigation is imported

const LoginPage = () => {
  const navigation = useNavigation(); // Use navigation hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const handleLogin = async () => {
    try {
      // Replace with your backend API endpoint
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          role: isTeacher ? 'teacher' : 'student', // Include user role
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming you get a success response from the server
        navigation.navigate('Welcome', { user: data.user });
      } else {
        // Handle login error
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
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
        mode="outlined"
        onPress={() => setIsTeacher(!isTeacher)}
        style={styles.toggleButton}
        labelStyle={styles.toggleButtonLabel}
      >
        {isTeacher ? 'Login as Student' : 'Login as Teacher'}
      </Button>
      <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
        Don't have an account? Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  toggleButton: {
    marginVertical: 10,
    borderColor: '#6200ee',
  },
  toggleButtonLabel: {
    color: '#6200ee',
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#6200ee',
  },
  registerButton: {
    marginTop: 10,
  },
});

export default LoginPage;
