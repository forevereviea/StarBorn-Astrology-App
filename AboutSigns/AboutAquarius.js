import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView, Dimensions, ImageBackground  } from 'react-native';

const { height, width } = Dimensions.get('window');
const AboutAquarius = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ImageBackground
        source={require('../Images/backgroundNoStars.png')}
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
            <Text style={styles.HeaderTxt}>Aquarius</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Water-Bearer </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Air </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Neptune </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> January 20th - February 18th </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Aquarius </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                One of the standout characteristics of those born under the Sun Sign of Aquarius is their unwillingness to follow the beaten track. With advancement and progress on their minds, there can be an irreverence to old and outdated ways of thinking and doing things.
                </Text>
                <Text style={styles.paragraph}>
                Many Aquarians aim to free themselves from personal and social conditioning. Although open to change, in theory, Aquarians can be surprisingly stubborn. Their idealism runs strong, but they can be very fixed in their opinions.
                </Text>
                <Text style={styles.paragraph}>
                Often a bit aloof and even standoffish, Aquarians nonetheless are usually well-liked. They are curious and observant, and tolerant in a broad sense. Prejudice and bias are offensive to the typical Aquarius.
                </Text>
                <Text style={styles.paragraph}>
                Aquarians are generally very clever, witty, and intellectual. They value progress and frankness. It’s difficult to throw Aquarians for a loop–they’re generally on top of things.
                </Text>
                <Text style={styles.paragraph}>
                There is a bit of reformer in Aquarius. They’ll try to get you to see through superficiality, and encourage you to be open and forthright. “Be true to yourself” and “Don’t follow the crowd” are mottos we easily associate with this sign.
                </Text>
                <Text 
                style={{
                    margin: 10,
                    textAlign: 'center',
                    fontFamily: 'Palatino',
                    fontSize: 15,
                    marginTop: 12,
                    paddingBottom: 30,
                    marginBottom: 12
               }}
                >
                Aquarians need space and value personal freedom. Any attempt to box them in will likely fail. They’ll happily return the favor, and they will treat people from all walks of life as equals. Equality and fairness are hallmarks of the sign. If you’re quirky and “different”, all the better.
                </Text>

                {/* MOON SIGN */}
                    {/* <View>
                        <Text style={styles.element}>Moon In Aries</Text>
                        <Text style={styles.paragraph}>
                        Nothing quite happens soon enough with this position of the Moon. There is an inherent impatience with getting what they want. Life is a series of emergencies for Lunar Ariens. They live in the moment and have a hard time waiting for things to happen. Whims of the moment take absolute precedence in their lives.
                        </Text>
                        <Text style={styles.paragraph}>
                        This is a fiery position of the moon. Even if the Sun or rising sign is more low-key, Moon in Aries people possess inner passion and fire. Emotional issues take precedence–there is simply no pussy-footing around when it comes to dealing with the feelings. And, dealing with new sentiments and needs stirs up a huge desire for activity. Moon in Aries has a need for acting out their needs, with no time to waste. It is hard for them to see the long-term, or to wait for things to happen. Instant gratification rules!
                        </Text>
                        <Text style={styles.paragraph}>

                        </Text>
                    </View> */}
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
        justifyContent:'center'
    },
    HeaderTxt:{
        fontSize:50,
        marginLeft: 20,
        marginTop: 50,
        fontFamily: 'Palatino-Bold'
    },
    row1: {
        marginTop: 3,
        marginLeft: 20,
       flexDirection:'row'
    },
    element: {
        fontFamily: 'Palatino-Bold'
    },
    paragraph: {
        margin: 10,
        textAlign: 'center',
        fontFamily: 'Palatino',
        fontSize: 15,
        marginTop: 12
    },
    subHeader: {
        marginTop: 10,
        marginLeft: 100,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Palatino-Bold'
    }
})
export default AboutAquarius