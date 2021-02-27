import React from "react";
import { Text } from "react-native";
import { VisionCamera } from "react-native-vision";
export default () => (
  <VisionCamera style={{ flex: 1 }} classifier="MobileNet">
    {({ label, confidence }) => (
      <Text
        style={{
          width: "75%",
          fontSize: 50,
          position: "absolute",
          right: 50,
          bottom: 100
        }}
      >
        {label + " :" + (confidence * 100).toFixed(0) + "%"}
      </Text>
    )}
  </VisionCamera>
);