import { View, Text, Image } from "react-native";
import React from "react";
import { ETHPrice } from "../SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsBid = ({ bid }) => {
  console.log(bid.item);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
      }}
    >
      <Image
        source={bid.item.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by :{bid.item.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Date :{bid.item.date}
        </Text>
      </View>
      <ETHPrice price={bid.item.price} />
    </View>
  );
};

export default DetailsBid;
