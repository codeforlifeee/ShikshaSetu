import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Button } from 'react-native-paper';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import globalStyles from '../styles/globalStyles';

const WelcomePage = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    // Create an array of images (ensure the paths match your project structure)
    const images = [
        require('../../assets/images/course1.png'),
        require('../../assets/images/course2.png'),
        require('../../assets/images/course3.png'),
        require('../../assets/images/course4.png'),
    ];

    return (
        <View style={globalStyles.container}>
            <SearchBar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Title style={styles.welcomeMessage}>Welcome to ShikshaSetu!</Title>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('StudyMaterials')}
                    style={styles.ctaButton}
                >
                    Explore Courses
                </Button>
                <View style={styles.cardContainer}>
                    {images.map((image, index) => (
                        <Card
                            key={index}
                            title={`Course ${index + 1}`}
                            image={image}
                            onPress={() => {
                                // Navigate to a detailed course page or any other action
                                navigation.navigate('CourseDetails', { courseId: index + 1 });
                            }}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 20, // Additional padding at the bottom
    },
    welcomeMessage: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#6200ee', // Primary color for text
    },
    ctaButton: {
        marginBottom: 20,
        backgroundColor: '#6200ee', // Match the primary color
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5, // Horizontal padding for better alignment
    },
});

export default WelcomePage;
