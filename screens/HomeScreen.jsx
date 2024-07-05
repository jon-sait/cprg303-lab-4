import React, { useState } from "react";
import { Button, View } from "react-native";

import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles";

function AboutScreen({ navigation }) {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    if (tasks.indexOf(taskText) < 0) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <View>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <View style={styles.aboutButton}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
        </View>
      </View>
    </MainLayout>
  );
}

export default AboutScreen;
