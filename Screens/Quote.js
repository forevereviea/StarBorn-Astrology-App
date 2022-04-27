import React from 'react';
import { ImageBackground, TouchableOpacity, Dimensions, StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert, TouchableOpacityComponent } from 'react-native';
import arrow from '../Images/arrowLeft.png';
const { height, width } = Dimensions.get('window');
const Quote = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../Images/backgroundVectors.png')}
                style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    flex: 1,
                    resizeMode: 'cover',
                    resizeMode: 'stretch',
                    position: 'absolute'
                }}>

                <ScrollView>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                >
                <Image 
                style={{
                    width: 20,
                    height: 20,
                    padding:15,
                    marginLeft: 12,
                    marginTop: 12
                }}
                source={arrow}/>
                </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            zIndex: 1,
                            padding: 60,
                            marginTop: 400,
                            marginLeft: 60
                        }}
                        onPress={() => navigation.navigate('WhatIsAstrology')}
                    >
                        <Text style={{ fontSize: 50, color: 'white', fontFamily: 'Palatino-Italic' }}>Continue...</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
        // backgroundColor: 'rgb(184, 181, 255)'
    },
    Quote: {
        alignSelf: 'center',
        padding: 20,
        marginTop: 300
    },
    btn: {
        borderRadius: 50
    },
    nextBtn: {
        color: 'white',
        // justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 200,
        borderRadius: 50
    }
})
export default Quote