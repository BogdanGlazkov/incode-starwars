import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {
  getCharacters,
  setQuery as setSearch,
} from "../redux/characters/charactersActions";
import { UseAppDispatch, UseAppSelector } from "../hooks";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header/Header";
import CharacterRow from "../components/CharacterRow/CharacterRow";
import Loader from "../components/Loader/Loader";
import { ICharacter } from "../redux/characters/charactersTypes";
import { styles } from "../index.styles";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const data = UseAppSelector((state) => state?.characters?.charactersData);
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());

    if (query.trim()) {
      dispatch(setSearch(query));
    }
  }, []);

  if (data) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.table}>
          <TouchableOpacity style={styles.input}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              style={styles.inputText}
              placeholder="Search"
              placeholderTextColor={"grey"}
              value={query}
              onChangeText={(value) => setQuery(value)}
            />
          </TouchableOpacity>

          <View style={styles.row}>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="heart" size={16} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.title}>
              <View style={[styles.ceil, styles.headCeil, styles.name]}>
                <Text style={styles.text}>Name</Text>
              </View>
              <View style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Birth Year</Text>
              </View>
              <View style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Gender</Text>
              </View>
              <View style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Home World</Text>
              </View>
              <View style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Species</Text>
              </View>
            </TouchableOpacity>
          </View>
          {data.map((el: ICharacter) => {
            return (
              <CharacterRow
                key={el.name}
                data={el}
                onPress={() => navigation.navigate("CharacterInfo", el)}
              />
            );
          })}
        </View>
      </View>
    );
  } else {
    return <Loader />;
  }
};

export default HomeScreen;
