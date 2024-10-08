import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker'; // For file upload

const StudyMaterialPage = () => {
  const [materials, setMaterials] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchMaterials = async () => {
    try {
      const token = 'YOUR_AUTH_TOKEN'; // Replace with your method to get token
      const response = await axios.get('http://localhost:5000/api/materials', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMaterials(response.data);
    } catch (err) {
      console.error('Error fetching materials:', err);
      Alert.alert('Error fetching materials', err.message);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      Alert.alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', {
      uri: file.uri,
      type: file.mimeType, // Adjust the mime type as necessary
      name: file.name,
    });

    try {
      const token = 'YOUR_AUTH_TOKEN'; // Replace with your method to get token
      await axios.post('http://localhost:5000/api/materials', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMaterials(); // Refresh materials after upload
      setTitle('');
      setDescription('');
      setFile(null);
    } catch (err) {
      console.error('Error uploading material:', err);
      Alert.alert('Error uploading material', err.message);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (result.type === 'success') {
      setFile(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Materials</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        required
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        required
      />
      <Button title="Pick a file" onPress={pickDocument} />
      {file && <Text>Selected file: {file.name}</Text>}
      <Button title="Upload" onPress={handleUpload} />

      <Text style={styles.subTitle}>Uploaded Materials</Text>
      <FlatList
        data={materials}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.materialItem}>
            <Text style={styles.materialTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`http://localhost:5000/${item.file}`)}
            >
              <Text style={styles.downloadLink}>Download</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  materialItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  materialTitle: {
    fontWeight: 'bold',
  },
  downloadLink: {
    color: '#007BFF',
    marginTop: 5,
  },
});

export default StudyMaterialPage;
