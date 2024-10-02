import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Divider, Title } from 'react-native-paper';

const SettingsPage = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Settings</Title>

      <List.Section>
        <List.Subheader style={styles.subheader}>Account Settings</List.Subheader>
        <List.Item
          title="Edit Profile"
          left={() => <List.Icon icon="account" />}
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.listItem}
        />
        <Divider />
        <List.Item
          title="Change Password"
          left={() => <List.Icon icon="lock" />}
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.listItem}
        />
      </List.Section>

      <List.Section>
        <List.Subheader style={styles.subheader}>Notifications</List.Subheader>
        <List.Item
          title="App Notifications"
          left={() => <List.Icon icon="bell" />}
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
          )}
          style={styles.listItem}
        />
      </List.Section>

      <List.Section>
        <List.Subheader style={styles.subheader}>Language and Region</List.Subheader>
        <List.Item
          title="Language"
          description="English"
          left={() => <List.Icon icon="translate" />}
          onPress={() => {}}
          style={styles.listItem}
        />
      </List.Section>

      <List.Section>
        <List.Subheader style={styles.subheader}>Privacy Settings</List.Subheader>
        <List.Item
          title="Privacy Policy"
          left={() => <List.Icon icon="shield" />}
          onPress={() => {}}
          style={styles.listItem}
        />
      </List.Section>

      <List.Section>
        <List.Item
          title="About"
          left={() => <List.Icon icon="information" />}
          onPress={() => {}}
          style={styles.listItem}
        />
        <Divider />
        <List.Item
          title="Logout"
          left={() => <List.Icon icon="logout" />}
          onPress={() => {}}
          style={styles.listItem}
        />
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for contrast
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200ee', // Primary color for title
    textAlign: 'center',
  },
  subheader: {
    fontWeight: 'bold',
    color: '#333', // Darker color for subheaders
  },
  listItem: {
    paddingVertical: 15,
    backgroundColor: '#fff', // White background for list items
    borderRadius: 8, // Rounded corners for items
    marginBottom: 10, // Space between items
    elevation: 2, // Shadow for depth
  },
});

export default SettingsPage;
