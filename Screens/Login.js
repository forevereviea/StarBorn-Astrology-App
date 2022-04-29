import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground, Dimensions, StyleSheet, Text, Button, View, Image, TextInput, ScrollView, SafeAreaView, Pressable, Alert, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import logo from '../Images/StarBornLogo.png';
import background from '../Images/backgroundLessV.png';
import DashBoard from './DashBoard';

const {height, width} = Dimensions.get('window');

const Login = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const image = { uri: '.../Images/StarBorn.png' };

    const handleLogin = async () => {
        await fetch("https://backend-api-test-ea.azurewebsites.net/User/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Username": username,
                "Password": password
            })
        }).then(resp => resp.json())
          .then(data => {
                if (data.token != null) {
                    
                    AsyncStorage.setItem('SaltHashId', data.id.toString());


                    Alert.alert("Welcome Back User: " + username);
                    
                    fetch("https://backend-api-test-ea.azurewebsites.net/BirthChart/GetBirthCharts/" + data.id, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            },
                        }).then(resp1 => resp1.json())
                        .then(data1 => {
                            AsyncStorage.getItem("SaltHashId").then((value) => {
                                // console.log(value);
                                AsyncStorage.setItem(value, JSON.stringify(data1));
                                setUsername('');
                                setPassword('');
                                navigation.navigate('DashBoard');
                            })
                            .then(res => {
                                //do something else
                            });
                        })
                } else {
                    Alert.alert("Invalid Username or Password, Try Again");
                }

            })
    }

    // useEffect(() => {
    //    console.log('clear Input');
    // }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../Images/backgroundLessV.png')}
                    style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                        flex: 1,
                        resizeMode: 'cover',
                        resizeMode: 'stretch',
                        position: 'absolute'

                    }}>
                    <KeyboardAvoidingView style={{ flex:1,
                     width: Dimensions.get('window').width,
                     paddingHorizontal: 20
                    }}
                    >

                    <ScrollView>
                    <Image style={{
                        height: 150,
                        width: 300,
                        display: 'flex',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        margin: 10,
                        marginTop: 100
                    } }source={require('../Images/StarBornLogo.png')} /> 
                    <TouchableWithoutFeedback>

                        <View style={styles.login}>
                            <Text style={styles.loginHeader}>Login</Text>
                            <Text style={styles.txtStyle}>Username</Text>
                            <TextInput
                                style={styles.inputs}
                                placeholder="Enter Username"
                                value={username}
                                onChangeText={setUsername}
                            />
                            <Text style={styles.txtStyle}>Password</Text>
                            <TextInput
                                style={styles.inputs}
                                secureTextEntry={true}
                                placeholder="Enter Password"
                                value={password}
                                onChangeText={setPassword}
                            />
                            <Pressable style={({ pressed }) => [styles.btn, {
                                opacity: pressed ? .5 : 1
                            }]}
                                // onPress={handleLogin}
                                onPress={()=> {
                                    handleLogin();
                                }}
                            >
                                <Text style={{ color: "white", fontWeight: 'bold' }}>Login</Text>
                            </Pressable>

                            <Pressable
                                style={styles.marginUp}
                                onPress={() => navigation.navigate("CreateAccount")}
                            >
                                <Text style={styles.createAcc}>Don't Have An Account? Create One!</Text>
                            </Pressable>
                        </View>
                    </TouchableWithoutFeedback>
                        {/* </ImageBackground> */}
                    </ScrollView>
                    </KeyboardAvoidingView>

                </ImageBackground>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // backgroundColor: 'rgb(184, 181, 255)'
    },
    StarbornLogo: {
        marginTop: 0,
        justifyContent: 'center',
        height: 265,
        width: 400,
        alignSelf: 'center'
    },
    login: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 50
    },
    inputs: {
        borderBottomWidth: .5,
        padding: 15,
        margin: 20
    },
    txtStyle: {
        marginLeft: 20
    },
    btn: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    loginHeader: {
        justifyContent: 'center',
        marginLeft: 150,
        fontSize: 30
    },
    createAcc: {
        marginTop: 20,
        justifyContent: 'center',
        marginLeft: 67,
        color: 'black',
        height: 20,
        width: 300,
        alignSelf: 'center'
    },
    Starborn: {
        marginTop: 0,
        height: 550,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})


export default Login