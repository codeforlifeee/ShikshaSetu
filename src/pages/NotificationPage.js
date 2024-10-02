import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { List, Divider } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'; // Ensure this path is correct

const NotificationPage = () => {
  // Sample notifications data
  const notifications = [
    { id: '1', title: 'New course available', description: 'Check out our new Python course!' },
    { id: '2', title: 'Upcoming live class', description: 'Join the Math class tomorrow at 3 PM' },
    { id: '3', title: 'Assignment due', description: "Don't forget to submit your essay by Friday" },
  ];

  // Render each notification item
  const renderItem = ({ item }) => (
    <List.Item
      title={item.title}
      description={item.description}
      titleStyle={styles.title}
      descriptionStyle={styles.description}
      left={props => <List.Icon {...props} icon="bell" style={styles.icon} />}
      style={styles.listItem}
    />
  );

  return (
    <View style={globalStyles.container}>
      <Text style={styles.header}>Notifications</Text>
      {notifications.length === 0 ? (
        <Text style={styles.emptyMessage}>No notifications available</Text>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Divider />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#6200ee', // Primary color for titles
  },
  listItem: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ee', // Primary color for titles
  },
  description: {
    fontSize: 14,
    color: '#666', // Darker color for descriptions
  },
  icon: {
    marginRight: 10,
  },
  emptyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});

export default NotificationPage;
