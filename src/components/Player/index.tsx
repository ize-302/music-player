import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "../Icons";
import getStyles from "./styles";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";
import Slider from "./slider";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Player = (props: any) => {
  const colorScheme = useColorScheme();
  const styles = getStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.playerWrapper}>
      <Slider />
      <TouchableOpacity
        onPress={() => navigation.navigate("NowPlayingScreen")}
        style={[styles.content]}
      >
        <Image
          style={{ width: 72, height: 72 }}
          resizeMode="cover"
          source={require("../../assets/posters/vaporwave.png")}
        />

        <View style={styles.song}>
          <Text style={styles.songTitle}>Chaff & Dust</Text>
          <Text style={styles.artist}>HYONNA</Text>
        </View>
        <View style={styles.controls}>
          <Icon
            name="rewind"
            color={colorScheme === "light" ? colors.black : colors.white}
          />
          <Icon
            name="pause"
            color={colorScheme === "light" ? colors.black : colors.white}
          />
          <Icon
            name="forward"
            color={colorScheme === "light" ? colors.black : colors.white}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Player;
