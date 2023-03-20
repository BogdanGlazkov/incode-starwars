import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { UseAppDispatch, UseAppSelector } from "../../hooks";
import { clearFavorites } from "../../redux/characters/charactersActions";
import { styles } from "./Header.styles";

const Header = () => {
  const count = UseAppSelector((state) => state?.characters?.genderCount);
  const dispatch = UseAppDispatch();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Fans</Text>
        <TouchableOpacity
          style={styles.clearBtn}
          onPress={() => dispatch(clearFavorites())}
        >
          <Text style={styles.clearBtnText}>Clear fans</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.genderBoxes}>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>{count.female}</Text>
          <Text style={styles.genderName}>Female fans</Text>
        </View>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>{count.male}</Text>
          <Text style={styles.genderName}>Male fans</Text>
        </View>
        <View style={[styles.genderBox, styles.elevation]}>
          <Text style={styles.genderNumber}>{count.others}</Text>
          <Text style={styles.genderName}>Others</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
