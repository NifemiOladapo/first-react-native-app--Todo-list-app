import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import Goalinput from "./components/Goalinput";
import Goalitem from "./components/Goalitem";
import SettingsModal from "./components/SettingsModal";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [closeOnaddGoal, setCloseOnaddGoal] = useState(true);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  const startAddGoalHandeler = () => {
    setModalIsVisible(true);
  };

  const deleteTodo = (todoId) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoId)
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.button1}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandeler}
          />
        </View>
        <Button
          onPress={() => setSettingsIsOpen(true)}
          color={"#4e0acc"}
          title="Settings"
        />
        {modalIsVisible ? (
          <Goalinput
            closeOnaddGoal={closeOnaddGoal}
            setCloseOnaddGoal={setCloseOnaddGoal}
            modalIsVisible={modalIsVisible}
            todos={todos}
            setTodos={setTodos}
            setModalIsVisible={setModalIsVisible}
          />
        ) : null}
        {settingsIsOpen ? (
          <SettingsModal
            closeOnaddGoal={closeOnaddGoal}
            settingsIsOpen={settingsIsOpen}
            setSettingsIsOpen={setSettingsIsOpen}
            setCloseOnaddGoal={setCloseOnaddGoal}
          />
        ) : null}
        <View style={styles.todosWrapper}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={todos}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return <Goalitem deleteTodo={deleteTodo} itemData={itemData} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  button1: {
    marginBottom: 20,
  },
  todosWrapper: {
    flex: 5,
    marginTop: 30,
  },
});
