import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CharacterInfo from "../screens/CharacterInfo/CharacterInfo";

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          options={{ headerShown: false, title: "Star Wars Characters" }}
          name="Home"
          component={Home}
        />
        <MainStack.Screen
          options={{ headerShown: false, title: "Character Info" }}
          name="CharacterInfo"
          component={CharacterInfo}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
