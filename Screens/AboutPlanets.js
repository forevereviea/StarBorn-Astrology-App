import React from 'react';
import { StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Text, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert } from 'react-native';

const { height, width } = Dimensions.get('window');
const AboutPlanets = ({ navigation }) => {
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
        <View style={{ flexDirection: 'column' }}>

            <Text style={{
                 padding: 30,
                 marginTop: 40,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                fontSize: 35,
                color: 'white', fontFamily: 'Palatino-Italic' 
            }}
            >What The Planets Mean</Text>
        <View style={{ 
                justifyContent: 'center', 
                alignItems: 'center',
                alignSelf: 'center',
                padding: 20,
                backgroundColor: '#9DCFF2',
                opacity: 0.7,
                width: width / 1.3,
                height: height / 1.6,
                marginTop:30,
                borderRadius: 50
                }}>
                    <ScrollView>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18 }}>
            The basic symbolism for each of the main planets, luminaries, and points in the sky:</Text>
         
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10, alignItems:'center' }}>
                Sun </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16, justifyContent: 'center'}}>
            Confidence, self-image, self-esteem, sense of self, and identity.</Text>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Moon  </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16 }}>The emotional compass of the zodiac, shaping sense of safety, security, values, intuition</Text>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Mercury </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16}}>
                The messenger planet, which oversees information-gathering, research, and communication.</Text>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}> 
            Mars </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16}}>
                The go-getter planet involves how you take action, your energy, sexual expression, and courage.</Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Jupiter </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16 }}
            >The planet of luck and abundance.</Text>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Saturn </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16 }}>
                The planet of rules, limitations, boundaries, discipline. </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Uranus </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16}}>
                The planet of change, rebellion, breakthroughs, sudden events.</Text>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Pluto </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16}}>
                The planet of transformation, death, rebirth, power.</Text>

            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino-Bold', fontSize: 18, marginTop: 10 }}>
                Rising sign/Ascendant </Text>
            <Text style={{ opacity:1, color: 'black', fontFamily: 'Palatino', fontSize: 16,}}>
                The sign that was ascending on the eastern horizon at the time of your birth is considered your rising or ascendant. It speaks to the image you project out into the world, and it offers insight into your skills, talents, and strategies you might adopt to make your way in life.</Text>
                    </ScrollView>

        </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
                        onPress={() => navigation.navigate('WhatIsAstrology')}
                    >
                        <Image style={{
                       height: 50,
                       width: 50,
                       justifyContent: 'flex-end'
                        }}
                        source={require('../Images/arrowLeft.png')}/>
                    </TouchableOpacity>
        <TouchableOpacity
                        onPress={() => navigation.navigate('CreateBirthChart')}
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
        // backgroundColor: 'rgb(184, 181, 255)'
    },
    row: {
        flexDirection: 'row'
    },
    btn:{
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: 'purple',
        borderRadius: 50,
        height: 30,
        width:150
    }
})

export default AboutPlanets