import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutCancer = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Cancer</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Crab </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Water </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Moon </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> June 22nd - July 22nd </Text>
            </View>
            
            <View style={styles.row1}>
            <Text  style={styles.subHeader}>Sun in Cancer </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                Sun in Cancer natives have a strong survival instinct. They are protective of those they care about, and of themselves too. They are often quite reticent about sharing their inner selves to the rest of the world, and are often caught up in reminisce. Cancers have a reputation for moodiness, although this trait is most evident when the Moon is in Cancer. Cancer needs roots. They resist change to an extent, and concern themselves about being secure and safe in most everything they do.
                </Text>
                <Text style={styles.paragraph}>
                Cancers can be quite intrigued by objects with history attached to them — antiques, photos, souvenirs, and the like.
                </Text>
                <Text style={styles.paragraph}>
                Cancer is often guided by their feelings as they size up places, people, and situations based on how they make them feel and what they sense of them. Cancers’ lives often grow easier as they get older.
                </Text>
                <Text style={styles.paragraph}>
                Others find Cancers complex, interesting, and sometimes baffling! They’d rather hide their vulnerability, particularly in your youth, although as they age, they learn to work with it. Their love runs deep and they love people, but they need their emotional space from time to time — a retreat of sorts is a necessity.
                </Text>
                <Text style={styles.paragraph}>
                Cancer is a very sensitive sign, and they don’t always appreciate it when you are blunt with them. Their reactions to hurt will depend on how thick a shell they have developed. Most Cancers react by withdrawing or retreating. Some have developed an ability to manipulate others to get what they want. They avoid direct confrontations almost as a rule.
                </Text>
                <Text style={styles.paragraph}>
                Cancers are, in fact, quite yielding and soft when you have them in the right mood. They are one of the more hospitable signs of the zodiac. Sure, they can be touchy and indirect, but they are also very dependable, caring souls.
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
export default AboutCancer