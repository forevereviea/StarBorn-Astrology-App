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