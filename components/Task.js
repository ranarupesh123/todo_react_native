import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <View style={styles.itemText}>
          <Text>{props.text}</Text>
        </View>
        <View>
          <AntDesign
            name="delete"
            size={24}
            color="red"
            onPress={props.handleDelete}
          />
        </View>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
  },
  itemText: {
    paddingLeft: 15,
    width: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
  },
});
