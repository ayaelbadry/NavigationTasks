import React from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import ProfilePage from './profilePage'
import SettingPage from './settingPage'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
export default class HomePage extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: ""
        }
    }
    static navigationOptions = {
        title: 'HomeScreen',
            headerStyle: {
                backgroundColor: '#E4253C'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            },
            headerTitleAlign: 'center'
        
    }
    render(){
        return(
            <View style={styles.container}> 
                <Text>
                    welcome with you in Home Screen 
                </Text>
                <TextInput value={this.state.userName} onChangeText={userName => this.setState({userName})} 
                placeholder='Enter Any Value' />
                <Button title="Submit" onPress={() => this.props.navigation.push('Profile', {
                    userName: this.state.userName,
                    otherParam: '101'
                })} />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})