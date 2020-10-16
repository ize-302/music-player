import { StyleSheet } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";

const styles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    imageContainer: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 3,
    },

    songDetail: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
      color: colorScheme === "dark" ? colors.white : colors.black,
    },

    artist: {
      color: colorScheme === "dark" ? "rgba(165, 192, 255, 0.7)" : "#8996B8",
      marginTop: 5,
    },
  });
};

export default styles;
