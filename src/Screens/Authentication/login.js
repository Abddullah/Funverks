import React, { Component } from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native'
//Redux/Actions functions import
import { signin } from "../../store/Action/action";
import { connect } from 'react-redux';
//componets
import AppLogo from '../../Components/AppLogo'
import Inputs from '../../Components/inputs'
import CustomButton from '../../Components/ButtonCustom'
//icons import
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      Email: "admin@admin.com",
      Password: "password",
      // Email: "Abddullahshahtest1gmail.com",
      // Password: "123456",
    }
  }

  setText(text, fieldName) {
    console.log(text, fieldName, "input_fields_signin_form")
    this.setState({ [`${fieldName}`]: text })
  }

  signin() {
    let { Email, Password, } = this.state
    console.log(Email, Password, "DATA")
    if (Email && Password) {
      let user = { Email, Password, }
      this.props.signin(user, this.props)
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
    // this.props.func()
  }

  render() {
    let { errValidation, errShow } = this.state
    let { isError, isLoader } = this.props
    return (
      <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>
        <ScrollView style={{
          width: "100%",
        }}>
          <View style={styles.container}>
            <View style={{ marginTop: "20%" }}>
              <AppLogo />
            </View>
            <View style={{ marginTop: "20%" }}>
              {/* Email */}
              <View style={[styles.input, { marginTop: 5 }]}>
                <View style={styles.inputIcon}>
                  <MaterialCommunityIcons name="email-outline" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                </View>
                <View style={styles.inputFlex}>
                  <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"Email"} val={this.state.Email} type={"default"} placeHolder={"Email"} secureText={false} />
                </View>
              </View>
              {/* Phone number */}
              {/* <View style={styles.input}>
                <View style={styles.inputIcon}>
                  <FontAwesome name="phone" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                </View>
                <View style={styles.inputFlex}>
                  <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"PhoneNumber"} val={this.state.PhoneNumber} type={"numeric"} placeHolder={"+92 Phone number"} secureText={false} />
                </View>
              </View> */}
              {/* Password */}
              <View style={[styles.input, { marginTop: 15 }]}>
                <View style={styles.inputIcon}>
                  <Ionicons name="ios-key" style={{ color: '#0B4658', fontWeight: 'bold', fontSize: 22 }} />
                </View>
                <View style={styles.inputFlex}>
                  <Inputs setText={(text, fieldName) => { this.setText(text, fieldName) }} fieldName={"Password"} val={this.state.Password} type={"Password"} placeHolder={"Password"} secureText={true} />
                </View>
              </View>
              {/* <TouchableOpacity style={styles.forgetPassword} onPress={() => {
                this.props.navigation.navigate("Forgetpassword")
              }}>
                <Text style={{ color: "#8A8889" }}>Forget Password?</Text>
              </TouchableOpacity> */}
            </View>
            <CustomButton text={"Login"} topMargin={60} func={() => { this.signin() }} isLoader={isLoader} />

            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Signup") }} style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", marginTop: isError ? 30 : 30, }}>
              <Text style={{ color: "#8A8889" }}>Not Fan Member yet? </Text>
              <Text style={{ color: "#0B4658", textDecorationLine: "underline" }}>Get Register</Text>
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
    signin: (user, props) => {
      dispatch(signin(user, props));
    },
  })
}
export default connect(mapStateToProp, mapDispatchToProp)(Login);

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
