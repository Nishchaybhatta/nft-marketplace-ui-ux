import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";

const FocusStatusbar = (props) => {
  const isfocused = useIsFocused();



  return isfocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusStatusbar;
