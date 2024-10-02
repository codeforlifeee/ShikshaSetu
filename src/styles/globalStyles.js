import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Consistent padding for the main container
    backgroundColor: '#f8f8f8', // Light background color for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10, // Padding inside input fields for better usability
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#6200ee', // Primary color for buttons
    paddingVertical: 10, // Vertical padding for buttons
    borderRadius: 5, // Rounded corners for buttons
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20, // Spacing between card groups
  },
});

export default globalStyles;
