import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';

const CertificateScreen = () => {
  const handleDownload = () => {
    // Implement certificate download logic here
    console.log('Downloading certificate...');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Your Certificates</Title>
      <Button
        icon="download"
        mode="contained"
        onPress={handleDownload}
        style={styles.button}
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default CertificateScreen;