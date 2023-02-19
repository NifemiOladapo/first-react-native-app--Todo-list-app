import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Goalitem = ({ itemData, deleteTodo }) => {
  return (
    <View style={styles.singletodo}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => deleteTodo(itemData.item.id)}
      >
        <Text
          style={{
            color: "white",
            fontStyle: "italic",
            padding: 10,
          }}
        >
          {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  singletodo: {
    backgroundColor: "blue",
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default Goalitem;
