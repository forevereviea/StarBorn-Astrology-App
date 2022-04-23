import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Pressable, ImageBackground } from 'react-native';

const { height, width } = Dimensions.get('window');

const ZodiacSigns = ({ navigation }) => {
  return (
   <>
   <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../Images/background.png')}
     style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        flex: 1,
        resizeMode: 'cover',
        resizeMode: 'stretch',
        position: 'absolute'
    }}
    >

    <ScrollView style={styles.ScrollView}>
        <View>
            {/* <Text style={{ fontSize: 50, color: 'white', fontFamily: 'Palatino-Italic', justifyContent: 'center', alignSelf: 'center' }}
            >Read About A</Text> */}
            <Text style={{ fontSize: 50, color: 'white', fontFamily: 'Palatino-Italic', justifyContent: 'center', alignSelf: 'center', marginTop: 90 }}>Zodiac Signs</Text>
            <View>
                <TouchableOpacity style={styles.buttons}>
                {/* Aries Btn */}
                <TouchableOpacity
                onPress={() => navigation.navigate("Aries")}
                >
                <Image style={styles.AriesLogo} 
                source={require('../Images/Aries.png')} 
                /> 
                    </TouchableOpacity>
            {/* Taurus Btn */}
                <TouchableOpacity
               onPress={() => navigation.navigate("Taurus")} >
                <Image style={styles.AriesLogo} source={require('../Images/Taurus.png')} /> 
                </TouchableOpacity>
                {/* Gemini Btn */}
                <TouchableOpacity
                onPress={() => navigation.navigate("Gemini")}>
                <Image style={styles.AriesLogo} source={require('../Images/Gemini.png')} /> 
                </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View>
                {/* Cancer Btn */}
                <TouchableOpacity style={styles.buttons}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Cancer")}>
                <Image style={styles.AriesLogo} source={require('../Images/Cancer.png')} /> 
                    </TouchableOpacity>
                    {/* Leo Btn */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Leo")}>
                <Image style={styles.AriesLogo} source={require('../Images/Leo.png')} /> 
                    </TouchableOpacity>
                    {/* Virgo Btn */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Virgo")}>
                <Image style={styles.AriesLogo} source={require('../Images/Virgo.png')} /> 
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons}>
                    {/* Libra Btn */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Libra")}>
                <Image style={styles.AriesLogo} source={require('../Images/Libra.png')} /> 
                    </TouchableOpacity>
                {/* Scorpio Btn */}
                <TouchableOpacity
                onPress={() => navigation.navigate("Scorpio")}>
                <Image style={styles.AriesLogo} source={require('../Images/Scorpio.png')} /> 
                </TouchableOpacity>
                {/* Sag Btn */}
                <TouchableOpacity
                onPress={() => navigation.navigate("Sag")}>
                <Image style={styles.AriesLogo} source={require('../Images/Sag.png')} /> 
                </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons}>
                    {/* Capricorn Btn */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Capricorn")}>
                <Image style={styles.AriesLogo} source={require('../Images/Capricorn.png')} /> 
                    </TouchableOpacity>
                    {/* Aquarius Btn */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Aquarius")}>
                <Image style={styles.AriesLogo} source={require('../Images/Aquarius.png')} /> 
                    </TouchableOpacity>
                    {/* Pisces Btn */}
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Pisces")}>
                <Image style={styles.AriesLogo} source={require('../Images/Pisces.png')} /> 
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
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
        
    },
    ZodiacTitle: {
        marginTop: 20,
        justifyContent: "center",
        alignSelf:'center',
        fontSize:25,
        marginBottom: 30
    },
    buttons: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        alignSelf: 'center'
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