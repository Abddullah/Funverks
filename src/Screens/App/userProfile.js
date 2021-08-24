import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native'
//Redux/Actions functions import
import { userProfile } from "../../store/Action/action";
import { connect } from 'react-redux';
//componets
import GoldButton from '../../Components/GoldButtom'
import Round from '../../Components/round'
import CustomButton from '../../Components/ButtonCustom'
import SocialIcons from '../../Components/SocialIcons'
//icons import
import Entypo from 'react-native-vector-icons/Entypo';

class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            userName: undefined,
            packName: undefined,
            points: undefined,
            buttonColors: ['#ffffff', '#ffffff', '#ffffff',],
        }
    }

    UNSAFE_componentWillMount() {
        this.props.userProfile(this.props.userToken)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let profile = nextProps.userprofile
        // console.log(profile, "USERPROFILE")
        let packName = undefined
        let points = undefined
        let buttonColors = undefined

        if (profile) {
            if (profile.number_of_workshop <= 10) {
                packName = "SILVER"
                buttonColors = ['#7C7C7C', '#D5D5D5', '#7C7C7C',]
            }
            else if (profile.number_of_workshop >= 10 && profile.number_of_workshop <= 25) {
                packName = "GOLD"
                buttonColors = ['#9C5601', '#F3CC0F', '#9C5601',]
            }
            else if (profile.number_of_workshop >= 26) {
                packName = "PLATINUM"
                buttonColors = ['#A99A7D', '#E4E0D6', '#A99A7D',]
            }
          
            points = profile.number_of_workshop * 1000
            this.setState({
                userName: profile.name,
                packName: packName,
                points: points,
                buttonColors: buttonColors
            })
        }
    }

    registeNow() {
        // alert("Under Development")
        this.props.navigation.navigate("MainScreen")
    }

    render() {
        let { userName, packName, points, buttonColors } = this.state
        return (
            <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }} style={styles.header1stChild}>
                        <Entypo name="menu" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 40 }} />
                    </TouchableOpacity>
                    <View style={styles.header2ndChild}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Profile</Text>
                    </View>
                    <View style={styles.header1stChild}>
                    </View>
                </View>

                {/* Body */}
                <View style={styles.body}>
                    <ScrollView contentContainerStyle={styles.contentContainer} style={{ width: "100%", }}>
                        <GoldButton text={packName} colors={buttonColors} />
                        <Round name={userName} points={points} />
                        <View style={{ width: "130%", marginTop: 40, marginHorizontal: "5%" }}>
                            <CustomButton text={"UPCOMMING SEASON"} topMargin={0} func={() => { this.registeNow() }} />
                        </View>
                        <View style={styles.socialIcons}>
                            <View style={styles.socialIconsChild}>
                                <SocialIcons Path={require('../../Assets/socialIcons/yt.png')} />
                                <SocialIcons Path={require('../../Assets/socialIcons/sc.png')} />
                                <SocialIcons Path={require('../../Assets/socialIcons/ig.png')} />
                            </View>
                            <View style={styles.socialIconsChild}>
                                <SocialIcons Path={require('../../Assets/socialIcons/li.png')} />
                                <SocialIcons Path={require('../../Assets/socialIcons/tt.png')} />
                                <SocialIcons Path={require('../../Assets/socialIcons/fb.png')} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}

let mapStateToProps = state => {
    return {
        userToken: state.root.userToken,
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        userprofile: state.root.userprofile,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        userProfile: (token) => {
            dispatch(userProfile(token));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


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
    body: {
        flex: 8,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    socialIcons: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
    },
    socialIconsChild: {
        flex: 1,
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row",
        margin: "3%",
    },
})
