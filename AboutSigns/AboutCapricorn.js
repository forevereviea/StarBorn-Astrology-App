import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutCapricorn = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Capricorn</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Sea-Goat </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Earth </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Saturn </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> March 21st - April 19th </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.element}>Sun in Capricorn </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                Capricorn is a feet-on-the-ground, eye-on-the-prize sign. Those with Sun in Capricorn have a realistic, grounded approach to life that can be seen no matter how dreamy the rest of the birth chart suggests. These people know how to do things, and to get things done.
                </Text>
                <Text style={styles.paragraph}>
                Some Capricorns naturally turn their backs on things they deem too frivolous. They are very much concerned with things that are worthwhile — and that includes their own lives. Capricorns want to do and be something worthwhile. Like their Earth signs relatives, Taurus and Virgo, they need to feel useful and effective in the real world in order to be satisfied with their lives. But the Capricorn spin on the earth signs is that they have a stronger need for recognition in a worldly sense. They have a strong sense of society and its framework, and they feel most secure when they feel they are doing their part within that framework.
                </Text>
                <Text style={styles.paragraph}>
                Capricorns like to pare things down and take pleasure in the simple things in life. However, many are attracted to status symbols and these ones will wear the best clothes (tasteful ones!) and drive quietly impressive cars.
                </Text>
                <Text style={styles.paragraph}>
                Capricorns can sometimes be rather lonely people, although they rarely let it show. They are often a little reserved–even standoffish. This is generally because they value all things practical, and they’ll seldom wear their emotions on their sleeves unless they have a particularly flamboyant Moon sign.
                </Text>
                <Text style={styles.paragraph}>
                This is a sign that is surely the most resourceful of the zodiac. To some, Capricorns come across as unimaginative, but they can be enormously creative when it comes to the material world. They are generally very capable people with a strong sense of tradition and responsibility.
                </Text>
                <Text style={styles.paragraph}>
                Many Capricorns have mastered the art of making people laugh. Their sense of humor can be of the deadpan variety–they’re generally excellent at keeping a straight face. They can be bitingly sarcastic, too.
                </Text>
                <Text style={styles.paragraph}>
                Capricorns are not known for taking too many risks in life. They value the beaten track and things “tried and true”. This is not to say they are stick-in-the-muds — they simply value the hard work laid down by those who’ve been around before them.
                </Text>
                <Text style={styles.paragraph}>
                Turn to your Capricorn friends for help when you need to really get things done. They’ll have practical advice, and they’ll help you organize and manage your life a little better. Capricorns are generally good with their “word”, dependable, and rather loyal people.
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
    }
})
export default AboutCapricorn