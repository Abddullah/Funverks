import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, } from 'react-native'
//Redux/Actions functions import
import { } from "../../store/Action/action";
import { connect } from 'react-redux';
//icons import
import Entypo from 'react-native-vector-icons/Entypo';

class Logout extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    UNSAFE_componentWillMount() {
        this.props.func()
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
                        <Text style={{ color: "white", fontWeight: "bold" }}>Main Screen</Text>
                    </View>
                    <View style={styles.header1stChild}>
                    </View>
                </View>
                {/* Body */}
                <View style={{ flex: 8, width: "100%", justifyContent: "center", alignItems: "center" }}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Logout);


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
