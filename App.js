import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";

export default function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.secondlayer}>
        <TextInput
          value={inputText}
          onChangeText={(text) => {
            setinputText(text);
          }}
          style={styles.inputStyles}
          placeholder="Input a task"
        />
        <Button
          onPress={() => {
            if (inputText === "") {
              Alert.alert("Please. Input a task");
              return;
            }
            todos.push(inputText);
            setTodos([...todos]);
            setinputText("");
          }}
          title="Create"
        />
      </View>
      {todos.map((todo, i) => {
        return (
          <View style={styles.thirdlayer} key={i}>
            <Text style={{ color: "white", fontStyle: "italic" }}>{todo}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 35,
    flex: 1,
  },
  inputStyles: {
    borderWidth: 1,
    padding: 3,
    width: "80%",
    marginRight: 10,
    borderRadius: 5,
  },
  secondlayer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 30,
  },
  thirdlayer: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    marginBottom: 5,
  },
});
