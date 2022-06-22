import { View, Text, Image } from "react-native";
import React from "react";
import { CircleButton, RectButton, SubInfo, FocusStatusbar } from "../Home";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 373,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <CircleButton
        imageURL={assets.left}
        handlepress={() => navigation.goBack()}
        left={20}
        top={10}
      />
      <CircleButton
        imageURL={assets.heart}
        handlepress={() => navigation.goBack()}
        right={15}
        top={10}
      />
    </View>
  );
};

export default DetailsHeader;
