import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native'
//componets
import AppLogo from '../../Components/AppLogo'
import Inputs from '../../Components/inputs'
import CustomButton from '../../Components/ButtonCustom'

//icons import
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ForgetPassword extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    setText(text, fieldName) {
        console.log(text, fieldName)
    }

    signin() {
        alert("Password has been reset")
        // this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>
                <ScrollView style={{
                    width: "100%",
                }}>
                    <View style={styles.container}>
                        <View style={{ marginTop: "20%" }}>
                            <AppLogo />
                        </View>


                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: "#8A8889" }}>Forget Password</Text>
                        </View>

                        <View style={{ marginTop: 10, }}>
                            <Text style={{ color: "#8A8889", textAlign: "center" }}>We will need just your number to send you{"\n"} password reset instruction</Text>
                        </View>

                        <View style={{ marginTop: "10%" }}>
                            <View style={styles.input}>
                                <View style={styles.inputIcon}>
                                    <FontAwesome name="phone" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"PhoneNumber"} val={this.state.PhoneNumber} type={"numeric"} placeHolder={"+92 Phone number"} secureText={false} />
                                </View>
                            </View>
                        </View>
                        <CustomButton text={"Reset Password"} topMargin={60} func={() => { this.signin() }} />
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login") }} style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", marginTop: 30, }}>
                            <Text style={{ color: "#8A8889" }}>Back to </Text>
                            <Text style={{ color: "#0B4658", textDecorationLine: "underline" }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground >
        )
    }
}

export default ForgetPassword

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    headingText: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 28
    },
    regularText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        color: "grey"
    },
    input: {
        flexDirection: "row",
        width: "85%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputIcon: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    inputFlex: {
        flex: 8,
        justifyContent: "center",
    },
    forgetPassword: {
        marginTop: 15,
        flexDirection: "row",
        width: "78%",
        justifyContent: "flex-end",
    },
})
