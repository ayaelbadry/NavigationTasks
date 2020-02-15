import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomePage from './HomePage'
import ProfilePage from './profilePage'
import SettingPage from './settingPage'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomePage,
       
    },
    Profile: {
        screen: ProfilePage
    },
    Setting: {
        screen: SettingPage
    }

}, {
    initialRouteName: "Home"
})
export default AppNavigator
