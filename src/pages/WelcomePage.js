import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title } from 'react-native-paper';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

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
        <View style={styles.container}>
            <SearchBar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ScrollView>
                <Title style={styles.welcomeMessage}>Welcome to ShikshaSetu!</Title>
                <View style={styles.cardContainer}>
                    {images.map((image, index) => (
                        <Card
                            key={index}
                            title={`Course ${index + 1}`} // Corrected this line
                            image={image} // Using the local images here
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    welcomeMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default WelcomePage;
