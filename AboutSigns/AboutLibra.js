import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView, Dimensions, ImageBackground  } from 'react-native';

const { height, width } = Dimensions.get('window');
const AboutLibra = () => {
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
            <Text style={styles.HeaderTxt}>Libra</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Scales </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Air </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> Venus </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text style={{ fontFamily: 'Palatino' }}> September 23 - October 19th </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Libra </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                Libra natives are generally thought to be sociable, somewhat intellectual souls. They have an almost innocent way about them that makes them very approachable. Generally quite eager to cooperate, Librans spend a lot of their time trying not to rock the boat.
                </Text>
                <Text style={styles.paragraph}>
                In theory, Libras are peace-loving. In practice, they can quietly stir up all sorts of trouble with their ways. Because Libra enjoys balance in their lives, they seek the middle ground. In the process, they may end up trying to be everything to everyone. This is where their reputation for untruthfulness comes from. Generally, their untruths spring from a true desire for peace and fairness–although they may not be comfortable with direct and malicious trickery, they feel totally justified when they lie in order to avoid making waves. Peace at any price! In this sense, they seem harmless. But, what can result is quite a ruckus! People involved with Libras may crib about their lack of directness and their apparent inability to take a stand. Librans are experts at avoiding being the one to blame. When confronted, they’ll (calmly and reasonably) say, “What, me? No, I just want peace.”
                </Text>
                <Text style={styles.paragraph}>
                “On the fence”, “middle ground”, “middle road” — these are all expressions that we can safely associate with Libra.
                </Text>
                <Text style={styles.paragraph}>
                Some more powerful signs may consider Libra a little on the weak side. This is all a matter of opinion, however! Without Libra, life simply wouldn’t be as fair.
                </Text>
                <Text style={styles.paragraph}>
                Librans are known for comparing and thinking in relative terms, instead of in absolutes. This weekend is not just a good weekend, it’s better than last weekend. These people are always looking for the “best” way or the “right” way to live. Harmony is the ultimate goal, but their idealism and high expectations can mean plenty of discontent. Since life presents all of us with an extraordinary amount of choices, if Libra doesn’t learn to live in the moment at least some of the time, they’ll be in a constant state of unrest.
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
                Society needs rules, and these rules attempt to bring justice, equality, and fairness. On an individual level, Libra represents these laws of civilization. Libra comes across as very civilized and rather refined.
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
export default AboutLibra