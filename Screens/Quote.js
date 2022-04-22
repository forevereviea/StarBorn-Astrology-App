import React from 'react';
import { ImageBackground, TouchableOpacity, Dimensions, StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert, TouchableOpacityComponent } from 'react-native';

const { height, width } = Dimensions.get('window');
const Quote = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../Images/backgroundVectors.png')}
                style={{
                    height: height,
                    width: width,
                    flex: 1,
                    position: 'absolute',
                    resizeMode: 'cover',
                    alignItems: 'center'
                }}>

                <ScrollView>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            zIndex: 1,
                            padding: 60,
                            marginTop: 700,
                            marginLeft: 50
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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(184, 181, 255)'
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