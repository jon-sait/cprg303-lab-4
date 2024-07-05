import React from "react";
import { View } from "react-native";

import styles from "../styles";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
}

export default MainLayout;
