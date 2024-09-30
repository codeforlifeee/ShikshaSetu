// src/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashPage = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Slider'); // Navigate to Slider page after timeout
        }, 1500); // Set to 2000ms for 2 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')} // Add your logo image in assets folder
                style={styles.logo}
            />
            <Text style={styles.title}>Welcome to ShikshaSetu!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A1D6E2',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1995AD',
    },
});

export default SplashPage;




