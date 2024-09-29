import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, Card } from 'react-native-paper';

const LiveClassScreen = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { id: Date.now(), text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        {/* Placeholder for video component */}
        <Card style={styles.videoPlaceholder}>
          <Card.Content>
            <Title>Live Video Stream</Title>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.chatContainer}>
        <ScrollView style={styles.chatMessages}>
          {chat.map(msg => (
            <View key={msg.id} style={styles.message}>
              <Title style={styles.sender}>{msg.sender}</Title>
              <Title>{msg.text}</Title>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            style={styles.input}
          />
          <Button mode="contained" onPress={sendMessage}>Send</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    padding: 10,
  },
  videoPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatMessages: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    marginBottom: 10,
  },
  sender: {
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
});

export default LiveClassScreen;