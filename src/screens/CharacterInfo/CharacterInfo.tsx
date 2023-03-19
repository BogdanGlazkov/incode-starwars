import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./CharacterInfo.styles";

const CharacterInfo = ({ navigation, route }) => {
  const data = route.params;
  const {
    name,
    birth_year,
    gender,
    skin_color,
    eye_color,
    hair_color,
    height,
    mass,
    url,
  } = data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerFlex}>
          <TouchableOpacity
            style={styles.exit}
            onPress={() => navigation.navigate("Home")}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Character Info</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.info}>Birth Year: {birth_year || " "}</Text>
          <Text style={styles.info}>Gender: {gender || " "}</Text>
          <Text style={styles.info}>Height: {height || " "}</Text>
          <Text style={styles.info}>Mass: {mass || " "}</Text>
          <Text style={styles.info}>Skin Color: {skin_color || " "}</Text>
          <Text style={styles.info}>Eye Color: {eye_color || " "}</Text>
          <Text style={styles.info}>Hair Color: {hair_color || " "}</Text>
          <Text style={styles.info} onPress={() => Linking.openURL(url)}>
            Url address: {url || " "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterInfo;
