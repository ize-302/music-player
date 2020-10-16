import { StyleSheet } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";

const styles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    playerWrapper: {
      position: "relative",
      backgroundColor: colorScheme === "dark" ? colors.black : colors.white,
      bottom: 0,
      width: "100%",
      height: 90,
    },
    content: {
      flexDirection: "row",
      justifyContent: "space-between",
      position: "relative",
      top: -40,
    },

    song: { width: "40%", paddingVertical: 10 },

    songTitle: {
      color: colorScheme === "dark" ? colors.white : colors.black,
      fontSize: 18,
    },

    artist: {
      color: colorScheme === "dark" ? "rgba(165, 192, 255, 0.7)" : "#8996B8",
      fontSize: 10,
      marginTop: 5,
    },

    controls: {
      width: "35%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 25,
      alignItems: "center",
    },
  });
};

export default styles;
