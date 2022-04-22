import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutPisces = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Pisces</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Fish </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Water </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Neptune </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> February 19th - March 20th </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Pisces </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                As the twelfth and last sign of the zodiac, Pisces contains within itself a little experience of all the signs. This gives Pisces Suns the ability to identify with people from all walks of life–from all backgrounds–in some way. These individuals are not only changeable and adaptable, they have open minds and tremendous understanding. But Pisces itself is often misunderstood. Pisces Suns may spend a good portion of their lives yearning for understanding, and the other part in a state of divine discontent. Suffering is sometimes glamorized in the Piscean world.
                </Text>
                <Text style={styles.paragraph}>
                Sun in Pisces people are frequently pegged as wishy-washy, but this is all a matter of opinion. What you will find behind a vaguely directionless, spacey manner is a deep person with real dreams. Their dreams are more than getting that picket fence or making it up the corporate ladder. Pisces are tuned in to a higher purpose and their dreams transcend the individual. A deep love for humanity and compassion that knows no bounds are found with this placement of the Sun.
                </Text>
                <Text style={styles.paragraph}>
                Pisceans are not known to be cutthroat business types, nor are they given to throwing themselves out into the world in an aggressive manner. But make no mistake about it, Pisces can be extraordinarily successful when given the chance to express themselves. The arts, marketing, music, teaching, drama, healing arts…these are all fields in which Pisces can find expression. Their imagination, attunement to humanity, and remarkable intuition endow them with enviable gifts of insight and creativity.
                </Text>
                <Text style={styles.paragraph}>
                Pisces is a sensitive sign–both sensitive to criticism and sensitive to others’ feelings. Easily touched by human suffering, at least in theory, Pisces wouldn’t hurt a fly. They believe in people, are deeply hurt by compassionless human behavior, and have a hard time saying no. Harsh realities are avoided either through escapist behavior or self-delusion; but every now and again reality does raise its ugly head and hits Pisces over the head. This is a sad time indeed. Pisces retreats into their own world, self-pitying and giving pep talks to themselves (“I will never trust again!”). Rest assured, though, that these periods are rather short-lived and even useful. Pisces seems to derive energy from their (generally short) bouts of self-pity. They come back stronger, with a spring in their step, ready to face the world again, and just as, if not more, compassionate and trusting as they were before. Some might even wonder if Pisces finds pleasure in suffering. Sometimes this is the case, but most of the time, Pisces pulls a lot of creative energy from sadness. Pisces is the poet or artist with angst, although this trait is often more apparent with Moon in Pisces.
                </Text>
                <Text style={styles.paragraph}>
                Some find Pisces’ tendency to be late for appointments, spaced out behavior, and absent-mindedness amount to irresponsibility. Pisces would be shocked to know this, however. Who me? Pisces wonders. Irresponsible? Pisces Suns absolutely care–their love knows no bounds–but their retreats from ordinary life (whether they are as simple as daydreams or actual departures) that they do seem to need every now and again are not always understandable to no-nonsense signs, such as Virgo or Aries.
                </Text>
                <Text style={styles.paragraph}>
                Many Pisces seem almost allergic to things like shopping lists, maps, directions, and instructions, and for some brave souls, even watches — they prefer to feel their way through life than to follow some plan.
                </Text>
                <Text style={styles.paragraph}>
                We find plenty of artists, poets, and musicians with Sun (and other personal planets) in Pisces. Piscean themes are woven throughout the songs of Billy Corgan of the Smashing Pumpkins and Kurt Cobain of Nirvana, for example.
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
export default AboutPisces