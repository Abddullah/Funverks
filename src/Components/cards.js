
import React from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

const Cards = ({ ...props }) => {
    // console.log(props.trainings, "props.trainings")
    return (
        <View
            style={{
                flex: 1,
                marginTop: props.topMargin,
                height: 120,
                width: "90%",
                marginHorizontal: "5%",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#ffffff",
                padding: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>

            <View style={{ flex: 8, }}>
                <View style={{ flex: 0.5, }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{props.trainings.title}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <Text style={{ fontSize: 12, color: "grey", }}>{props.trainings.description}</Text>
                    {/* <Text style={{ fontSize: 12, color: "grey" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}
                </View>
                <View style={{ flex: 0.5, justifyContent: "center", }}>
                    <Text style={{ fontSize: 12, color: "#000000" }}>{props.trainings.training_date + " " + props.trainings.training_time}</Text>
                    {/* <Text style={{ fontSize: 12, color: "#000000" }}>28-june-2020   09:58 pm</Text> */}
                </View>
            </View>


            {
                !props.buttonHide && <TouchableOpacity onPress={() => { props.func() }}
                    style={{ flex: 4, marginLeft: 5, height: 100, borderRadius: 10, justifyContent: "center", alignItems: "center", backgroundColor: "#093C57" }}>
                    {
                        props.isLoader && props.index === props.loaderIndex ? <ActivityIndicator color="#ffffff" /> : <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Register Now</Text>
                    }
                </TouchableOpacity>
            }

        </View>
    );
};
export default Cards;
