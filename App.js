import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import TodoList from './components/TodoList';


export default function App() {
  return (
    // <View style={styles.appContainer}>
    //   <View style={styles.inputContainer}>
    //     <TextInput style={styles.textInput} placeholder='Your course goal!' />
    //     <Button title='Add Goal' />
    //   </View>
    //   <View>
    //     <Text style={styles.sentence}>List of goals...</Text>
    //   </View>
    // </View>
    <TodoList style={styles.appContainer} />

  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '70%'
  },
  sentence: {
    marginTop: 5,
  }
});
