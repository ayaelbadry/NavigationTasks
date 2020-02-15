import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
export default class WelcomeScreen extends React.Component{
    static  navigationOptions = {
        title: 'Welcome'
    }
    
    render(){
        return(
            <View style={styles.container}> 
                <Text>
                    welcome Screen
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