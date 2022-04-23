import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView, Dimensions, ImageBackground  } from 'react-native';

const { height, width } = Dimensions.get('window');
const AboutSag = () => {
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
            <Text style={styles.HeaderTxt}>Sagittarius</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Archer </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Fire </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Jupiter </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> November 22nd - December 21st </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Sagittarius </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                Restless, cheerful, and friendly, Sun in Sagittarius people are generally on the go. They have a love of freedom and a disdain for routine. Generally quite easygoing, Sagittarians make friends with people from all walks of life. They love to laugh and tease, and get along well with pretty much anyone, regardless of social factor.
                </Text>
                <Text style={styles.paragraph}>
                Sagittarians have often blind faith in people, and in the world. Their optimism is infectious, although it can get them into trouble from time to time. These are curious people who love to learn. Their idealistic nature is hard to miss.
                </Text>
                <Text style={styles.paragraph}>
                Although generally easygoing, Sagittarius is a fire sign. This gives natives a generally quick temper. Fortunately, they’re usually as quick to forget what got them angry in the first place.
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
                The need for escape is generally strong, and some Solar Sagittarians come across as a little irresponsible. They’re generally easy to forgive, however. After all, their direct, honest approach in life is admirable.
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
export default AboutSag