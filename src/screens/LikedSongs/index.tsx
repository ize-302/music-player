import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import getStyles from "./styles";
import getGlobalStyles from "../../utils/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../components/Icons";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";
import MusicCard from "../../components/MusicCard";
import Player from "../../components/Player";
import { ScreenProps } from "react-native-screens";

const likedSongs = [
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
  {
    thumbnail: require("../../assets/posters/DreamOn.png"),
    title: "Dream on",
    artist: "Roger Terry",
  },
  {
    thumbnail: require("../../assets/posters/ImagineDragons(Origins).png"),
    title: "Origins",
    artist: "Imagine Dragons",
  },
  {
    thumbnail: require("../../assets/posters/NewArtists.png"),
    title: "Tie Me Down",
    artist: "Gryffin",
  },
  {
    thumbnail: require("../../assets/posters/vaporwave.png"),
    title: "Chaff & Dust",
    artist: "HYONNA",
  },
];

const LikedSongsScreen = ({ navigation }: ScreenProp) => {
  // styling vars
  const colorScheme = useColorScheme();
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <>
      {/* top navbar */}
      <View style={[globalStyles.navBar, globalStyles.container]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="back"
            color={colorScheme === "light" ? colors.black : colors.white}
          />
        </TouchableOpacity>
        <Icon
          name="filter"
          color={colorScheme === "light" ? colors.black : colors.white}
        />
      </View>
      <ScrollView
        style={globalStyles.screenWrapper}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar backgroundColor="black" hidden={false} />
        <SafeAreaView>
          <View
            style={[globalStyles.pageContentContainer, globalStyles.container]}
          >
            <Text style={[globalStyles.headingText]}>Liked Songs</Text>

            <View style={styles.likedSongsContainer}>
              {likedSongs.map((song, index) => {
                return (
                  <MusicCard
                    key={index}
                    imageWidthHeight={160}
                    cardSpacing={0}
                    cardSpacingBottom={24}
                    songDetailTopSpace={16}
                    songDetail={song}
                    artistFontSize={10}
                    songTitleFontSize={16}
                  />
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Player />
    </>
  );
};

export default LikedSongsScreen;
