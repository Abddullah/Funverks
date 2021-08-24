
import React from "react";
import { Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GoldButton = ({ ...props }) => {
    return (
        <TouchableOpacity
            // onPress={() => { props.func() }}
            style={{
                marginTop: 10,
                height: 60,
                marginHorizontal: "5%",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: "#093C57",
                shadowColor: "#093C57",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.9,
                shadowRadius: 0,
                elevation: 5,
            }}>

            <LinearGradient
                start={{ x: 0.1, y: 0.25 }} end={{ x: 0.9, y: 0.25 }}
                locations={[0, 0.5, 3]}
                colors={props.colors}
                style={styles.linearGradient}
            >
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </LinearGradient>
            {/* <ImageBackground source={require('../../src/Assets/goldButton.png')} style={{ height: 60, width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 40, }}>
                <Text style={{ color: "#093C57", fontSize: 34, fontWeight: "bold" }}>{props.text}</Text>
            </ImageBackground > */}
        </TouchableOpacity>
    );
};
export default GoldButton;
// Later on in your styles..
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#093C57",
        borderBottomWidth: 4,
        borderLeftColor: "#093C57",
        borderLeftWidth: 4,
        borderRadius: 10,
    },
    buttonText: {
        color: "#093C57", fontSize: 34, fontWeight: "bold"
    },
});