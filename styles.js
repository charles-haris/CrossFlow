import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',  // Align items in a row (similar to display: flex)
        justifyContent: 'space-between', // Space between text and button
        alignItems: 'center', // Center vertically
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: '#fff', // Ensure background color for contrast
    },
    todoItemText: {
        flex: 1, // Takes up remaining space
        marginRight: 8,
        color: '#333',
        fontSize: 16, // Adjust for readability
    },
    completed: {
        textDecorationLine: 'line-through', // Equivalent to CSS text-decoration: line-through
        color: '#666',
    },
    deleteButton: {
        backgroundColor: '#ff6347', // Tomato color
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default styles;