import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button, Text } from 'react-native-paper';

const CertificatePage = () => {
  const handleDownload = () => {
    // Implement certificate download logic here
    console.log('Downloading certificate...');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Your Certificates</Title>
      <Text style={styles.description}>
        You can download your certificates for completed courses below.
      </Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color for better contrast
  },
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
