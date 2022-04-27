// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faUser, faUserPen, faImage, faHouse, faDuotone, faStarShooting, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
// import { faStars, faStar, faAngellist } from '@fortawesome/free-regular-svg-icons';
// import PeaceOut from './Images/peaceOut.png';
// import House from './Images/houseSolid.png';
// import Scroll from './Images/scroll.png';
// import Star from './Images/star.png';
// import Sun from './Images/sun.png';
// import Stars from './Images/stars.png';
// import AddPic from './Images/addPic.png';
// import logOut from './Images/logOut.png';
// import Home from './Screens/Home';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import menu from './Images/menu.png';

// const Stack = createNativeStackNavigator();

// export default function App(icon, { navigation }) {
//   // MAKE SURE TO ADD NAVIGATION AND Link to HOME PAGE Ex: useState('Home')
//   const [currentTab, setCurrentTab] = useState("");
//   const [showMenu, setShowMenu] = useState(false);

//   const menuHandle = (bool) => {
//     setShowMenu(bool);
//   }
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator headerMode={false}>
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{
//               headerLeft: () => (
//                 <TouchableOpacity onPress={() => {
//                   menuHandle(!showMenu)
//                 }}>
//                   <Image style={{ width: 50, height: 50, backgroundColor: 'transparent' }} source={menu} />
//                   {showMenu === true ? (

//                     <>
//                       <SafeAreaView style={styles.container}>
//                         <ImageBackground
//                           style={styles.BackImage} source={require('./Images/background.png')}
//                         >
//                           <View style={{ justifyContent: 'flex-start', padding: 15 }}>
//                           </View>
//                           <View>
//                             <TouchableOpacity
//                               onPress={() => {
//                                 setCurrentTab(icon)
//                               }}>
//                               <FontAwesomeIcon icon={faUserPen} size={50} style={{
//                                 color: currentTab == icon ? "#a7e1ed" : "black",
//                                 marginLeft: 2
//                               }} />
//                               <View style={{ flexDirection: 'row' }}>
//                                 <Text style={{
//                                   marginTop: 3,
//                                   fontSize: 10,
//                                   color: currentTab == icon ? "#a7e1ed" : "black"
//                                 }}>Add Picture</Text>
//                               </View>
//                             </TouchableOpacity>
//                             <View style={{ flexDirection: 'row', marginTop: 6 }}>
//                               <Text style={{ fontSize: 12, color: 'black', marginLeft: 1 }}>User:</Text>
//                               {/* NEED TO CONNECT USER NAME LIKE EX: {USERNAME} */}
//                               <Text style={{
//                                 fontSize: 20,
//                                 color: 'black',
//                                 marginLeft: 5,
//                                 fontWeight: 'bold'
//                               }}>
//                                 Ev</Text>
//                             </View>

//                             <View style={styles.logoutTabs}>
//                               {
//                                 // tab Bar Buttons..
//                               }
//                               <View onPress={() => navigation.navigate('Home')}>
//                               {TabButton(currentTab, setCurrentTab, "Home", House)}
//                               </View>
//                               {TabButton(currentTab, setCurrentTab, "Birth Charts", Star)}
//                               {TabButton(currentTab, setCurrentTab, "Create Birth Chart", Scroll)}
//                               {TabButton(currentTab, setCurrentTab, "Zodiac Signs", Sun)}
//                               {TabButton(currentTab, setCurrentTab, "About Astrology", Stars)}

//                               <View style={{ marginTop: 280 }}>
//                                {TabButton(currentTab, setCurrentTab, "LogOut", logOut)}
//                               </View>
//                             </View>
//                           </View>
//                         </ImageBackground>
//                       </SafeAreaView>
//                     </>
//                   ) : (
//                     <Text></Text>

//                   )
//                   }
//                 </TouchableOpacity>
//               )
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>


//     </>

//   );
// }

// // for multiple tab btns
// const TabButton = (currentTab, setCurrentTab, title, image, screen) => {
//   return (
//     <TouchableOpacity onPress={({navigation}) => {
//       if (title == "LogOut") {
//         // ADD LOGOUT
//       }
//       if(currentTab == "Home" ){
//         navigation.navigate('Home')
//       }else{
//         setCurrentTab(title)
//       }
//     }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingVertical: 8,
//           backgroundColor: currentTab == title ? 'white' : 'transparent',
//           paddingLeft: 13,
//           paddingRight: 35,
//           borderRadius: 8,
//           width: 200,
//           marginTop: 15
//         }}>
//         {/* <FontAwesomeIcon icon={ faStar } size={25} style={{
//        color: currentTab == title ? "#8f7bdc" : "black"
//      }} /> */}
//         <Image source={image} style={{
//           width: 22, height: 20,
//           tintColor: currentTab == title ? "#8f7bdc" : "black"
//         }}></Image>
//         <Text style={{
//           fontSize: 15,
//           fontWeight: 'bold',
//           paddingLeft: 15,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',
//           color: currentTab == title ? "#8f7bdc" : "black"
//         }}>
//           {title}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const pickImage = () => {
//   return (
//     {
//       // code
//     }
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   BackImage: {
//     height: 900,
//     width: 400,
//     resizeMode: 'cover',
//     position: 'absolute'
//   },
//   logoutTabs: {
//     flexGrow: 1,
//     marginTop: 50
//   }

// });

// import { StatusBar } from 'expo-status-bar';
// import React, { useRef, useState } from 'react';
// import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import profile from './Images/profile.png';
// // Tab ICons...
// import home from './Images/houseSolid.png';
// import scroll from './Images/scroll.png';
// import sun from './Images/sun.png';
// import stars from './Images/stars.png';
// import logout from './Images/logOut.png';
// // Menu
// import menu from './Images/menu.png';
// import close from './Images/close.png';

// // Photo
// import photo from './Images/profile.png';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AboutPlanets from './Screens/AboutPlanets';
// import { useNavigation } from '@react-navigation/native';

// const Stack = createNativeStackNavigator();

// export default function App({ navigation }) {
//   const [currentTab, setCurrentTab] = useState("Home");
//   // To get the curretn Status of menu ...
//   const [showMenu, setShowMenu] = useState(false);

//   // Animated Properties...

//   const offsetValue = useRef(new Animated.Value(0)).current;
//   // Scale Intially must be One...
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const closeButtonOffset = useRef(new Animated.Value(0)).current;
//   return (
//   <>
//      <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="AboutPlanets"
//           component={AboutPlanets}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//     <SafeAreaView style={styles.container}>

//       <View style={{ justifyContent: 'flex-start', padding: 15 }}>
//         <Image source={profile} style={{
//           width: 60,
//           height: 60,
//           borderRadius: 10,
//           marginTop: 8
//         }}></Image>

//         <Text style={{
//           fontSize: 20,
//           fontWeight: 'bold',
//           color: 'white',
//           marginTop: 20
//         }}>Jenna Ezarik</Text>

//         <TouchableOpacity>
//           <Text style={{
//             marginTop: 6,
//             color: 'white'
//           }}>View Profile</Text>
//         </TouchableOpacity>

//         <View style={{ flexGrow: 1, marginTop: 50 }}>
//           {
//             // Tab Bar Buttons....
//           }

//           {TabButton(currentTab, setCurrentTab, "Home", home)}
//           {TabButton(currentTab, setCurrentTab, "About Planets", scroll)}
//           {TabButton(currentTab, setCurrentTab, "Notifications", stars)}
//           {TabButton(currentTab, setCurrentTab, "Sun", sun)}

//         </View>

//         <View>
//           {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
//         </View>

//       </View>

//       {
//         // Over lay View...
//       }

//       <Animated.View style={{
//         flexGrow: 1,
//         backgroundColor: 'white',
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         paddingHorizontal: 15,
//         paddingVertical: 20,
//         borderRadius: showMenu ? 15 : 0,
//         // Transforming View...
//         transform: [
//           { scale: scaleValue },
//           { translateX: offsetValue }
//         ]
//       }}>

//         {
//           // Menu Button...
//         }

//         <Animated.View style={{
//           transform: [{
//             translateY: closeButtonOffset
//           }]
//         }}>
//           <TouchableOpacity onPress={() => {
//             // Do Actions Here....
//             // Scaling the view...
//             Animated.timing(scaleValue, {
//               toValue: showMenu ? 1 : 0.88,
//               duration: 300,
//               useNativeDriver: true
//             })
//               .start()

//             Animated.timing(offsetValue, {
//               // YOur Random Value...
//               toValue: showMenu ? 0 : 230,
//               duration: 300,
//               useNativeDriver: true
//             })
//               .start()

//             Animated.timing(closeButtonOffset, {
//               // YOur Random Value...
//               toValue: !showMenu ? -30 : 0,
//               duration: 300,
//               useNativeDriver: true
//             })
//               .start()

//             setShowMenu(!showMenu);
//           }}>

//             <Image source={showMenu ? close : menu} style={{
//               width: 20,
//               height: 20,
//               tintColor: 'black',
//               marginTop: 40,

//             }}></Image>

//           </TouchableOpacity>

//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             color: 'black',
//             paddingTop: 20
//           }}>{currentTab}</Text>

//           <Image source={photo} style={{
//             width: '100%',
//             height: 300,
//             borderRadius: 15,
//             marginTop: 25
//           }}></Image>

//           <Text style={{
//             fontSize: 20,
//             fontWeight: 'bold'
//             , paddingTop: 15,
//             paddingBottom: 5
//           }}>Jenna Ezarik</Text>

//           <Text style={{
//           }}>Techie, YouTuber, PS Lover, Apple Sheep's Sister</Text>
//         </Animated.View>

//       </Animated.View>

//     </SafeAreaView>
//   </>
//   );
// }

// // For multiple Buttons...
// const TabButton = (currentTab, setCurrentTab, title, image) => {
//   return (

//     <TouchableOpacity onPress={() => {
//       if (title == "LogOut") {
//         // Do your Stuff...
//       }
//       if (title === "About Planets") {
//         navigation.navigate('AboutPlanets')
//       }else {
//         setCurrentTab(title)
//       }
//     }}>
//       <View style={{
//         flexDirection: "row",
//         alignItems: 'center',
//         paddingVertical: 8,
//         backgroundColor: currentTab == title ? 'white' : 'transparent',
//         paddingLeft: 13,
//         paddingRight: 35,
//         borderRadius: 8,
//         marginTop: 15
//       }}>

//         <Image source={image} style={{
//           width: 25, height: 25,
//           tintColor: currentTab == title ? "#5359D1" : "white"
//         }}></Image>

//         <Text style={{
//           fontSize: 15,
//           fontWeight: 'bold',
//           paddingLeft: 15,
//           color: currentTab == title ? "#5359D1" : "white"
//         }}>{title}</Text>

//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5359D1',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
// })

// MY CODE
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateBirthChart from './Screens/CreateBirthChart';
import Login from './Screens/Login';
import CreateAccount from './Screens/CreateAccount';
import Home from './Screens/Home';
import BirthCharts from './Screens/BirthCharts';
import Quote from './Screens/Quote';
import WhatIsAstrology from './Screens/WhatIsAstrology';
import AboutPlanets from './Screens/AboutPlanets';
import ZodiacSigns from './Screens/ZodiacSigns';
import SideMenu from './Screens/SideMenu';
import 'react-native-gesture-handler';
import { ChartProvider } from './Context/ChartContext';


// About Zodiac Signs Page
import Aries from './AboutSigns/AboutAries';
import Taurus from './AboutSigns/AboutTaurus';
import Gemini from './AboutSigns/AboutGemini';
import Cancer from './AboutSigns/AboutCancer';
import Leo from './AboutSigns/AboutLeo';
import Virgo from './AboutSigns/AboutVirgo';
import Libra from './AboutSigns/AboutLibra';
import Scorpio from './AboutSigns/AboutScorpio';
import Sag from './AboutSigns/AboutSag';
import Capricorn from './AboutSigns/AboutCapricorn';
import Aquarius from './AboutSigns/AboutAquarius';
import Pisces from './AboutSigns/AboutPisces';

// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import * as SplashScreen from 'expo-splash-screen';
import * as ErrorRecovery from 'expo-error-recovery';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ChartProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode={false}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
            />
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Quote"
              component={Quote}
            />
            <Stack.Screen
              name="WhatIsAstrology"
              component={WhatIsAstrology}
            />
            <Stack.Screen
              name="AboutPlanets"
              component={AboutPlanets}
            />
            <Stack.Screen
              name="BirthCharts"
              component={BirthCharts}
              options={{ title: 'Birth Charts' }}
            />
            <Stack.Screen
              name="CreateBirthChart"
              component={CreateBirthChart}
              options={{ title: 'Create A Birth Chart' }}
            />
            <Stack.Screen
              name="ZodiacSigns"
              component={ZodiacSigns}
              options={{ title: 'All Zodiac Signs' }}
            />

            {/* About Zodiac Signs Pages */}
            <Stack.Screen
              name="Aries"
              component={Aries}
            />
            <Stack.Screen
              name="Taurus"
              component={Taurus}
            />
            <Stack.Screen
              name="Gemini"
              component={Gemini}
            />
            <Stack.Screen
              name="Cancer"
              component={Cancer}
            />
            <Stack.Screen
              name="Leo"
              component={Leo}
            />
            <Stack.Screen
              name="Virgo"
              component={Virgo}
            />
            <Stack.Screen
              name="Libra"
              component={Libra}
            />
            <Stack.Screen
              name="Scorpio"
              component={Scorpio}
            />
            <Stack.Screen
              name="Sag"
              component={Sag}
            />
            <Stack.Screen
              name="Capricorn"
              component={Capricorn}
            />
            <Stack.Screen
              name="Aquarius"
              component={Aquarius}
            />
            <Stack.Screen
              name="Pisces"
              component={Pisces}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ChartProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, BackImage: {
    height: 900,
    width: 400,
    resizeMode: 'cover',
    position: 'absolute'
  }
});