import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, StatusBar } from "react-native";
import Icon from "../../components/Icons";
import getStyles from "./styles";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import getGlobalStyles from "../../utils/styles";
import SliderComponent from "../../components/Player/slider";

const NowPlayingScreen = () => {
  const colorScheme = useColorScheme();
  const styles = getStyles();
  const globalStyles = getGlobalStyles();
  const navigation = useNavigation();

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
        <Text style={styles.title}>Playing Now</Text>
        <Icon name="back" color="transparent" />
      </View>
      <View style={globalStyles.screenWrapper}>
        <StatusBar backgroundColor="black" hidden={false} />
        <SafeAreaView>
          <View
            style={[
              globalStyles.pageContentContainer,
              globalStyles.container,
              styles.wrapper,
            ]}
          >
            <View style={styles.musicDetail}>
              <View>
                <Image
                  resizeMode="cover"
                  style={{ width: 263, height: 263, borderRadius: 11 }}
                  source={require("../../assets/posters/Shortwave.png")}
                />
              </View>
              <View style={styles.songtitle_artist}>
                <View>
                  <Icon name="magnifier" color="transparent" />
                </View>
                <View>
                  <Text style={styles.songTitle}>Shortwave</Text>
                  <Text style={styles.artist}>RYAN GRIGDRY</Text>
                </View>
                <Icon name="heart" color="" />
              </View>
            </View>
            <View style={styles.controlsSection}>
              <View style={styles.firstRow}>
                <Icon
                  name="volumne"
                  color={colorScheme === "light" ? colors.black : colors.white}
                />
                <View style={styles.repeat_shuffle}>
                  <Icon
                    name="repeat"
                    color={
                      colorScheme === "light" ? colors.black : colors.white
                    }
                  />
                  <Icon
                    name="shuffle"
                    color={
                      colorScheme === "light" ? colors.black : colors.white
                    }
                  />
                </View>
              </View>
              <View>
                <View style={styles.timer}>
                  <Text style={styles.timerText}>00:00</Text>
                  <Text style={styles.timerText}>3:33</Text>
                </View>
                <SliderComponent />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  width: 200,
                }}
              >
                <Icon
                  name="rewindLarge"
                  color={colorScheme === "light" ? colors.black : colors.white}
                />
                <Icon
                  name="pauseLarge"
                  color={colorScheme === "light" ? colors.black : colors.white}
                />
                <Icon
                  name="forwardLarge"
                  color={colorScheme === "light" ? colors.black : colors.white}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default NowPlayingScreen;
