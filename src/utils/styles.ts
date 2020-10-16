import { StyleSheet, Platform } from "react-native";
import { useColorScheme } from "react-native-appearance";

export const colors = {
  black: "#091227",
  white: "#EAF0FF",
};

const globalStyles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    screenWrapper: {
      flex: 1,
      backgroundColor: colorScheme === "dark" ? colors.black : colors.white,
    },

    container: {
      paddingHorizontal: 32,
    },

    navBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      width: "100%",
      zIndex: 2,
      backgroundColor: colorScheme === "dark" ? colors.black : colors.white,
      paddingBottom: Platform.OS === "ios" ? 10 : 20,
      paddingTop: Platform.OS === "ios" ? 70 : 20,
    },

    headingText: {
      color: colorScheme === "dark" ? colors.white : colors.black,
      fontSize: 24,
      fontWeight: "700",
    },

    pageContentContainer: {
      marginTop: Platform.OS === "ios" ? 30 : 30,
    },
  });
};

export default globalStyles;
