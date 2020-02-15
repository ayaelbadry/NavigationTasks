import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Setting extends React.Component{
//     static navigationOptions = ({navigation}) => {
//         return{
//         tabBarIcon: ({tintColor}) => (
//             <Icon name='md-menu' color={tintColor} size={25} onPress={navigation.openDrawer()} />
//         )
//     }
// }
    render(){
        return(
            <View style={styles.container}> 
                <Text>
                    welcome with you in Setting 
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