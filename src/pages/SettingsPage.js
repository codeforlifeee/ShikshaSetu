import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Divider } from 'react-native-paper';

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>Account Settings</List.Subheader>
        <List.Item
          title="Edit Profile"
          left={() => <List.Icon icon="account" />}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          title="Change Password"
          left={() => <List.Icon icon="lock" />}
          onPress={() => {}}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Notifications</List.Subheader>
        <List.Item
          title="App Notifications"
          left={() => <List.Icon icon="bell" />}
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
          )}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Language and Region</List.Subheader>
        <List.Item
          title="Language"
          description="English"
          left={() => <List.Icon icon="translate" />}
          onPress={() => {}}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Privacy Settings</List.Subheader>
        <List.Item
          title="Privacy Policy"
          left={() => <List.Icon icon="shield" />}
          onPress={() => {}}
        />
      </List.Section>

      <List.Section>
        <List.Item
          title="About"
          left={() => <List.Icon icon="information" />}
          onPress={() => {}}
        />
        <Divider />
        <List.Item
          title="Logout"
          left={() => <List.Icon icon="logout" />}
          onPress={() =>