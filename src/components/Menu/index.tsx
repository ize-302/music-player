import React from "react";
import { View, Text } from "react-native";
import Icon from "../Icons";
import getStyles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const menuItems = [
  {
    name: "Profile",
    icon: "profile",
  },
  {
    name: "Liked Songs",
    icon: "heart",
  },
  {
    name: "Language",
    icon: "globe",
  },
  {
    name: "Contact us",
    icon: "comment",
  },
  {
    name: "FAQs",
    icon: "bulb",
  },
  {
    name: "Settings",
    icon: "settings",
  },
];

type Props = {
  toggleMenu: () => void;
};

const Menu = ({ toggleMenu }: Props) => {
  const styles = getStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.menu]}>
        <View style={styles.menuItems}>
          {menuItems.map((menuItem, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LikedSongsScreen");
                  toggleMenu();
                }}
                key={index}
                style={styles.menuItem}
              >
                <Icon name={menuItem.icon} />
                <Text style={styles.menuItemLabel}>{menuItem.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={[styles.menuUnderlay]}></View>
    </View>
  );
};

export default Menu;
