import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './home'
import Profile from './profile'
import Setting from './setting'
const AppNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,

    },
    Profile: {
        screen: Profile
    },
    Setting: {
        screen: Setting
    }

}, {
    initialRouteName: "Home",
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {  
        activeTintColor: 'white',  
        showIcon: true,  
        showLabel:false,  
        style: {  
            backgroundColor:'red'  ,
        } ,
        indicatorStyle: {
            backgroundColor: 'white'
        }
        
    },
    
    
    
})
export default AppNavigator