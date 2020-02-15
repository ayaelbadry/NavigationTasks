import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native'
// import AppNavigator from './src/pages/navigationDemo'
//import AppNavigator from './src/pages/topTabNavigator'
//import AppNavigator from './src/pages/switchNavigatorDemo'
//import AppNavigator from './src/pages/drawerNavigatorDemo'
import AppNavigator from './src/pages/screens/navigationFace'
import Icon from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from 'react-navigation'
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator)


export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
         {/* <StatusBar backgroundColor="red" barStyle='light-content' />
         <View style={styles.headerStyle}>
           <Icon name="ios-camera" color='white' size={30}/> 
           <Icon name="ios-menu" color='white' size={30}/> 

         </View> */}
      
      <AppContainer />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingHorizontal: 18,
    paddingTop: 5
  }
})


