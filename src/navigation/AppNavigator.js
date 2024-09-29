import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import globalStyles from '../styles/globalStyles';
import SliderScreen from '../screens/SliderScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CertificateScreen from '../screens/CertificateScreen';
import LiveClassScreen from '../screens/LiveClassScreen';
import TeacherDashboardScreen from '../screens/TeacherDashboardScreen';
import AccountScreen from '../screens/AccountScreen';
import EbookScreen from '../screens/EbookScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={WelcomeScreen} />
    <Tab.Screen name="Notifications" component={NotificationScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Certificates" component={CertificateScreen} />
    <Tab.Screen name="Ebooks" component={EbookScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Slider">
    <Stack.Screen name="Slider" component={SliderScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
    <Stack.Screen name="LiveClass" component={LiveClassScreen} />
    <Stack.Screen name="TeacherDashboard" component={TeacherDashboardScreen} />
    <Stack.Screen name="Account" component={AccountScreen} />
  </Stack.Navigator>
);

export default AppNavigator;