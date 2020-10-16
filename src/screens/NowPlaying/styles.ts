import { StyleSheet } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";

const styles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    title: {
      fontWeight: "500",
      fontSize: 20,
      color: colorScheme === "dark" ? colors.white : colors.black,
    },

    wrapper: {
      height: "93%",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    musicDetail: {
      height: "50%",
      flexDirection: "column",
      alignItems: "center",
    },

    songtitle_artist: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },

    songTitle: {
      marginTop: 25,
      color: colorScheme === "dark" ? colors.white : colors.black,
      fontSize: 24,
    },

    artist: {
      color: colorScheme === "dark" ? "rgba(165, 192, 255, 0.7)" : "#8996B8",
      fontSize: 16,
      marginTop: 5,
    },

    controlsSection: {
      height: "40%",
      flexDirection: "column",
      justifyContent: "space-between",
    },

    firstRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    timer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 26,
    },

    timerText: {
      color: colorScheme === "dark" ? "rgba(165,192,255,0.7)" : "#0E172D",
    },

    repeat_shuffle: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 50,
    },
  });
};

export default styles;
