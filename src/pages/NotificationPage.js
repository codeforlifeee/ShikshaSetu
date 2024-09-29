import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';

const NotificationPage = () => {
  const notifications = [
    { id: '1', title: 'New course available', description: 'Check out our new Python course!' },
    { id: '2', title: 'Upcoming live class', description: 'Join the Math class tomorrow at 3 PM' },
    { id: '3', title: 'Assignment due', description: 'Dont forget to submit your essay by Friday' },
  ];

  const renderItem = ({ item }) => (
    <List.Item
      title={item.title}
      description={item.description}
      left={props => <List.Icon {...props} icon="bell" />}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NotificationPage;