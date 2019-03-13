import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Animated} from 'react-native';
import axios from 'axios';

// api
import {getNews} from './services/api/news.api';

const styles = StyleSheet.create({
    mainMenu:{
        color: 'green',
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        color: 'green',
        fontSize: 20
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 4,
    }
})

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            x: new Animated.Value(50), 
            y: new Animated.Value(0),
            x2: new Animated.Value(10),
            rotate: new Animated.Value(0),
            news: []
        }
    }

    startAnimation = () => {

        // let animation1 = Animated.sequence([
        //     Animated.timing(
        //         this.state.y,{
        //             toValue: 250,
        //             duration: 2000
        //         }
        //     ),
        //     Animated.timing(
        //         this.state.x,{
        //             toValue: 550,
        //             duration: 2000
        //         }                
        //     )
        // ]);
        // let animation2 = Animated.sequence([
        //     Animated.timing(
        //         this.state.y,{
        //             toValue: 0,
        //             duration: 1500
        //         }
        //     ),
        //     Animated.timing(
        //         this.state.x,{
        //             toValue: 50,
        //             duration: 1500
        //         }                
        //     )
        // ]);
        let animation3 = Animated.parallel([
            Animated.timing(
                this.state.rotate, {
                    toValue: 0,
                    duration: 500
                }          
            ),
            Animated.timing(
                this.state.y,{
                    toValue: 0,
                    duration: 1500
                }
            ),
        ]);
        let animation4 = Animated.parallel([
            Animated.timing(
                this.state.rotate, {
                    toValue: 1,
                    duration: 500
                }          
            ),
            Animated.timing(
                this.state.y,{
                    toValue: 250,
                    duration: 1500
                }
            ),
        ]);

        // if (this.state.y.__getValue() == 0)
        //     animation1.start(() => {this.startAnimation()});
        
        // if (this.state.y.__getValue() == 250)
        //     animation2.start(() => {this.startAnimation()});

        if (this.state.rotate.__getValue() == 0)
            animation4.start(()=>{this.startAnimation()});

        if (this.state.rotate.__getValue() == 1)
            animation3.start(()=>{this.startAnimation()});
    }

    componentDidMount(){
        this.startAnimation();
    }

    render(){
        console.log(this.state.y.__getValue());
        const RotateData = this.state.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <View style={styles.mainMenu}>
                {/* <Text style={styles.text}>I am ThuyBX</Text> */}
                <Animated.Image 
                    style={
                        {
                            ...styles.image,
                            marginLeft: this.state.y,
                            marginTop: this.state.x,
                            // height: this.state.rotate,
                            // width: this.state.rotate,
                            transform: [{ rotate: RotateData}],
                        }
                    } 
                    source={{uri: 'https://image-us.24h.com.vn/upload/3-2018/images/2018-09-18/1537265858-310-anh-1-1537263229-width650height650.jpg'}} 
                />

                {
                    this.state.news.map((item, index) => {
                        return (
                            <Animated.Image 
                                style={{
                                    ...styles.image,
                                    marginTop: 10,
                                    marginLeft: this.state.y
                                }} 
                                key={index} source={{uri: item.urlToImage}}
                            />
                        );
                    })
                }
            </View>
        )
    }
}

export default App;