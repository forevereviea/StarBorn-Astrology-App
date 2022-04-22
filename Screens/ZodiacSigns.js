import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';

const ZodiacSigns = ({ navigation }) => {
  return (
   <>
   <SafeAreaView style={styles.container}>
    <ScrollView style={styles.ScrollView}>
        <View>
            <Text style={styles.ZodiacTitle}>Read About A Zodiac Sign</Text>
            
            <View>
                <TouchableOpacity style={styles.buttons}>
                {/* Aries Btn */}
                <Pressable
                onPress={() => navigation.navigate("Aries")}
                >
                <Image style={styles.AriesLogo} 
                source={require('../Images/Aries.png')} 
                /> 
                    </Pressable>
            {/* Taurus Btn */}
                <Pressable
               onPress={() => navigation.navigate("Taurus")} >
                <Image style={styles.AriesLogo} source={require('../Images/Taurus.png')} /> 
                </Pressable>
                {/* Gemini Btn */}
                <Pressable
                onPress={() => navigation.navigate("Gemini")}>
                <Image style={styles.AriesLogo} source={require('../Images/Gemini.png')} /> 
                </Pressable>
                </TouchableOpacity>
            </View>
            <View>
                {/* Cancer Btn */}
                <TouchableOpacity style={styles.buttons}>
                    <Pressable
                    onPress={() => navigation.navigate("Cancer")}>
                <Image style={styles.AriesLogo} source={require('../Images/Cancer.png')} /> 
                    </Pressable>
                    {/* Leo Btn */}
                    <Pressable
                    onPress={() => navigation.navigate("Leo")}>
                <Image style={styles.AriesLogo} source={require('../Images/Leo.png')} /> 
                    </Pressable>
                    {/* Virgo Btn */}
                    <Pressable
                    onPress={() => navigation.navigate("Virgo")}>
                <Image style={styles.AriesLogo} source={require('../Images/Virgo.png')} /> 
                    </Pressable>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons}>
                    {/* Libra Btn */}
                    <Pressable
                    onPress={() => navigation.navigate("Libra")}>
                <Image style={styles.AriesLogo} source={require('../Images/Libra.png')} /> 
                    </Pressable>
                {/* Scorpio Btn */}
                <Pressable
                onPress={() => navigation.navigate("Scorpio")}>
                <Image style={styles.AriesLogo} source={require('../Images/Scorpio.png')} /> 
                </Pressable>
                {/* Sag Btn */}
                <Pressable
                onPress={() => navigation.navigate("Sag")}>
                <Image style={styles.AriesLogo} source={require('../Images/Sag.png')} /> 
                </Pressable>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons}>
                    {/* Capricorn Btn */}
                    <Pressable
                    onPress={() => navigation.navigate("Capricorn")}>
                <Image style={styles.AriesLogo} source={require('../Images/Capricorn.png')} /> 
                    </Pressable>
                    {/* Aquarius Btn */}
                    <Pressable
                    onPress={() => navigation.navigate("Aquarius")}>
                <Image style={styles.AriesLogo} source={require('../Images/Aquarius.png')} /> 
                    </Pressable>
                    {/* Pisces Btn */}
                    <Pressable
                    onPress={() => navigation.navigate("Pisces")}>
                <Image style={styles.AriesLogo} source={require('../Images/Pisces.png')} /> 
                    </Pressable>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
   </SafeAreaView>
   </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    ZodiacTitle: {
        marginTop: 20,
        justifyContent: "center",
        alignSelf:'center',
        fontSize:25,
        marginBottom: 30
    },
    ScrollView: {
        backgroundColor: 'rgb(184, 181, 255)'
    },
    buttons: {
        flexDirection: 'row'
    },
    AriesLogo: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        margin: 12
    }
})

export default ZodiacSigns