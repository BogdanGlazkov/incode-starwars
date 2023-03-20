import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { IString } from "../../redux/characters/charactersTypes";
import { UseAppDispatch, UseAppSelector } from "../../hooks";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/characters/charactersActions";
import { styles } from "../../index.styles";

const CharacterRow = ({ data, onPress }) => {
  const favList = UseAppSelector((state) => state?.characters?.favorites);
  const count = UseAppSelector((state) => state?.characters?.genderCount);
  const { name, birth_year, gender, homeworld, species } = data;
  const [world, setWorld] = useState("");
  const [spec, setSpec] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = UseAppDispatch();

  const getHomeworld = async () => {
    try {
      const { data } = await axios.get<IString>(homeworld);
      setWorld(data.name);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  const getSpecies = async () => {
    try {
      const { data } = await axios.get<IString>(species);
      setSpec(data.name);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  useEffect(() => {
    getHomeworld();
    getSpecies();
  }, []);

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
          <Text style={styles.text}>{world || ""}</Text>
        </View>
        <View style={styles.ceil}>
          <Text style={styles.text}>{spec || ""}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterRow;
