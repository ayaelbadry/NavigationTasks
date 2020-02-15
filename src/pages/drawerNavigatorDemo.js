import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import WelcomeScreen from './welcomScreen'
import DashBoardScreen from './dashboardScreen'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation'

const welcomeStackNavigator = createStackNavigator({
    WelcomeNavigator: WelcomeScreen
},
{
    defaultNavigationOptions: ({navigation}) => {
        return{
            headerLeft: (
                <Icon name='md-menu'size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />
            )
        }

    }
})
const dashStackNavigator = createStackNavigator({
    DashBoardNavigator: DashBoardScreen
},
{
    defaultNavigationOptions: ({navigation}) => {
        return{
            headerLeft: (
                <Icon name='md-menu'size={30} style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />
            )
        }

    }
})
const drawerNavigtionScreens = createDrawerNavigator({
    Welcome: {
        screen: welcomeStackNavigator
    },
    DashBoard: {
        screen: dashStackNavigator
    }  
},{
    initialRouteName: "DashBoard"
})
const AppNavigator = createSwitchNavigator({
    DashBoard: {screen: drawerNavigtionScreens},
    Welcome: {screen: WelcomeScreen}
})
 
export default AppNavigator