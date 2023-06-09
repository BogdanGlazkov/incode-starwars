import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Loader.styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loader;
