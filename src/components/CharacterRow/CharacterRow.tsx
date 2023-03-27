import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { UseAppDispatch, UseAppSelector } from "../../hooks";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/characters/charactersActions";
import { styles } from "../../index.styles";

const CharacterRow = ({ data, onPress }) => {
  const favList = UseAppSelector((state) => state?.characters?.favorites);
  const { name, birth_year, gender, homeworld, species } = data;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = UseAppDispatch();

  useEffect(() => {
    if (favList.some((el) => el.name === name)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  });

  return (
    <View style={styles.row}>
      {isFavorite ? (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => dispatch(removeFavorite({ name, gender }))}
        >
          <AntDesign name="heart" size={16} color="red" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => dispatch(addFavorite({ name, gender }))}
        >
          <AntDesign name="hearto" size={16} color="red" />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.title} onPress={onPress}>
        <View style={[styles.ceil, styles.name]}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.ceil}>
          <Text style={styles.text}>{birth_year || "unknown"}</Text>
        </View>
        <View style={styles.ceil}>
          <Text style={styles.text}>{gender || "n/a"}</Text>
        </View>
        <View style={styles.ceil}>
          <Text style={styles.text}>{homeworld || ""}</Text>
        </View>
        <View style={styles.ceil}>
          <Text style={styles.text}>{species || ""}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterRow;
