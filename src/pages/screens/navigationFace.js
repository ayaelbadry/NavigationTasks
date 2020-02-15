import React from 'react'
import { View, Text, Settings } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './home'
import Profile from './profile'
import Setting from './settings'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation'
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'
 
const TapPages = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
        
    },
    Profile: {
        screen: Profile,
      
    },
},
{
    initialRouteName: "Home",
    tabBarOptions: {
        showLabel: false,
        activeTintColor: 'blue', 
        inactiveTintColor: 'gray',
        showIcon: true,
        style: {  
            backgroundColor:'white'  ,
        } ,
        indicatorStyle: {
            backgroundColor: 'blue'
        },

    }
})
const HomeStackNavigator = createStackNavigator({
    HomeNavigator: {screen: Home}
})
const ProfileStackNavigator = createStackNavigator({
    ProfileNavigator: {screen: Profile}
})
const SettingStackNavigator = createStackNavigator({
    SettingNavigator:{screen: Setting}
})
const drawerNavigator = createDrawerNavigator({
    Setting: {screen: SettingStackNavigator},
    Profile: {screen: ProfileStackNavigator}
})
const AppNavigator = createStackNavigator({
    TapsBar: {
        screen: TapPages,
        navigationOptions: {
            headerTitle: 'FaceBook'
        }
    
    },
    DashBoard: {screen: drawerNavigator}
})


export default AppNavigator