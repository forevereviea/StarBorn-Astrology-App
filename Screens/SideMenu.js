import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUserPen, faImage, faHouse, faDuotone, faStarShooting, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStars, faStar, faAngellist } from '@fortawesome/free-regular-svg-icons';
import PeaceOut from '../Images/peaceOut.png';
import House from '../Images/houseSolid.png';
import Scroll from '../Images/scroll.png';
import Star from '../Images/star.png';
import Sun from '../Images/sun.png';
import Stars from '../Images/stars.png';
import AddPic from '../Images/addPic.png';
import logOut from '../Images/logOut.png';
import Home from '../Screens/Home';
import menu from '../Images/menu.png';
import { useNavigation } from '@react-navigation/native';
import AboutAstrology from '../Screens/AboutPlanets';
export default function SideMenu(icon, { navigation }) {
  // MAKE SURE TO ADD NAVIGATION AND Link to HOME PAGE Ex: useState('Home')
  const [currentTab, setCurrentTab] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const menuHandle = (bool) => {
    setShowMenu(bool);
  }
  return (
    <>
                      <SafeAreaView style={styles.container}>
                        <ImageBackground
                          style={styles.BackImage} source={require('../Images/background.png')}
                        >
                          <View style={{ justifyContent: 'flex-start', padding: 15 }}>
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={() => {
                                setCurrentTab(icon)
                              }}>
                              <FontAwesomeIcon icon={faUserPen} size={50} style={{
                                color: currentTab == icon ? "#a7e1ed" : "black",
                                marginLeft: 2
                              }} />
                              <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                  marginTop: 3,
                                  fontSize: 10,
                                  color: currentTab == icon ? "#a7e1ed" : "black"
                                }}>Add Picture</Text>
                              </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                              <Text style={{ fontSize: 12, color: 'black', marginLeft: 1 }}>User:</Text>
                              {/* NEED TO CONNECT USER NAME LIKE EX: {USERNAME} */}
                              <Text style={{
                                fontSize: 20,
                                color: 'black',
                                marginLeft: 5,
                                fontWeight: 'bold'
                              }}>
                                Ev</Text>
                            </View>

                            <View style={styles.logoutTabs}>
                              {
                                // tab Bar Buttons..
                              }
            
                              {TabButton1(currentTab, setCurrentTab, "Home", House)}
                              {/* {TabButton1(currentTab, setCurrentTab, "Birth Charts", Star)}
                              {TabButton1(currentTab, setCurrentTab, "Create Birth Chart", Scroll)}
                              {TabButton1(currentTab, setCurrentTab, "Zodiac Signs", Sun)}
                              {TabButton1(currentTab, setCurrentTab, "About Astrology", Stars)}

                              <View style={{ marginTop: 280 }}>
                               {TabButton1(currentTab, setCurrentTab, "LogOut", logOut)}
                              </View> */}
                            </View>
                          </View>
                        </ImageBackground>
                      </SafeAreaView>


    </>

  );
}

// for multiple tab btns
const TabButton1 = ({ navigation}) => {
  return (
    <TouchableOpacity>
      <View
        style={({pressed}) =>  [, {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: pressed ? 'white' : 'transparent',
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8,
            width: 200,
            marginTop: 15
        }]}>
        {/* <FontAwesomeIcon icon={ faStar } size={25} style={{
       color: currentTab == title ? "#8f7bdc" : "black"
     }} /> */}
        <Image source={House} style={({pressed}) => [{
            width: 22, height: 20,
            tintColor: pressed ? "#8f7bdc" : "black"

        }]}></Image>
        <Text style={({pressed}) => [, {
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            color: pressed ? "#8f7bdc" : "black"
        }]}>
          Home
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const pickImage = () => {
  return (
    {
      // code
    }
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  BackImage: {
    height: 900,
    width: 400,
    resizeMode: 'cover',
    position: 'absolute'
  },
  logoutTabs: {
    flexGrow: 1,
    marginTop: 50
  }

});