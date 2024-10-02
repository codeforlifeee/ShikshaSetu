import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button, Text } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const CertificatePage = () => {
  const handleDownload = () => {
    // Implement certificate download logic here
    console.log('Downloading certificate...');
  };

  return (
    <View style={globalStyles.container}>
      <Title style={styles.title}>My Certificates</Title>
      <Text style={styles.description}>
        You can download your certificates for completed courses below.
      </Text>
      {/* Placeholder for certificates list */}
      {/* Replace this with dynamic certificate data */}
      <View style={styles.certificatesContainer}>
        <Text style={styles.certificateText}>Certificate of Completion: Course A</Text>
        <Text style={styles.certificateText}>Certificate of Completion: Course B</Text>
      </View>
      <Button
        icon="download"
        mode="contained"
        onPress={handleDownload}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Download Certificate
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee', // Primary color for title
  },
  description: {
    fontSize: 16,
    color: '#333', // Darker text for better readability
    textAlign: 'center',
    marginBottom: 30, // Space before the button
  },
  certificatesContainer: {
    marginBottom: 20, // Space below the certificates list
  },
  certificateText: {
    fontSize: 16,
    color: '#555', // Color for certificate text
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 20,
    borderRadius: 8, // Rounded corners for the button
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default CertificatePage;
