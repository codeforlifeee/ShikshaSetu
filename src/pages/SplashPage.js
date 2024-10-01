// src/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const SplashPage = ({ navigation }) => {
    const fadeAnim = new Animated.Value(0); // Initial opacity for logo fade in

    useEffect(() => {
        // Fade-in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Navigate to Slider page after timeout
        const timer = setTimeout(() => {
            navigation.replace('Slider');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation, fadeAnim]);

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
                <Image
                    source={require('../../assets/images/logo.png')} // Add your logo image in assets folder
                    style={styles.logo}
                />
            </Animated.View>
            <Text style={styles.title}>Welcome to ShikshaSetu!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000', // Subtle shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#6200ee',
        letterSpacing: 1.2, // Better readability
        marginTop: 10,
    },
});

export default SplashPage;
