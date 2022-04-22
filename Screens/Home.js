import React from 'react'
import { Animated, StyleSheet, Text, View, Button, Image, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import menu from '../Images/menu.png';
const Home = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
        <ImageBackground
         style={styles.BackImage} source={require('../Images/background.png')}>

                <ScrollView>
                    <View style={{ flexDirection: 'row'}}>
                    {/* <TouchableOpacity 
                    onPress={() => navigation.navigate('SideMenu')
                
                }
                    >
                    <Image source={menu} style={{ display: 'flex', width: 30, height: 30, padding: 15, marginLeft: 20, marginTop: 30}}/>
                    </TouchableOpacity> */}
                    </View>
                    <View style={styles.buttons}>

                        <Pressable style={({ pressed }) => [styles.btn, styles.quote, {
                            opacity: pressed ? .5 : 1
                        }]}
                        onPress={() =>
                            navigation.navigate('Quote')}
                        >
                            <Text style={{ color: "white", fontWeight: 'bold' }}>About Astrology</Text>
                        </Pressable>

                        <Pressable style={({ pressed }) => [styles.btn, {
                            opacity: pressed ? .5 : 1
                        }]}
                        onPress={() =>
                            navigation.navigate('BirthCharts')}
                        >
                            <Text style={{ color: "white", fontWeight: 'bold' }}>Birth Charts</Text>
                        </Pressable>

                        <Pressable style={({ pressed }) => [styles.btn, styles.zodiac, {
                            opacity: pressed ? .5 : 1
                        }]}
                        onPress={() =>
                            navigation.navigate('ZodiacSigns')}
                        >
                            <Text style={{ color: "white", fontWeight: 'bold' }}>All Zodiac Signs</Text>
                        </Pressable>
                    </View>
                </ScrollView>
        </ImageBackground>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(184, 181, 255)'
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    buttons: {
        justifyContent: 'center',
        padding:50,
        alignContent: 'center',
        marginTop: 200
    },
    quote:{
        marginBottom: 15
    },
    zodiac: {
        marginTop: 15
    },
    BackImage: {
        height: 900,
        width: 400,
        resizeMode: 'cover',
        position: 'absolute'
    }
})
export default Home