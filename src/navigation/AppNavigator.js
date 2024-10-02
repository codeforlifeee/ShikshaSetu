import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native-paper';
import SliderPage from '../pages/SliderPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';
import NotificationPage from '../pages/NotificationPage';
import SettingsPage from '../pages/SettingsPage';
import CertificatePage from '../pages/CertificatePage';
import EbookPage from '../pages/EbookPage';
import SplashPage from '../pages/SplashPage';
import LiveClassScreen from '../pages/LiveClassScreen';
import StudyMaterialPage from '../pages/StudyMaterialPage';
import ChatbotPage from '../pages/ChatbotPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator for the main pages after login
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopColor: '#6200ee',
        borderTopWidth: 2,
      },
      tabBarLabel: ({ focused }) => (
        <Text style={{ color: focused ? '#6200ee' : '#888' }}>
          {route.name}
        </Text>
      ),
    })}
  >
    <Tab.Screen name="Home" component={WelcomePage} />
    <Tab.Screen name="Notifications" component={NotificationPage} />
    <Tab.Screen name="Settings" component={SettingsPage} />
    <Tab.Screen name="Certificates" component={CertificatePage} />
    <Tab.Screen name="Ebooks" component={EbookPage} />
    <Tab.Screen name="LiveClass" component={LiveClassScreen} />
  </Tab.Navigator>
);

// Define the Stack Navigator to include SplashScreen, Login, Register, and MainTabs
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
      <Stack.Screen name="Slider" component={SliderPage} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="StudyMaterials" component={StudyMaterialPage} />
      <Stack.Screen name="Chatbot" component={ChatbotPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
