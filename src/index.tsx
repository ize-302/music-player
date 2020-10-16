import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecommendedScreen from "./screens/Recommended";
import LikedSongsScreen from "./screens/LikedSongs";
import NowPlayingScreen from "./screens/NowPlaying";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer fallback={<View />}>
      <Stack.Navigator initialRouteName={"RecommendedScreen"} headerMode="none">
        <Stack.Screen name="RecommendedScreen" component={RecommendedScreen} />
        <Stack.Screen name="LikedSongsScreen" component={LikedSongsScreen} />
        <Stack.Screen name="NowPlayingScreen" component={NowPlayingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
