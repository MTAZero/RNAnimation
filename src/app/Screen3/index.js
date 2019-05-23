import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
    MainMenu: {
        backgroundColor: '#f756f8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

class Screen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.MainMenu}>
                <Text style={styles.Text}>Screen 3</Text>
                <Button title={"Go To Home"} onPress={() => navigate('Home')} />
            </View>
        )
    }
}

export default Screen;