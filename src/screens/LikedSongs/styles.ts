import { StyleSheet } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";

const styles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    likedSongsContainer: {
      marginTop: 24,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  });
};

export default styles;
