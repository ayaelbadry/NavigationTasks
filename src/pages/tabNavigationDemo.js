import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons'
import Home from './home'
import Profile from './profile'
import Setting from './setting'

// const AppNavigator = createBottomTabNavigator({
//     Home: {
//         screen: Home,

//     },
//     Profile: {
//         screen: Profile
//     },
//     Setting: {
//         screen: Setting
//     }

// }, {
//     initialRouteName: "Home"
// })
const AppNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
           // tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon name='ios-home' color={tintColor} size={25} />
                </View>)


        }



    },
    Profile: {
        screen: Profile,
        navigationOptions: {
           // tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon name='ios-person' color={tintColor} size={25} />
                </View>
            ),

            activeColor: '#f0edf6',
            inactiveColor: '#6C108C',
            barStyle: { backgroundColor: '#C751F0' }
        }

    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            //tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon name='ios-settings' color={tintColor} size={25} />
                </View>
            ),
            activeColor: '#f0edf6',
            inactiveColor: '#A42405',
            barStyle: { backgroundColor: '#EC662B' },



        }
    }

}
    , {
        initialRouteName: "Home",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
       

    })
// AppNavigator.navigationOptions = ({ navigation }) => {
//     const { routeName } = navigation.state
//     return {
//         tabBarLabel: ({ focused }) => {
//             switch (routeName) {
//                 case 'Home':
//                     return focused ? (<Text>home</Text>) : null
//                     break;
//                 case 'Profile':
//                     return focused ? (<Text>person</Text>) : null
//                     break;
//                 case 'Setting':
//                     return focused ? (<Text>setts</Text>) : null
//                     break;
//                 default:
//                     return null
//                     break;
//             }

//         }
//     }
// }
export default AppNavigator