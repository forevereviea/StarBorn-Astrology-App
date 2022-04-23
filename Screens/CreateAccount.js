import React, { useState } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, StyleSheet, Text, View, Image, TextInput, SafeAreaView, ImageBackground, Dimensions, Pressable, Alert } from 'react-native';


const { height, width } = Dimensions.get('window');
const CreateAccount = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState(0);

    // const handleCreate = async () => {

    //     await fetch("http://localhost:5098/User/AddUser", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: {
    //             "Username": username,
    //             "Password": password
    //     }})
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 if (data.token != null) {
    //                     Alert.alert("Welcome to the StarBorn Astrology App!");
    //                     navigation.navigate('Quote');
    //                 } else {
    //                      Alert.alert("Invalid Username or Password, Try Again");
    //                     //navigation.navigate("MainMenu");
    //                 }
    //     //             console.log(data.token)
    //     // console.log(username);
    //     // console.log(password);

    //             })

    const handleCreate = async () => {
        if (username == "" || password == "") {
            Alert.alert("Error invalid credentials!");
        } else {
            fetch('https://backend-api-test-ea.azurewebsites.net/User/AddUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": 0,
                    "Username": username,
                    "Password": password
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.id > 0) {
                        setUserId(data.id)
                        Alert.alert("Welcome to the StarBorn Astrology App!");
                        navigation.navigate('Quote');
                    } else {
                        Alert.alert("Error Username already exists.  Please try a different Username.");
                    }
                })
        }
    }

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

                    }}

                >
                    <KeyboardAvoidingView style={{
                        flex: 1,
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
                            }} source={require('../Images/StarBornLogo.png')} />

                            <TouchableWithoutFeedback>

                                <View style={styles.login}>
                                    <Text style={styles.loginHeader}>Create Account</Text>
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
                                        placeholder="Enter Password"
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                    <Pressable style={({ pressed }) => [styles.btn, {
                                        opacity: pressed ? .5 : 1
                                    }]}
                                        onPress={handleCreate}
                                    >
                                        <Text style={{ color: "white", fontWeight: 'bold' }}>Create Account</Text>
                                    </Pressable>
                                    <Pressable onPress={() => navigation.navigate('Login')}>
                                        <Text style={styles.createAcc}>
                                            Already Have An Account? Login!</Text>
                                    </Pressable>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(184, 181, 255)'
    },
    StarbornLogo: {
        marginTop: 50,
        justifyContent: 'center',
        height: 189,
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
        marginLeft: 80,
        fontSize: 30,
        marginBottom: 10
    },
    createAcc: {
        marginTop: 20,
        justifyContent: 'center',
        marginLeft: 67,
        color: 'white'
    }
})

export default CreateAccount