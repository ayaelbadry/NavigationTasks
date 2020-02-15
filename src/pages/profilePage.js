import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class ProfilePage extends React.Component{
    // apply title using params 
   // make navigationOption to be a function and return configuration
    static navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('otherParam','A param Header'),
            headerStyle: {
                backgroundColor: '#20B448'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            },
            headerTitleAlign: 'center'
    }
}
    render(){
        const userName = this.props.navigation.getParam('userName','there is no userName')
        const otherParam = this.props.navigation.getParam('otherParam', '0')
        return(
            <View style={styles.container}> 
                <Text>
                    welcome with you in Profile Screen 
                </Text>
                <Text>{userName}</Text>
                <Text>{otherParam}</Text>
                {/* <Text>{this.props.navigation.state.params.userName?this.props.navigation.state.params.userName:'no userName'}</Text> */}
                <Button title='change title' onPress={() => this.props.navigation.setParams({otherParam: 'profile Title'})} />
                <Button title="navigate" onPress={() => this.props.navigation.navigate('Profile')} />
                <Button title="push" onPress={() => this.props.navigation.push('Profile')} />
                <Button title='goBack' onPress={() => this.props.navigation.goBack()} />
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