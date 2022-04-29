import React, { useState } from 'react'
import { Animated, StyleSheet, Text, Dimensions, View, Button, Image, Pressable, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import menu from '../Images/menu.png';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import Dashboard from './DashBoard';
import WhatIsAstrology from './WhatIsAstrology';
import AboutPlanets from './AboutPlanets';

const Drawer = createDrawerNavigator();
const { height, width } = Dimensions.get('window');
const Home = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                        flex: 1,
                        resizeMode: 'cover',
                        resizeMode: 'stretch',
                        position: 'absolute'

                    }} source={require('../Images/backgroundLessV.png')}>

                    <ScrollView>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <TouchableOpacity 
                    onPress={() => {
                    navigation.navigate('SideMenu');
                }
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
// const DrawerHome = () => (
//     <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home Screen" component={Home}
//             options={{
//                 headerTintColor: "white",
//                 headerStyle: {
//                     backgroundColor: 'black',
//                     opacity: .7
//                 }
//             }} />
//         <Drawer.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>
// );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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
        padding: 50,
        alignContent: 'center',
        marginTop: 200
    },
    quote: {
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