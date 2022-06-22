import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS,SIZES,FONTS,SHADOWS } from '../../constants'

export const CircleButton = ({imageURL,handlepress,...props}) => {
  return (
    <TouchableOpacity
    style={{
        width:40,
        height:40,
        backgroundColor:COLORS.white,
        position:"absolute",
        borderRadius:SIZES.extraLarge,
        alignItems:"center",
        justifyContent:"center",
        ...SHADOWS.light,
        ...props
    }}
    onPress={handlepress}
    >
      <Image source={imageURL} resizeMode="contain"
      style={{
        height:24,
        width:24,
      }}
      />
    </TouchableOpacity>
  )
}


export const RectButton = ({minWidth,fontSize,handlePress}) => {
    return (
        <TouchableOpacity
        style={{
            backgroundColor:COLORS.primary,
            borderRadius:SIZES.extraLarge,
            minWidth:minWidth,
            padding:SIZES.small
        }}
        onPress={handlePress}
        >
            <Text style={{
                fontFamily:FONTS.semiBold,
                fontSize:fontSize,
                color:COLORS.white,
                textAlign:'center'
            }}>Place a bid</Text>
          
        </TouchableOpacity>
    )
  }
  