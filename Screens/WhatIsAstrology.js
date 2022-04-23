import React from 'react';
import { StyleSheet, Background, TouchableOpacity, Dimensions, ImageBackground, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert } from 'react-native';

const { height, width } = Dimensions.get('window');
const WhatIsAstrology = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../Images/backgroundLessV.png')}
            style={{
                height: height,
                    width: width,
                    flex: 1,
                    position: 'absolute',
                    resizeMode: 'cover',
                    alignItems: 'center'
            }}
            >  

            <ScrollView>
                <View style={{ flexDirection: 'column'}}>

                <Text style={{ 
                    padding: 30,
                     marginTop: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    fontSize: 35,
                    color: 'white', fontFamily: 'Palatino-Italic' 
                    }}> What is Astrology?</Text>
                <View style={{ 
                justifyContent: 'center', 
                alignItems: 'center',
                alignSelf: 'center',
                padding: 29,
                backgroundColor: '#9DCFF2',
                opacity: 0.7,
                width: width / 1.3,
                height: height / 1.6,
                marginTop:30,
                borderRadius: 50
                }}>
                    <ScrollView>
                    <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16 }}>Astrology is the study of the connection between
                        celestial activity phenomena and earthly events.

                        Those earthly events might include career,
                        relationship, and wellness insights
                        in your weekly or monthly horoscope.</Text>
                    <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>What Your Natal Chart Means...</Text>
                    <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16, marginTop: 10 }}>Each celestial body in our solar system serves a purpose in astrology. </Text>
                    <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16}}>If you’re asked “what’s your sign?” the most basic answer
                        is one of the 12 zodiac signs the sun was in when you
                        we’re born. But that’s just one tiny detail in a much larger,
                        heavily layered, complicated, individual picture that illustrates
                        your very own astrological story. Professional astrologers look at
                        a whole chart, which you can think of as a snapshot
                        of the sky when you were born— based on not only the month
                        and day but the year, time, and place of your birth. If you know
                        the precise time and location you came into the world, you can
                        create an accurate snapshot of the sky at the time of your birth. </Text>
                    </ScrollView>
                </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
        <TouchableOpacity
                        onPress={() => navigation.navigate('Quote')}
                    >
                        <Image style={{
                       height: 50,
                       width: 50,
                       justifyContent: 'flex-end'
                        }}
                        source={require('../Images/arrowLeft.png')}/>
                    </TouchableOpacity>
        <TouchableOpacity
                        onPress={() => navigation.navigate('AboutPlanets')}
                    >
                    {/* <Text style={{ color: 'white', fontFamily: 'Palatino-Italic', marginRight: 30}}>Create Birth Chart</Text> */}
                        <Image style={{
                       height: 50,
                       width: 50,
                       justifyContent: 'flex-end'
                        }}source={require('../Images/arrowRight.png')}/>
                    </TouchableOpacity>
        </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default WhatIsAstrology