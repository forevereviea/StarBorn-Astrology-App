import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutLeo = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Leo</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Lion </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Fire </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Sun </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> July 23rd - August 22nd </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Leo </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                There’s an unmistakably regal air to Solar Leos. These are dignified–even noble–folk. Leos have a reputation for being conceited, but think again. Leos do feel important, but this generally takes the form of wanting to change the world in some way–to make the world a better place. They are generally motivated by affection for people, and often have big dreams and plans to make people happy.
                </Text>
                <Text style={styles.paragraph}>
                Generally, Leos are hard-working. After all, they are attracted to the good things in life, and they know they have to work to get them. It is sometimes difficult to imagine Leos as go-getters if you happen to catch them in one of their languid moods. These people can sleep in, laze around, and luxuriate for long periods of time. However, when they do get to work, they do it with intensity and determination. In this way, they are not unlike their symbol, the lion.
                </Text>
                <Text style={styles.paragraph}>
                The worst thing you can do to a Leo is accuse them of bad intentions. Displaying behavior that makes them think you don’t appreciate them runs a close second. These happy, jovial people become mighty hurt when others don’t see them for their noble intentions.
                </Text>
                <Text style={styles.paragraph}>
                Loyal, and sometimes rather traditional, Leos are, after all, a fixed sign. They’ll hold on to situations and people for a very long time before they give up. There is an unmistakable idealism to Leo’s view of the world and the people in it. Often, Leos have a very noble inner code that they answer to. Although on the surface, Leos appear rather confident, they can actually be some of the most humble souls around. They are the first to blame themselves when something goes wrong. Once again, it’s the Leonine self-importance at work, and this characteristic works in unexpected ways. Instead of being the conceited, self-absorbed show-offs of reputation, they are usually very self-aware, self-conscious, and, yes, even humble.
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
export default AboutLeo