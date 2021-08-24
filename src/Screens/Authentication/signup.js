import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity } from 'react-native'
//Redux/Actions functions import
import { signup } from "../../store/Action/action";
import { connect } from 'react-redux';
//componets import
import AppLogo from '../../Components/AppLogo'
import Inputs from '../../Components/inputs'
import CustomButton from '../../Components/ButtonCustom'
//icons import
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            // UserName: "Abdullah",
            // DesignationName: "Frontend dev",
            // CompanyName: "Expertso",
            // Email: "abddullahshahtest@gmail.com",
            // PhoneNumber: "+923452153708",
            // NumberOfWorkShopAttentd: "5",
            // Password: "12345678",
            // C_Password: "12345678",
        }
    }

    setText(text, fieldName) {
        console.log(text, fieldName, "input_fields_signup_form")
        this.setState({ [`${fieldName}`]: text })
    }

    signup() {
        let { UserName, DesignationName, CompanyName, Email, PhoneNumber, NumberOfWorkShopAttentd, Password, C_Password } = this.state
        if (Password === C_Password) {
            if (Password && Password.length < 8) {
                this.setState({
                    errValidation: "Password should be 8 characters",
                    errShow: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            errShow: false
                        })
                    }, 3000)

                })
            }
            else {
                if (UserName && DesignationName && CompanyName && Email && NumberOfWorkShopAttentd && Password && C_Password) {
                    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (reg.test(Email) === false) {
                        // alert("Email is Not Correct")
                        this.setState({
                            errValidation: "Email is Not Correct",
                            errShow: true
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    errShow: false
                                })
                            }, 3000)
                        })
                    }
                    else {
                        // alert("Email is Correct")
                        let newUser = {
                            UserName,
                            DesignationName,
                            CompanyName,
                            Email,
                            // PhoneNumber,
                            NumberOfWorkShopAttentd,
                            Password,
                            C_Password
                        }
                        this.props.signup(newUser, this.props.navigation);
                    }

                }
                else {
                    this.setState({
                        errValidation: "All fields are required",
                        errShow: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                errShow: false
                            })
                        }, 3000)

                    })
                }
            }

        }
        else {
            this.setState({
                errValidation: "Password does not match",
                errShow: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        errShow: false
                    })
                }, 3000)
            })
        }
    }

    render() {
        let { errValidation, errShow } = this.state
        let { isError, isLoader } = this.props

        return (
            <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>
                <ScrollView contentContainerStyle={styles.contentContainer} style={{ width: "100%" }}>
                    <View style={styles.container}>
                        <View style={{ marginTop: "10%" }}>
                            <AppLogo />
                        </View>
                        <View style={{ marginTop: "10%" }}>
                            {/* UserName */}
                            <View style={styles.input}>
                                <View style={styles.inputIcon}>
                                    <FontAwesome name="user" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"UserName"} val={this.state.UserName} type={"default"} placeHolder={"First Name"} secureText={false} />
                                </View>
                            </View>
                            {/* DesignationName */}
                            <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <AntDesign name="idcard" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"DesignationName"} val={this.state.DesignationName} type={"default"} placeHolder={"Designation Name"} secureText={false} />
                                </View>
                            </View>
                            {/* CompanyName */}
                            <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <FontAwesome name="building" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"CompanyName"} val={this.state.CompanyName} type={"default"} placeHolder={"Company Name"} secureText={false} />
                                </View>
                            </View>
                            {/* Email */}
                            <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <MaterialCommunityIcons name="email-outline" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"Email"} val={this.state.Email} type={"default"} placeHolder={"Email"} secureText={false} />
                                </View>
                            </View>
                            {/* PhoneNumber */}
                            {/* <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <FontAwesome name="phone" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"PhoneNumber"} val={this.state.PhoneNumber} type={"numeric"} placeHolder={"+92 Phone number"} secureText={false} />
                                </View>
                            </View> */}
                            {/* NumberOfWorkShopAttentd */}
                            <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <FontAwesome name="user" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"NumberOfWorkShopAttentd"} val={this.state.NumberOfWorkShopAttentd} type={"numeric"} placeHolder={"No. of workshop attentd"} secureText={false} />
                                </View>
                            </View>
                            {/* Password */}
                            <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <Ionicons name="ios-key" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"Password"} val={this.state.Password} type={"Password"} placeHolder={"Password"} secureText={true} />
                                </View>
                            </View>
                            {/* Confirm Password */}
                            <View style={[styles.input, { marginTop: 5 }]}>
                                <View style={styles.inputIcon}>
                                    <Ionicons name="ios-key" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                                </View>
                                <View style={styles.inputFlex}>
                                    <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"C_Password"} val={this.state.C_Password} type={"Password"} placeHolder={"Confirm Password"} secureText={true} />
                                </View>
                            </View>
                        </View>
                        <CustomButton text={"Signup"} topMargin={50} func={() => { this.signup() }} isLoader={isLoader} />
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login") }} style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", marginTop: 30, }}>
                            <Text style={{ color: "#8A8889" }}>Back to </Text>
                            <Text style={{ color: "#0B4658", textDecorationLine: "underline" }}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ width: "80%" }}>
                            {/* validation error */}
                            {
                                errShow && <Text style={{ color: "red", marginTop: 15, textAlign: "center" }}>{errValidation}</Text>
                            }
                            {/* fetching error */}
                            {
                                isError && <Text style={{ color: "red", marginTop: 15, textAlign: "center" }}>{isError}</Text>
                            }
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground >
        )
    }
}

function mapStateToProp(state) {
    return ({
        isLoader: state.root.isLoader,
        isError: state.root.isError,
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        signup: (newUser, navigation) => {
            dispatch(signup(newUser, navigation));
        },
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(Signup);

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 70,
    },
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
