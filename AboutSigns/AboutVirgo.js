import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView, ScrollView  } from 'react-native';

const AboutVirgo = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
            <View>
            <Text style={styles.HeaderTxt}>Virgo</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Symbol: </Text>
                <Text> Maiden </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Element: </Text>
                <Text> Earth </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Ruling Planet: </Text>
                <Text> Mercury </Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.element}>Birth Dates Range: </Text>
                <Text> August 23rd - September 22nd </Text>
            </View>
            
            <View style={styles.row1}>
            <Text style={styles.subHeader}>Sun in Virgo </Text>
            </View>
            <View>
                <Text style={styles.paragraph}>
                It is rare to find the stereotypical nitpicky, exacting, “clean freak” in modern-day Virgos. Although the sign of Virgo has evolved with the times, there are some unmistakable traits that remain. Virgo people are generally respectable, hard-working individuals who have a love of knowledge and know-how. Virgo’s symbol, the Virgin, shows itself in the lives of Virgos through a love of all that is “natural” and a certain purity of spirit that keeps Virgos self-sufficient and self-contained, at least on the surface. Virgos are sensitive to their surroundings, and they tend to embarrass easily. They are generally reticent when faced with anything or anyone new. However, once they feel comfortable, they can talk up a storm. Many Virgo Suns are not too comfortable in the limelight. These types are just fine living in the background, as long as they feel useful and appreciated. Solar Virgos have a strong sense of responsibility. Even when they’ve convinced themselves to be irresponsible about something or the other, they worry about it.
                </Text>
                <Text style={styles.paragraph}>
                Not all Virgos are workaholics. However, when Solar Virgos are not involved in some kind of project, there is generally a vague feeling of discontent. Even when their lives are filled up with work, they are restless and somewhat nervous creatures. The fear of under-performing is often strong. Virgos want to do things well. Some are exacting and thorough, and those Virgos who have convinced themselves to do a less-than-perfect job will generally feel incomplete.
                </Text>
                <Text style={styles.paragraph}>
                Virgo, as an Earth sign, has a notable connection to the body. Solar Virgos are generally very body-aware. In some cases, this shows up as some form of hypochondria, but, for the most part, Virgo is simply quite concerned with health matters and nutrition. Virgo is attracted to all that is natural and pure but is generally unafraid to explore all that is not. In fact, Virgo is an intensely curious sign. Still, there is a strong desire to remain pure on some level, despite all of Virgo’s curiosity and drive to know things. Those Virgos that find a true interest or “calling” easily become connoisseurs–their attention to details and enormous observation powers give them the ability to learn all of the ins and outs of any subject. These people love to do research, in addition to analytic or detail work. They’ll happily pick apart practically anything, although they are less adept at putting things back together, and often have trouble grasping the big picture.
                </Text>
                <Text style={styles.paragraph}>
                Virgo Suns who are stuck in the practical, material world may learn a lot about themselves if they are brave enough to try placing their lives on automatic pilot once in a while. Letting some things go will do wonders for their spirit. Virgos tend to be too hard on themselves. They worry about their health, their performance at work, all the things they haven’t done, and the emails that might be waiting for them while they are away from their computer. When they’re not feeling well, they can be overly critical and nervous. They fuss around, have a whole slew of assorted little complaints, and throw small tantrums.
                </Text>
                <Text style={styles.paragraph}>
                Solar Virgos are perfectionists–there’s simply no escaping it. They dream of mastery; they long to do something really well. Some  Virgos are so scared of their own perfectionist qualities that they tell themselves they don’t care. Others will forever dabble into one thing or another, leaving a string of incomplete projects behind them. However, the happiest Virgos accept their need to get things right, without overdoing it. Probably the best advice for Sun in Virgo people is to find something that interests them–however small or large–and master it.
                </Text>
                <Text style={styles.paragraph}>
                Most Virgos can be rather private and fussy about their work, or their personal workspace. They get nervous when others look at their unfinished work, and they are quite protective of their methods of doing things. Despite an overall lack of confidence, Virgos can be mighty proud–even arrogant–when it comes to their work, routines, or hobbies. Secretly, they think their methods of doing things are the best. Often, they are! They do take pride in the little things they do, even though, in a broader sense, Virgos can be rather self-effacing and self-critical.
                </Text>
                <Text style={styles.paragraph}>
                Solar Virgos often confuse people when their curiosity is mistaken for passion. The surprising part is that Virgo, although knowledgeable, doesn’t always get its hands dirty. Their willingness to explore is often kept at the intellectual level. However, Virgos are often well-respected and valued in their circles for their loyalty, research skills, willingness to lend a hand, and their excellent powers of observation. They are generally kind and helpful souls who, when appreciated, do everything to make things work.
                </Text>
                <Text style={styles.paragraph}>
                There’s an odd combination of the intellectual and the practical in Virgo that is sometimes mistaken for coolness. In fact, Virgos are often self-effacing and shy. They’ll brush off your compliments quickly and, sometimes, critically; but don’t let that fool you. They need your respect and appreciation. In fact, the happiest Virgos are the ones who feel appreciated and useful. Add plenty of worthwhile projects to keep them busy, and Virgos can be some of the sweetest, kindest people around.
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
export default AboutVirgo