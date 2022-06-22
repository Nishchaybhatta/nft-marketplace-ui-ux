import { View, FlatList, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusStatusbar } from "../components/Home";
const Home = () => {
  const [nftData, setnftData] = useState(NFTData)


  const handlesearch =(value)=>{
    if(!value.length)return setnftData(NFTData)

    const Filtereddata = NFTData.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()))
    if(Filtereddata.length){
      setnftData(Filtereddata)
    }else{
      setnftData(NFTData)
    }
  }




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusbar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handlesearch}/>}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{height:300,backgroundColor:COLORS.primary}}/>
          <View style={{flex:1,backgroundColor:COLORS.white}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
