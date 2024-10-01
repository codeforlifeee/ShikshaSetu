import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { TextInput, Button, Title, Text } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const LiveClassScreen = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setIsLandscape(width > height);
    };

    // Add event listener for dimension changes
    Dimensions.addEventListener('change', handleOrientationChange);

    // Cleanup the event listener on component unmount
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      setChat([
        ...chat,
        { id: Date.now(), text: message, sender: 'You', time: new Date().toLocaleTimeString() },
      ]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <WebView
          style={styles.videoPlaceholder}
          source={{ uri: 'https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
        />
      </View>
      <View style={styles.chatContainer}>
        <ScrollView style={styles.chatMessages}>
          {chat.map((msg) => (
            <View key={msg.id} style={styles.message}>
              <Text style={styles.sender}>{msg.sender}</Text>
              <Text>{msg.text}</Text>
              <Text style={styles.time}>{msg.time}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            style={styles.input}
            mode="outlined"
          />
          <Button
            mode="contained"
            onPress={sendMessage}
            style={styles.sendButton}
            labelStyle={styles.sendButtonLabel}
          >
            Send
          </Button>
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
    backgroundColor: '#000',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  chatMessages: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  sender: {
    fontWeight: 'bold',
    color: '#6200ee',
  },
  time: {
    fontSize: 10,
    color: '#888',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#7870ff', // Brighter violet color
    paddingVertical: 5,
  },
  sendButtonLabel: {
    color: '#fff', // White text color for better contrast
  },
});

export default LiveClassScreen;
