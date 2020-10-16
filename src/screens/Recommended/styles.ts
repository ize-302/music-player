import { StyleSheet } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";

const styles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    recommendedSongsContainer: {
      paddingHorizontal: 32,
      marginTop: 20,
      marginBottom: 50,
    },
    toggleSearchDisplay: {
      display: "none",
    },
    hamburger: {
      height: 32,
      width: 32,
      flexDirection: "column",
      justifyContent: "center",
    },
  });
};

export default styles;
