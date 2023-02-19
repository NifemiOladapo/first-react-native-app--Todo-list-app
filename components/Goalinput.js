import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const Goalinput = ({ todos, setTodos, isVisible, setModalIsVisible }) => {
  const [inputText, setinputText] = useState("");

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.secondlayer}>
        <Image
          source={require("../assets/splash.png")}
          style={{ width: "100%", height: 150 }}
        />
        <TextInput
          value={inputText}
          onChangeText={(text) => {
            setinputText(text);
          }}
          style={styles.inputStyles}
          placeholder="Input a task"
        />
        <View style={styles.buttonsParent}>
          <View style={styles.button}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={() => setModalIsVisible(false)}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#5e0acc"
              onPress={() => {
                if (inputText === "") {
                  Alert.alert("Please. Input a task");
                  return;
                }
                todos.push({ text: inputText, id: Math.random() });
                setTodos([...todos]);
                setinputText("");
                setModalIsVisible(false);
              }}
              title="Add Task"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    color: "#120438",
    // marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
  },
  secondlayer: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
    // borderBottomColor: "grey",
    // borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },
  buttonsParent: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },

  button: {
    width: 109,
    marginHorizontal: 10,
  },
});
export default Goalinput;
