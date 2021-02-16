import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Task from "./components/Task";

export default function App() {
  const [newTask, setNewTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log(newTask);
    Keyboard.dismiss();
    setTaskItems([...taskItems, newTask]);
    setNewTask(null);
  };
  const handleDelete = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's list</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Task
                text={item}
                key={index}
                handleDelete={() => handleDelete(index)}
              />
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity
          onPress={handleAddTask}
          disabled={newTask ? false : true}
        >
          <View style={styles.plus}>
            <AntDesign name="plus" size={30} color="#C0C0C0" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "black",
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    paddingHorizontal: 15,
    textAlign: "center",
    borderWidth: 1,
  },
  plus: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
