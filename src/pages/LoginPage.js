import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
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
        mode="outlined"
        onPress={() => setIsTeacher(!isTeacher)}
        style={styles.toggleButton}
      >
        {isTeacher ? 'Login as Student' : 'Login as Teacher'}
      </Button>
      <Button mode="contained" onPress={() => {}} style={styles.loginButton}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Register')}>
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
  toggleButton: {
    marginVertical: 10,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default LoginPage;