import React from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
export default class Home extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" color={tintColor} size={25} />
        )
    }
    
    render(){
        return(
            <View style={styles.container}> 
                <Text>
                    welcome with you in Home 
                </Text>
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