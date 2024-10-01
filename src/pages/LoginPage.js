import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon name={() => <MaterialIcons name="person" size={20} color="#6200ee" />} />}
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
        mode="outlined"
        onPress={() => setIsTeacher(!isTeacher)}
        style={styles.toggleButton}
        labelStyle={styles.toggleButtonLabel}
      >
        {isTeacher ? 'Login as Student' : 'Login as Teacher'}
      </Button>
      <Button mode="contained" onPress={() => {}} style={styles.loginButton}>
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
