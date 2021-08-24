import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, } from 'react-native'
//Redux/Actions functions import
import { } from "../../store/Action/action";
import { connect } from 'react-redux';
//icons import
import Entypo from 'react-native-vector-icons/Entypo';

class Faqs extends Component {
    constructor() {
        super()
        this.state = {
        }
    }


    registeNow() {
    }

    render() {
        return (
            <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }} style={styles.header1stChild}>
                        <Entypo name="menu" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 40 }} />
                    </TouchableOpacity>
                    <View style={styles.header2ndChild}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>About Us</Text>
                    </View>
                    <View style={styles.header1stChild}>
                    </View>
                </View>

                {/* Body */}
                <View style={{ flex: 8, width: "100%", }}>
                    <View style={{ marginHorizontal: "5%", marginTop: 20 }}>
                        <Text style={{ color: "#D81278", fontSize: 28, fontWeight: "bold" }}>About Us</Text>
                    </View>

                    <View style={{ marginHorizontal: "5%", marginTop: 20}}>
                        <Text style={{ color: "grey", fontWeight: "bold" }}>Funverks is an organizational skills & strategy development consulting firm, with offices in Karachi – Pakistan, Dubai – UAE & Colombo – Sri Lanka.{"\n"}{"\n"}

                        The name Funverks, describes our business philosophy & methodology of enriching value to our clients. While organizations may know what they have to do, we augment the way their objectives are accomplished in the ‘Idea Economy’.{"\n"}{"\n"}

                        Funverks thrives in challenging assumptions that hinder organizational aspirations, by creating innovative solutions that yield maximum impact, scalability & benefit to a wider base of stakeholders.{"\n"}{"\n"}

Funverks is part of the Funverks Global Company Pvt Ltd., which owns & has interests in diverse set of industries such as business consulting, publishing, media, travel & hospitality, social sector consulting, incubation centers & technology</Text>
                    </View>

                </View>
            </ImageBackground >
        )
    }
}


let mapStateToProps = state => {
    return {
        bseUrl: state.root.bseUrl,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Faqs);


const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    contentContainer: {
        paddingBottom: 70,
    },
    header: {
        flex: 0.8,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#093C57"
    },
    header1stChild: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow"
    },
    header2ndChild: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "grey"
    },
})
