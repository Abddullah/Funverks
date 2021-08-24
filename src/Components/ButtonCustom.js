
import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const CustomButton = ({ ...props }) => {
    return (
        <TouchableOpacity
            onPress={() => { props.func() }}
            style={{
                marginTop: props.topMargin,
                height: 45,
                width: "70%",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#093C57",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.46,
                shadowRadius: 11.14,
                elevation: 6,
            }}>
            {
                !props.isLoader ? <Text style={{ color: "#ffffff", fontWeight: "bold" }}>{props.text}</Text> : <ActivityIndicator color="#ffffff" />
            }
        </TouchableOpacity>
    );
};
export default CustomButton;
