import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SliderPage from '../pages/SliderPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';
import NotificationPage from '../pages/NotificationPage';
import SettingsPage from '../pages/SettingsPage';
import CertificatePage from '../pages/CertificatePage';
import EbookPage from '../pages/EbookPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator for the main pages after login
const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={WelcomePage} />
    <Tab.Screen name="Notifications" component={NotificationPage} />
    <Tab.Screen name="Settings" component={SettingsPage} />
    <Tab.Screen name="Certificates" component={CertificatePage} />
    <Tab.Screen name="Ebooks" component={EbookPage} />
  </Tab.Navigator>
);

// Define the Stack Navigator to include Login, Register, and MainTabs
const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Slider">
    <Stack.Screen name="Slider" component={SliderPage} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="Register" component={RegisterPage} />
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default AppNavigator;
