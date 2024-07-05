import { View, Text } from "react-native";

import MainLayout from "../layouts/MainLayout";

function AboutScreen() {
  return (
    <MainLayout>
      <View>
        <Text>Incredible TODO List App</Text>
        <Text>Jincheng Lei</Text>
        <Text>{new Date().toDateString()}</Text>
      </View>
    </MainLayout>
  );
}

export default AboutScreen;
