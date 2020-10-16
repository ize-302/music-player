import React from "react";
import { View, Text, Image } from "react-native";
import getStyles from "./styles";
import { useColorScheme } from "react-native-appearance";

const MusicCard = ({
  imageWidthHeight,
  cardSpacing,
  songDetailTopSpace,
  songDetail,
  artistFontSize,
  songTitleFontSize,
  cardSpacingBottom,
}) => {
  // styling vars
  const styles = getStyles();

  return (
    <View
      style={{
        marginRight: cardSpacing,
        marginBottom: cardSpacingBottom,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={songDetail.thumbnail}
          resizeMode="cover"
          style={{
            height: imageWidthHeight,
            width: imageWidthHeight,
            borderRadius: 8,
          }}
        />
      </View>
      <View style={[styles.songDetail, { marginTop: songDetailTopSpace }]}>
        <Text style={[styles.title, { fontSize: songTitleFontSize }]}>
          {songDetail.title}
        </Text>
        <Text style={[styles.artist, { fontSize: artistFontSize }]}>
          {songDetail.artist.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default MusicCard;
