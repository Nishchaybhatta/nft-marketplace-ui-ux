import { View, Text } from "react-native";
import { useState } from "react";
import { ETHPrice, NFTTitle } from "../SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readmore, setReadmore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titlesize={SIZES.extraLarge}
          subtitlesize={SIZES.font}
        />
        <ETHPrice price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readmore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={()=>{
                if(!readmore){
                  setText(data.description)
                  setReadmore(true)
                }else{
                  setText(data.description.slice(0,100))
                  setReadmore(false)
                }
              }}
            >
              {readmore ? " Show Less" : "Readmore"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
