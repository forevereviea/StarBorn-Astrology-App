import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutScorpio = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Scorpio</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Scorpion </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Water </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Mars/Pluto </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> October 23rd - November 21st </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Scorpio </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                Scorpios are known for their intensity. They are determined folk that absolutely throw themselves into whatever they do — but getting them to commit to something is rarely an easy task. In fact, it’s better not to even try to “get them” to do anything. Solar Scorpios absolutely have their own mind. And, their primary motivation is unlikely to be prestige (like their Capricorn friends), or even authority (Leos can have that, too)–it’s real power. Their power can absolutely be of the “behind the scenes” variety, just as long as they have it.
                </Text>
                <Text style={styles.paragraph}>
                To others, Scorpios seem to have plenty of willpower. They probably do. Scorpios do know what they want, and they won’t go out and grab it at the wrong moment. They simply sit back, watch (quite expertly), and then get it only when the moment is just right. This apparent patience is simply their powerful skill at strategy at work.
                </Text>
                <Text style={styles.paragraph}>
                Scorpio isn’t afraid of getting their hands (their bodies, their minds) dirty. The darker side of life intrigues them, and they’re always ready to investigate.
                </Text>
                <Text style={styles.paragraph}>
                Scorpios simply never give up. They have tremendous staying power. They’re not in the slightest intimidated by anybody or anything. Confrontations are not a problem. In fact, talk to any Scorpio about their lives, and you’ll probably be in awe at all they’ve gone through. Trauma seems to follow them wherever they go. When Scorpio learns optimism, instead of expecting the worst, they’ll find that they possess amazing regenerative powers — the power to heal, create, and transform.
                </Text>
                <View style={{ backgroundColor: "black", height: 1, marginTop: 20 }}>
                    </View>

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
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    ScrollView: {
        backgroundColor: 'rgb(184, 181, 255)'
    },
    HeaderTxt:{
        fontSize:50,
        marginLeft: 20
    },
    row1: {
        marginTop: 3,
        marginLeft: 20,
       flexDirection:'row'
    },
    element: {
        fontWeight: 'bold'
    },
    paragraph: {
        margin: 10,
        textAlign: 'center'
    },
    subHeader: {
        marginTop: 10,
        marginLeft: 100,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default AboutScorpio