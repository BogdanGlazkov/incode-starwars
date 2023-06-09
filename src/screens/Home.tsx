import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import { setPage, changePage } from "../redux/characters/charactersActions";
import { UseAppDispatch, UseAppSelector } from "../hooks";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header/Header";
import CharacterRow from "../components/CharacterRow/CharacterRow";
import Loader from "../components/Loader/Loader";
import { ICharacter } from "../redux/characters/charactersTypes";
import { styles } from "../index.styles";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const data = UseAppSelector((state) => state?.characters?.charactersData);
  const page = UseAppSelector((state) => state?.characters?.page);
  const dispatch = UseAppDispatch();

  const onNextPage = () => {
    setIsBtnDisabled(true);
    dispatch(changePage(page.current + 1));
  };

  const onPrevPage = () => {
    setIsBtnDisabled(true);
    dispatch(changePage(page.current - 1));
  };

  useEffect(() => {
    dispatch(setPage(page?.current || 1));
  }, []);

  useEffect(() => {
    if (data?.length) {
      const filtered = data.filter((character: ICharacter) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
      setIsBtnDisabled(false);
    }
  }, [query, data]);

  if (!data?.length) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView
        style={{
          ...styles.container,
          paddingTop: Platform.OS === "ios" ? 40 : 30,
        }}
      >
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
            <TouchableOpacity
              onPress={onPrevPage}
              disabled={page.current - 1 <= 0 || isBtnDisabled}
            >
              <AntDesign name="arrowleft" size={16} color="black" />
            </TouchableOpacity>
            <Text
              style={styles.pageLabel}
            >{`Page ${page.current} of ${page.total}`}</Text>
            <TouchableOpacity
              onPress={onNextPage}
              disabled={page.current >= page.total || isBtnDisabled}
            >
              <AntDesign name="arrowright" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
