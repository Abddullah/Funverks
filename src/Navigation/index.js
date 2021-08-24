
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react'

import Splash from '../Screens/Authentication/splash';
import Login from '../Screens/Authentication/login';
import ForgetPassword from '../Screens/Authentication/forgetpassword';
import Signup from '../Screens/Authentication/signup';
import MainScreen from '../Screens/App/mainscreen';
import MyTrainingSession from '../Screens/App/mytrainingsession';
import UserProfile from '../Screens/App/userProfile'
import Faqs from '../Screens/App/faqs';
import Logout from '../Screens/App/logout';
import { Label, Title } from 'native-base';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }
  render() {
    return (
      <NavigationContainer>
        {
          !this.state.isLogin ?
            <Stack.Navigator initialRouteName="Splash">
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="Login" options={{ headerShown: false }} >
                {props => <Login {...props} func={() => { this.setState({ isLogin: true }) }} />}
              </Stack.Screen >
              <Stack.Screen name="Forgetpassword" component={ForgetPassword} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            </Stack.Navigator> :
            <Drawer.Navigator initialRouteName="MainScreen">
              <Drawer.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false, title: "Main Screen" }} />
              <Drawer.Screen name="MyTrainingSession" component={MyTrainingSession} options={{ headerShown: false, title: "My Training Seassion" }} />
              <Drawer.Screen name="Profile" component={UserProfile} options={{ headerShown: false }} />
              {/* <Drawer.Screen name="Faqs" component={Faqs} options={{ headerShown: false }} /> */}
              <Drawer.Screen name="AboutUs" component={Faqs} options={{ headerShown: false, title: "About Us" }} />
              <Drawer.Screen name="Logout" options={{ headerShown: false }}>
                {props => <Logout {...props} func={() => { this.setState({ isLogin: false }) }} />}
              </Drawer.Screen>
            </Drawer.Navigator>
        }
      </NavigationContainer>
    )
  }
}

export default App

