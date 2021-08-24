
import React from "react";
import { Text, ImageBackground, View } from 'react-native';

const Round = ({ ...props }) => {
    return (
        <>
            <View style={{
                marginTop: 10,
                height: 200,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ImageBackground source={require('../../src/Assets/round.png')} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 40, }}>
                    <Text style={{ color: "#093C57", fontSize: 70, fontWeight: "bold" }}>{props.points}</Text>
                    <Text style={{ color: "#093C57", textAlign: "right", marginLeft: "15%", top: -15, fontSize: 18, fontWeight: "bold" }}>points</Text>
                </ImageBackground >
            </View>

            <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#093C57", fontSize: 40, }}>{props.name}</Text>
            </View>
        </>
    );
};
export default Round;
