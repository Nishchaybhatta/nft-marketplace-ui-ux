import { View, Text, StatusBar, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusStatusbar,
} from "../components/Home";
import { DetailsBid, DetailsDesc } from "../components/Details";
import DetailsHeader from "../components/Details/DetailsHeader";

const Details = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView>
      <FocusStatusbar
        barstyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          position: "absolute",
          marginTop: 30,
          width: "100%",
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={(item) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo/>
            <View style={{
              padding:SIZES.font
            }}>
              <DetailsDesc data={data}/>
              {
                data.bids.length>0 && (
                  <Text style={{
                    fontSize:SIZES.font,
                    fontFamily:FONTS.semiBold,
                    color:COLORS.primary
                  }}>
                    Current Bids
                  </Text>
                )
              }

            </View>
          </>
        )}
        style={{
          marginTop: 90,
        }}
      />
    </SafeAreaView>
  );
};

export default Details;
