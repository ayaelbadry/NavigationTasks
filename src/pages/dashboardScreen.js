import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
export default class DashBoardScreen extends React.Component{
   
    
    render(){
        return(
            <View style={styles.container}> 
                <Text>
                    DashBoard Screen
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