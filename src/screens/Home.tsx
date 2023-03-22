import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { getCharacters } from "../redux/characters/charactersActions";
import { UseAppDispatch, UseAppSelector } from "../hooks";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header/Header";
import CharacterRow from "../components/CharacterRow/CharacterRow";
import Loader from "../components/Loader/Loader";
import { ICharacter } from "../redux/characters/charactersTypes";
import { styles } from "../index.styles";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const data = UseAppSelector((state) => state?.characters?.charactersData);
  const page = UseAppSelector((state) => state?.characters?.page);
  const dispatch = UseAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    if (data?.length) {
      const filtered = data.filter((character) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
      console.log("page===>>>", page);
    }
  }, [query, data, page]);

  if (!data?.length) {
    return <Loader />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.table}>
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
            <View style={styles.icon}>
              <AntDesign name="heart" size={16} color="black" />
            </View>
            <View style={styles.title}>
              <TouchableOpacity
                style={[styles.ceil, styles.headCeil, styles.name]}
              >
                <Text style={styles.text}>Name</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Birth Year</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Gender</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Home World</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.ceil, styles.headCeil]}>
                <Text style={styles.text}>Species</Text>
              </TouchableOpacity>
            </View>
          </View>
          {!filteredData.length
            ? null
            : filteredData.map((el: ICharacter) => {
                return (
                  <CharacterRow
                    key={el.name}
                    data={el}
                    onPress={() => navigation.navigate("CharacterInfo", el)}
                  />
                );
              })}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity disabled={page.current - 1 <= 0}>
              <AntDesign name="arrowleft" size={16} color="black" />
            </TouchableOpacity>
            <Text
              style={styles.pageLabel}
            >{`Page ${page.current} of ${page.total}`}</Text>
            <TouchableOpacity disabled={page.current >= page.total}>
              <AntDesign name="arrowright" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default HomeScreen;
