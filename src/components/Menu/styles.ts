import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";

let ScreenHeight = Dimensions.get("window").height;

const styles = () => {
  const colorScheme = useColorScheme();
  return StyleSheet.create({
    menuUnderlay: {
      backgroundColor: "rgba(0,0,0,.7)",
      width: "35%",
    },

    wrapper: {
      position: "absolute",
      zIndex: 1,
      top: 0,
      width: "100%",
      flex: 1,
      flexDirection: "row",
      height: ScreenHeight + "100%",
    },

    menu: {
      paddingTop: Platform.OS === "ios" ? 80 : 60,
      paddingLeft: 32,
      flexDirection: "column",
      position: "relative",
      backgroundColor: colorScheme === "dark" ? colors.black : colors.white,
      width: "65%",
    },

    menuItems: {
      marginTop: 50,
    },

    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 32,
    },

    menuItemLabel: {
      color: colorScheme === "dark" ? colors.white : colors.black,
      marginLeft: 33,
      fontSize: 20,
    },
  });
};

export default styles;
