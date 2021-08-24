import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native'
//Redux/Actions functions import
import { getTrainings, registerTraining, userProfile } from "../../store/Action/action";
import { connect } from 'react-redux';
//componets
import Cards from '../../Components/cards'
//icons import
import Entypo from 'react-native-vector-icons/Entypo';

class MainScreen extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    UNSAFE_componentWillMount() {
        this.props.getTrainings(this.props.userToken)
        this.props.userProfile(this.props.userToken)
    }

    registeNow(key, index) {
        this.setState({ loaderIndex: index })
        this.props.registerTraining(key.id, this.props.userToken)
    }

    render() {
        const { loaderIndex } = this.state
        const { trainings, isError, isLoader } = this.props

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
                <View style={{ flex: 8, width: "100%", }}>
                    <ScrollView contentContainerStyle={styles.contentContainer} style={{ width: "100%", }}>

                        {
                            (trainings) ?
                                trainings.map((key, index) => {
                                    // console.log(key, "key")
                                    return (
                                        <Cards key={index} index={index} loaderIndex={loaderIndex} topMargin={20} func={() => { this.registeNow(key, index) }} trainings={key} isLoader={isLoader} />
                                    )
                                })
                                : null
                        }

                    </ScrollView>
                </View>
            </ImageBackground >
        )
    }
}


let mapStateToProps = state => {
    return {
        userToken: state.root.userToken,
        trainings: state.root.trainings,
        isLoader: state.root.isLoader,
        isError: state.root.isError,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        getTrainings: (token) => {
            dispatch(getTrainings(token));
        },
        registerTraining: (id, token) => {
            dispatch(registerTraining(id, token));
        },
        userProfile: (token) => {
            dispatch(userProfile(token));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);


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
