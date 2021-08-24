
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';



import MainScreen from '../Screens/App/mainscreen';
// import RegisterNow from '../Screens/App/registerNow';

// //App Routs
// const AppStack = createStackNavigator(
//     {
//         MainScreen: { screen: MainScreen },
//         RegisterNow: { screen: RegisterNow },
//     },
//     {
//         headerMode: 'none',
//     },
// );


// export default myDrawerNavigator = createDrawerNavigator(
//     {
//         MainScreen: AppStack,
//         RegisterNow: RegisterNow,
//     },
//     {
//         headerMode: 'none',
//     },
// );

import React, { Component } from 'react'
import { StyleSheet, Button, ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        // drawerIcon: ({ tintColor }) => (
        //     <Text>123</Text>
        //     // <Image
        //     //     source={require('./chats-icon.png')}
        //     //     style={[styles.icon, { tintColor: tintColor }]}
        //     // />
        // ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        // drawerIcon: ({ tintColor }) => (
        //     <Text>123</Text>
        //     // <Image
        //     //     source={require('./notif-icon.png')}
        //     //     style={[styles.icon, { tintColor: tintColor }]}
        //     // />
        // ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default MyDrawerNavigator = createDrawerNavigator({
    test: MainScreen,
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
},
    {
        // initialRouteName: "none",
        drawerLockMode: "locked-open",
        drawerWidth: "110%",

        contentOptions: {
            activeTintColor: "red",
            activeLabelStyle: "blue",

            inactiveTintColor: "green",

            iconContainerStyle: {
                opacity: 1
            },

        }
    });

// export default MyApp = createAppContainer(MyDrawerNavigator);


