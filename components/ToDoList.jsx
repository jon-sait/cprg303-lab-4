import { Pressable, View, Text, ScrollView } from "react-native";

import styles from "../styles";

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task}>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default ToDoList;
