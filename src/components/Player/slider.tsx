import * as React from "react";
import { View } from "react-native";
import { colors } from "../../utils/styles";
import { useColorScheme } from "react-native-appearance";
import { Slider } from "react-native-elements";

const SliderComponent = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ position: "relative", zIndex: 1, width: "100%", top: -20 }}>
      <Slider
        value={0.1}
        minimumTrackTintColor={
          colorScheme === "dark" ? colors.white : colors.black
        }
        maximumTrackTintColor={
          colorScheme === "dark" ? "rgba(255, 255, 255, 0.31)" : "#CACACA"
        }
        thumbStyle={{
          height: 16,
          width: 16,
          backgroundColor: colorScheme === "dark" ? colors.white : colors.black,
        }}
      />
    </View>
  );
};

export default SliderComponent;
