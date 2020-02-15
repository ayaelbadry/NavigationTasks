import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class SettingPage extends React.Component{
    static navigationOptions = {
        title: 'SettingScreen',
            headerStyle: {
                backgroundColor: '#EAEC37'
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
                    welcome with you in Setting Screen 
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