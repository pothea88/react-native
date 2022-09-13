import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity  } from "react-native";
import PreviewLayout from "./PreviewLayout";

const FlexDirection = () => {
    const[flextDirection, setFlexDirection] = useState("column");
    return (
        <PreviewLayout
            label="flexDirection"
            value={[]}
        >

        </PreviewLayout>
    )
}

export default FlexDirection;