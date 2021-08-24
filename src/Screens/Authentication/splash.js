import React, { Component } from 'react'
import { StyleSheet, ImageBackground, } from 'react-native'
//componets
import AppLogo from '../../Components/AppLogo'

export default class Splash extends Component {

    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Login")
        }, 3000);
    }

    render() {
        return (
            <ImageBackground source={require('../../Assets/background.png')} style={styles.backgroundImg}>
                <AppLogo />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
})
