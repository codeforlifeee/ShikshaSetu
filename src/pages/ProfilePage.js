import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import globalStyles from '../styles/globalStyles'; // Ensure this path is correct

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Consider using AsyncStorage in React Native
      const response = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setUsername(response.data.username);
      setEmail(response.data.email);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      setError('Error fetching user profile');
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Consider using AsyncStorage in React Native
      await axios.put('http://localhost:5000/api/auth/profile', { username, email }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchUserProfile(); // Refresh user profile after update
      Alert.alert('Success', 'Profile updated successfully');
    } catch (err) {
      setError('Error updating profile');
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        required
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        required
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text style={styles.detailsHeader}>Your Details</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  detailsHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
