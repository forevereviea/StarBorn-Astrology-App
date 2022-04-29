import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOut = ({ navigation }) => {

    const logOutHandle = async () => {
        // console.log('LOGOUT');
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }
    
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        logOutHandle();

    }, []);
  return (
   <>
   <SafeAreaView style={styles.container}>
    <Text style={{ fontSize: 35, alignSelf: "center", alignItems: 'center' }}>Logging Out...</Text>
   </SafeAreaView>
   </>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default LogOut