import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, SafeAreaView, ScrollView, Dimensions, ImageBackground } from 'react-native';
import AriesImg from '../Images/Aries.png';

const { height, width } = Dimensions.get('window');
const AboutAries = () => {
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
                        <View style={{ padding: 15 }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.HeaderTxt}>Aries</Text>
                                        <View style={styles.row1}>
                                            <Text style={styles.element}>Symbol: </Text>
                                            <Text style={{ fontFamily: 'Palatino' }}> Ram </Text>
                                        </View>
                                        <View style={styles.row1}>
                                            <Text style={styles.element}>Element: </Text>
                                            <Text style={{ fontFamily: 'Palatino' }}> Fire </Text>
                                        </View>
                                        <View style={styles.row1}>
                                            <Text style={styles.element}>Ruling Planet: </Text>
                                            <Text style={{ fontFamily: 'Palatino' }}> Mars </Text>
                                        </View>
                                        <View style={styles.row1}>
                                            <Text style={styles.element}>Birth Dates Range: </Text>
                                            <Text style={{ fontFamily: 'Palatino' }}> March 21st - April 19th </Text>
                                        </View>


                                    </View>
                                    {/* <View style={{ marginRight: 30, }}>
                                    <Image source={AriesImg}
                                        style={{
                                            width: 150,
                                            height: 150,
                                            marginTop: 50,
                                            marginRight: 100
                                        }} />

                                    </View> */}
                                </View>
                            </View>

                            <View style={styles.row1}>
                                <Text style={styles.subHeader}>Sun in Aries </Text>
                            </View>
                            <View>
                                <Text style={styles.paragraph}>
                                    Aries is the first sign of the zodiac, and Aries natives are the first to start—and the first to finish—whatever they set out to do. Aries is an active, energetic sign. People with Sun in Aries are direct, straightforward, and uncomplicated. They expect the same from others and are baffled when they don’t always get it.
                                </Text>
                                <Text style={styles.paragraph}>
                                    The body comes first with Aries. Sun in Aries people are natural athletes. At the very least, their natural inclination is to use their bodies to get things done. They’re not given to long, drawn-out emotional moments; nor are they big on planning ahead. Instead, they live their lives simply. What is happening right now is most important to Aries. Impatience is a definite vice, and innovation is a huge strength. Aries loves to start anything new, and they have trouble sitting still. They are pioneers in whatever they do, and there is a very basic quality of bravery in these people that is unmistakable! Aries generally knows what they want, and they know the quickest route to getting it. They take shortcuts if they must, but generally, everything is aboveboard. Underhanded just isn’t their style. Some Aries people are bold, but even the quieter ones are brave and even plucky in their own way. Independence is their birthright. Nothing gets them going more than a fresh slate, the promise of a new day, and a brand new start.
                                </Text>
                                <Text style={styles.paragraph}>
                                    Aries enjoys a challenge, and Aries Suns are happiest when their lives are moving forward and active. There’s a childlike quality to all Aries Sun people, and it’s often quite charming.
                                </Text>
                                {/* <View style={{ backgroundColor: "black", height: 1, marginTop: 20 }}>
                    </View> */}

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
        fontSize: 50,
        marginLeft: 20,
        marginTop: 50,
        fontFamily: 'Palatino-Bold'
    },
    row1: {
        marginTop: 3,
        marginLeft: 20,
        flexDirection: 'row'
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
export default AboutAries