import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutTaurus = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Taurus</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Bull </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Earth </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Venus </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> April 20th - May 20th </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Taurus </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                There is something very solid about Taurus natives, no matter what the rest of their charts say about them. Though they are dependable most of the time, this generally shows itself more in habit than in outright helpfulness. Taurus natives are sensual folk–and this includes sex, but extends to pleasures in all areas: they delight in the sensual pleasures of food, a comfortable blanket, a richly colored aquarium to look at, the smell of flowers or spring rain, pleasing melodies coming from their stereos, and so forth. Some might even say they live through their senses more than most.
                </Text>
                <Text style={styles.paragraph}>
                When Taurus natives work, they work hard. They do it with a steadiness that may rarely be considered quick–rather it’s a dependable, plodding, and steady effort that has its payoffs. Security is immensely important to Taurus–some of them actively seek wealth, while others are content to be “comfortable”. The Taurus definition of “comfortable” may not be exactly the same as the rest of the signs, but comfort is definitely a driving force.
                </Text>
                <Text style={styles.paragraph}>
                Although hard-working, their fixed and comfort-loving nature sometimes makes them appear lazy. This is only because they separate work and leisure so well. When they work, they work hard, and when they play, they don’t really “play” as such…they relax. A Solar Taurus who has kicked his or her feet up is rooted there–you’d be hard-pressed to get them to move. On a mental level, you’ll likely have the same problem. Taureans stick with things and ideas, and therein lies one of the reasons why they are known for their stubbornness. Taurus is a fixed sign, and they have a fair measure of tradition and steadiness in their make-up that keeps them rooted.
                </Text>
                <Text style={styles.paragraph}>
                The possessiveness associated with Taurus shows up in all areas of life in some way. Taurus likes to own things (and sometimes people). A nice home, a piece of land (this can be modest), a paid-off car, that aquarium mentioned earlier, a couple of pets, maybe a solid business…In love and relationship, there is an earthy kind of possessiveness that may be considered jealousy by some, but there is actually quite a difference between being possessive and being jealous. Taurus natives are rarely jealous and petty. They do, however, think of the people they love as theirs–it adds to their sense of security.
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
    subHeader: {
        marginTop: 10,
       marginLeft: 100,
       fontSize: 20,
      fontWeight: 'bold'
    },
    paragraph: {
        margin: 10,
        textAlign: 'center'
    }
})
export default AboutTaurus