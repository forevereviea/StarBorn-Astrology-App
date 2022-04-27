import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, ImageBackground, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from '../Images/profile.png';
// Tab ICons...
import home from '../Images/houseSolid.png';
import scroll from '../Images/scroll.png';
import sun from '../Images/sun.png';
import stars from '../Images/stars.png';
import logout from '../Images/logOut.png';
// Menu
import menu from '../Images/menu.png';
import close from '../Images/close.png';

// Photo
import photo from '../Images/profile.png';
import AboutPlanets from '../Screens/AboutPlanets';


const {height, width} = Dimensions.get('window');

export default function App({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    <>
      <SafeAreaView>
        <ImageBackground
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            flex: 1,
            resizeMode: 'cover',
            resizeMode: 'stretch',
            position: 'absolute'

          }} source={require('../Images/background.png')}>

          <View style={{ justifyContent: 'flex-start', padding: 15 }}>
            <View style={{ flexGrow: 1, marginTop: 50 }}>
              {
                // Tab Bar Buttons....
              }

              {TabButton(currentTab, setCurrentTab, "Home", home)}
              {TabButton(currentTab, setCurrentTab, "About Planets", scroll)}
              {TabButton(currentTab, setCurrentTab, "Birth Charts", stars)}
              {TabButton(currentTab, setCurrentTab, "Zodiac Signs", sun)}

            </View>

            <View>
              {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
            </View>

          </View>

          {
            // Over lay View...
          }

          <Animated.View style={{
            flexGrow: 1,
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderRadius: showMenu ? 15 : 0,
            // Transforming View...
            transform: [
              { scale: scaleValue },
              { translateX: offsetValue }
            ]
          }}>

            {
              // Menu Button...
            }

            <Animated.View style={{
              transform: [{
                translateY: closeButtonOffset
              }]
            }}>
              <TouchableOpacity onPress={() => {
             
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true
                })
                  .start()

                setShowMenu(!showMenu);
              }}>

                <Image source={showMenu ? close : menu} style={{
                  width: 20,
                  height: 20,
                  tintColor: 'black',
                  marginTop: 40,

                }}></Image>

              </TouchableOpacity>

              <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
              }}>{currentTab}</Text>

              <Image source={photo} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25
              }}></Image>

              <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
                , paddingTop: 15,
                paddingBottom: 5
              }}>Jenna Ezarik</Text>

              <Text style={{
              }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text>
            </Animated.View>

          </Animated.View>
        </ImageBackground>

      </SafeAreaView>
    </>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {

const homeHandle = ({ navigation }) => {
  navigation.navigate('Home');
}
  return (

    <TouchableOpacity onPress={() => {
      if (title == "Home") {
       homeHandle();
      }
      if (title === "About Planets") {
        navigation.navigate('AboutPlanets')
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})