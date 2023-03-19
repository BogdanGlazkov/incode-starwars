import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Header.styles";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Fans</Text>
        <TouchableOpacity style={styles.clearBtn}>
          <Text style={styles.clearBtnText}>Clear fans</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.genderBoxes}>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>0</Text>
          <Text style={styles.genderName}>Female fans</Text>
        </View>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>0</Text>
          <Text style={styles.genderName}>Male fans</Text>
        </View>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>0</Text>
          <Text style={styles.genderName}>Others</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
