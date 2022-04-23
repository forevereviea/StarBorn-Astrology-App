import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView, Dimensions, ImageBackground } from 'react-native';

const { height, width } = Dimensions.get('window');
const AboutGemini = () => {
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
                        <Text style={styles.HeaderTxt}>Gemini</Text>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.element}>Symbol: </Text>
                        <Text style={{ fontFamily: 'Palatino' }}> Twin </Text>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.element}>Element: </Text>
                        <Text style={{ fontFamily: 'Palatino' }}> Air </Text>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.element}>Ruling Planet: </Text>
                        <Text style={{ fontFamily: 'Palatino' }}> Mercury </Text>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.element}>Birth Dates Range: </Text>
                        <Text style={{ fontFamily: 'Palatino' }}> May 21st - June 21 </Text>
                    </View>

                    <View style={styles.row1}>
                        <Text style={styles.subHeader}>Sun in Gemini: </Text>
                    </View>
                    <View>
                        <Text style={styles.paragraph}>
                            With the Sun in Gemini, the urge for self-expression is strong. These natives are often just as interested in collecting information as they are in sharing it. Curious to a fault, Geminis have a finger in every pie. Solar Geminis are flexible and changeable people. Their ability to adapt quickly to new situations generally gains them plenty of friends and social contacts. Usually quite clever and witty, Geminis enjoy intellectual conversations and they are easily bored if they are not getting enough mental stimulation.
                        </Text>
                        <Text style={styles.paragraph}>
                            Often quite adept at fitting in with others, Geminis easily adopt the moods of those around them. They are friends to people from all walks of life, and are not easily intimidated. Their ability to detach themselves can make Geminis very objective and observant, but a little difficult to get close to. Although they often have many friends, intimacy doesn’t come as easily to Solar Geminis.
                        </Text>
                        <Text style={styles.paragraph}>
                            It can be difficult to know what Gemini really feels at any given moment. They are often very impressionable and scattered. There is usually a nervous air to Geminis that can make more personal characters a little uneasy. It is not always intuitive to trust Geminis to be loyal or to keep secrets.
                        </Text>
                        <Text style={styles.paragraph}>
                            Geminis often flit about, moving quickly and keeping busy every step of the way. Many people with this position of the Sun have gained quite a bit of knowledge in their lifetimes, but they don’t often possess specialized knowledge. This is because Geminis have relatively short attention spans. Restlessness is especially common with this position of the Sun.
                        </Text>
                        <Text style={{
                     margin: 10,
                     textAlign: 'center',
                     fontFamily: 'Palatino',
                     fontSize: 15,
                     marginTop: 12,
                     paddingBottom: 30,
                     marginBottom: 12
                }}>
                            Usually quite affable, Geminis enjoy the “light” side of life. This tendency to take things lightly makes them quite pleasing to be around, but it can be maddening to people seeking support on the deeper issues in life.
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
        justifyContent: 'center'
    },
    HeaderTxt: {
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
export default AboutGemini