import React, { useState } from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import getStyles from "./styles";
import getGlobalStyles from "../../utils/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../components/Icons";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";
import Menu from "../../components/Menu";
import MusicCard from "../../components/MusicCard";
import Player from "../../components/Player";

const recommendedSongs = [
  {
    thumbnail: require("../../assets/posters/MonstersGoBump.png"),
    title: "Monsters Go Bump",
    artist: "Imagine Dragons",
  },
  {
    thumbnail: require("../../assets/posters/MomentApart.png"),
    title: "Moment Apart",
    artist: "Odesza",
  },
];

const myPlaylists = [
  {
    thumbnail: require("../../assets/posters/ImagineDragons(Believer).png"),
    title: "Believer",
    artist: "Imagine Dragons",
  },
  {
    thumbnail: require("../../assets/posters/Shortwave.png"),
    title: "Short wave",
    artist: "Ryan Grigdry",
  },
];

const RecommendedScreen = () => {
  // styling vars
  const colorScheme = useColorScheme();
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  // states
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      {/* top navbar */}
      <View style={[globalStyles.navBar, globalStyles.container]}>
        <TouchableOpacity onPress={() => toggleMenu()} style={styles.hamburger}>
          <Icon
            name={menuActive ? "hamburgerActive" : "hamburger"}
            color={colorScheme === "light" ? colors.black : colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={menuActive && styles.toggleSearchDisplay}>
          <Icon
            name="magnifier"
            color={colorScheme === "light" ? colors.black : colors.white}
          />
        </TouchableOpacity>
      </View>
      {menuActive && <Menu toggleMenu={() => toggleMenu()} />}
      <ScrollView
        style={globalStyles.screenWrapper}
        scrollEnabled={menuActive ? false : true}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor="black" hidden={false} />
        <SafeAreaView>
          <View style={globalStyles.pageContentContainer}>
            <Text style={[globalStyles.headingText, globalStyles.container]}>
              Recommended for you
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recommendedSongsContainer}
            >
              {recommendedSongs.map((song, index) => {
                return (
                  <MusicCard
                    cardSpacingBottom={false}
                    key={index}
                    imageWidthHeight={190}
                    cardSpacing={index === recommendedSongs.length - 1 ? 0 : 14}
                    songDetailTopSpace={16}
                    songDetail={song}
                    artistFontSize={10}
                    songTitleFontSize={16}
                  />
                );
              })}
            </ScrollView>

            <Text style={[globalStyles.headingText, globalStyles.container]}>
              My Playlist
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[styles.recommendedSongsContainer]}
            >
              {myPlaylists.map((song, index) => {
                return (
                  <MusicCard
                    cardSpacingBottom={false}
                    key={index}
                    imageWidthHeight={190}
                    cardSpacing={index === recommendedSongs.length - 1 ? 0 : 14}
                    songDetailTopSpace={16}
                    songDetail={song}
                    artistFontSize={10}
                    songTitleFontSize={16}
                  />
                );
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Player />
    </>
  );
};

export default RecommendedScreen;
