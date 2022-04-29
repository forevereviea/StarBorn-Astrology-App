import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import BirthCharts from './BirthCharts';
import ZodiacSigns from './ZodiacSigns';
import LogOut from './LogOut';
import CreateBirthChart from './CreateBirthChart';
import WhatIsAstrology from './WhatIsAstrology';
import AboutPlanets from './AboutPlanets';
import CreateAccount from './CreateAccount';
const Drawer = createDrawerNavigator();

const LogOutHandle = () => {
    console.log("logOut");
}
const DashBoard = ({navigation}) => {
    return (

    //     <NavigationContainer>
    //   <Drawer.Navigator
    //     drawerContentOptions={{
    //       activeTintColor: '#e91e63',
    //       itemStyle: { marginVertical: 5 },
    //     }}
    //     drawerContent={(props) => <CustomSidebarMenu {...props} />}>
    //     <Drawer.Screen
    //       name="FirstPage"
    //       options={{ drawerLabel: 'First page Option' }}
    //       component={firstScreenStack}
    //     />
    //     <Drawer.Screen
    //       name="SecondPage"
    //       options={{ drawerLabel: 'Second page Option' }}
    //       component={secondScreenStack}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>

        // <DrawerContentScrollView>
        //     <View>
        //     <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} />
        //     <DrawerItem label="About Astrology" onPress={() => navigation.navigate('WhatIsAstrology')} />
        //     <DrawerItem label="Logout" onPress={() => console.log('fired') } />
        //     </View>
        // </DrawerContentScrollView>

        <Drawer.Navigator initialRouteName="Home">

            <Drawer.Screen name="Home Screen" component={Home}
                options={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: 'black',
                        opacity: .7
                    }
                }} />
            <Drawer.Screen name="WhatIsAstrology" component={WhatIsAstrology}
                options={{
                    title: 'What Is Astrology', headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: 'black',
                        opacity: .7
                    }
                }} />
            <Drawer.Screen name="AboutPlanets" component={AboutPlanets}
                options={{
                    title: 'Planets', headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: 'black',
                        opacity: .7
                    }
                }} />
            <Drawer.Screen name="BirthCharts" component={BirthCharts}
                options={{
                    title: 'Birth Charts', headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: 'black',
                        opacity: .7
                    }
                }} />

            <Drawer.Screen name="ZodiacSigns" component={ZodiacSigns}
                options={{
                    title: 'Zodiac Signs', headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: 'black',
                        opacity: .7
                    }
                }} />

            <Drawer.Screen name="LogOut" component={LogOut}
                options={{
                   headerShow: false
                }} />


                
        </Drawer.Navigator>
    )
}

export default DashBoard