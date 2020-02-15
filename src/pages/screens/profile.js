
import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Profile extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-person' color={tintColor} size={25} />
        )
    }
    render(){
       
        return(
            <View style={styles.container}> 
                <Text>
                    welcome with you in Profile Screen 
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