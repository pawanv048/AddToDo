import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Alert, Button } from "react-native";
import { useState } from "react";
import Header from "./compontents/hearder";
import TodoItems from "./compontents/todoitems";
import AddToDoHere from "./compontents/addToDo";
//import SandBox from './compontents/sandbox'

function App() {
  const [todos, setTodos] = useState([
    { text: "ready my breakfast", key: "1" },
    { text: "ready for job", key: "2" },
    { text: "work on working hour", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Ohh!!!! Please enter more than 3 character");
    }
  };

  const twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      "Hello",
      //body
      "I am two option alert. Do you want to cancel me ?",
      [
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDoHere submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <Button title="Alert with Two Options" onPress={twoOptionAlertHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});
