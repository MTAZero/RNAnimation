import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    MainMenu: {
        backgroundColor: 'lightgreen',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

class ListGirlScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.MainMenu}>
                <Text style={styles.Text}>Screen 1</Text>
                <Button title={"Go To Screen2"} onPress={() => navigate('Screen2')} />
                <TouchableOpacity accessible={true} accessibilityLabel="Go back"
  accessibilityHint="Navigates to the previous screen">
                    <Text>text one</Text>
                    <Text>text two</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListGirlScreen;