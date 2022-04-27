import React, { useEffect, useState, useContext } from 'react';
//import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, ImageBackground, Dimensions, Alert, Text, View, Image, Modal, Button, Pressable, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import trash from '../Images/trash.png';
import arrow from '../Images/arrowLeftBk.png';
// import ChartContext from '../Context/ChartContext';

const { height, width } = Dimensions.get('window');
const BirthCharts = ({ navigation }) => {
    // const { counter } = useContext(ChartContext);
    const [userInputs, setUserInputs] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [sunSign, setSunSign] = useState('');
    const [moonSign, setMoonSign] = useState('');
    const [mercurySign, setMercurySign] = useState('');
    const [venusSign, setVenusSign] = useState('');
    const [marsSign, setMarsSign] = useState('');
    const [jupiterSign, setJupiterSign] = useState('');
    const [saturnSign, setSaturnSign] = useState('');
    const [uranusSign, setUranusSign] = useState('');
    const [neptuneSign, setNeptuneSign] = useState('');
    const [plutoSign, setPlutoSign] = useState('');
    const [ascendantSign, setAscendantSign] = useState('');
    //const isFocused = useIsFocused();

    // Context


    const getUsersChart = async () => {
        let SaltHashId = await AsyncStorage.getItem('SaltHashId');
        let userInputs = await AsyncStorage.getItem(SaltHashId);
        if (userInputs == null) {
            userInputs = [];
        } else {
            userInputs = JSON.parse(userInputs);
            console.log(userInputs);
        }

        setUserInputs(userInputs);
        // console.log(userInputs);
    }
    // const data = ["day", "hour", "lat", "lon", "min", "month", "tzone", "year"]

    useEffect(() => {
        getUsersChart();

    }, []);
    //   UseContext useEffect
    // useEffect(() => {
    //     getUsersChart();

    //   }, [counter]);

    //   useFocusEffect(
    //     useCallback(() => {
    //       //Below alert will fire every time when profile screen is focused
    //         alert('Hi from profile');
    //     }, [])
    //   );

    const getPlanets = async (day, month, year, hour, min, lat, lon, tzone) => {
        await fetch("https://json.astrologyapi.com/v1/planets/tropical", {
            method: "POST",
            headers: {
                "Authorization": "Basic NjE5MDMwOmFhMWRiZmFiYjIwYTc3MjA0NTEyYTQ1MjkyYTUzNDgz",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "day": day,
                "month": month,
                "year": year,
                "hour": hour,
                "min": min,
                "lat": lat,
                "lon": lon,
                "tzone": tzone
            })
        })
            .then(resp => resp.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    // console.log(data[i].name);
                    // console.log(data[i].sign);
                    if (data[i].name == 'Sun') {
                        setSunSign(data[i].sign);
                    }
                    if (data[i].name == 'Moon') {
                        setMoonSign(data[i].sign);
                    }
                    if (data[i].name == 'Mercury') {
                        setMercurySign(data[i].sign);
                    }
                    if (data[i].name == 'Venus') {
                        setVenusSign(data[i].sign);
                    }
                    if (data[i].name == 'Mars') {
                        setMarsSign(data[i].sign);
                    }
                    if (data[i].name == 'Jupiter') {
                        setJupiterSign(data[i].sign);
                    }
                    if (data[i].name == 'Saturn') {
                        setSaturnSign(data[i].sign);
                    }
                    if (data[i].name == 'Uranus') {
                        setUranusSign(data[i].sign);
                    }
                    if (data[i].name == 'Neptune') {
                        setNeptuneSign(data[i].sign);
                    }
                    if (data[i].name == 'Pluto') {
                        setPlutoSign(data[i].sign);
                    }
                    if (data[i].name == 'Ascendant') {
                        setAscendantSign(data[i].sign);
                    }
                }
                //console.log(data);
            })

        // console.log(day);
        // console.log(month);
        // console.log(year);
        // console.log(hour);
        // console.log(min);
        // console.log(lat);
        // console.log(lon);
    }

    // const removeByName = (userInputs, name) => {
    //     const requiredIndex = userInputs.removeItem(el => {
    //        return el.name === String(name);
    //     });
    //     if(requiredIndex === -1){
    //        return false;
    //     };
    //     userInputs = !!userInputs.splice(requiredIndex, 1);
    //     setUserInputs(userInputs);
    //     console.log(userInputs);
    //  }

    // const removeByName = () => {
    //     console.log("deleteing");
    // }

    const removeData = async (id, SaltHashId) => {
        await fetch("https://backend-api-test-ea.azurewebsites.net/BirthChart/RemoveBirthChart/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(resp => resp.json())
            .then(data => {
                if (data) {
                    AsyncStorage.getItem(SaltHashId.toString()).then((inputs) => {
                        let userInputs = JSON.parse(inputs);
                        const newUserInputs = userInputs.filter(function (e) { return e.id !== id });
                        AsyncStorage.setItem(SaltHashId.toString(), JSON.stringify(newUserInputs));
                        setUserInputs(newUserInputs);
                    })
                    .then(res => {
                        //do something else
                    });
                }
            })
    }

    const pressedBtn = (item) => {
        getPlanets(item.day, item.month, item.year, item.hour, item.min, item.lat, item.lon, item.tzone);
        // console.log(item);
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../Images/backgroundLessV.png')}
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        position: 'absolute',
                        resizeMode: 'cover',
                        alignItems: 'center'
                    }}
                >

                    <ScrollView style={styles.ScrollView}>
                        <View style={styles.BCView}>
                            <Text style={styles.BirthChartTxt}>Birth Charts</Text>
                        </View>
                        <View style={{ backgroundColor: "white", height: 1, marginTop: 20 }}>
                        </View>
                        {/* Pre-made Users BirthCharts */}
                        <View style={{
                            backgroundColor: 'black',
                            opacity: 0.7
                        }}>
                            <Pressable
                                onPress={() => getUsersChart()}
                            >
                                <View>

                                    {
                                        userInputs.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <Pressable
                                                    onPress={() => {
                                                        pressedBtn(item);
                                                        setModalVisible(true);
                                                    }
                                                    }
                                                >
                                                    <View><Text style={{
                                                        display: 'flex',
                                                        alignSelf: 'center',
                                                        fontSize: 25,
                                                        fontFamily: 'Palatino-Bold',
                                                        color: 'white',
                                                        alignItems: 'center',
                                                        marginTop: 20
                                                    }}>{item.name}'s Birth Chart</Text>

                                                    </View>

                                                </Pressable>
                                                <View style={styles.centeredView}>
                                                    <Modal
                                                        animationType="slide"
                                                        transparent={true}
                                                        visible={modalVisible}
                                                        onRequestClose={() => {
                                                            Alert.alert("Modal has been closed.");
                                                            setModalVisible(!modalVisible);
                                                        }}
                                                    >
                                                        <View style={styles.centeredView}>

                                                            <View style={styles.modalView}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity style={{ justifyContent: 'flex-end' }}
                                                                        onPress={() => setModalVisible(!modalVisible)}
                                                                    >
                                                                        <Image source={arrow}
                                                                            style={{
                                                                                height: 20,
                                                                                width: 20,

                                                                            }} />
                                                                    </TouchableOpacity>
                                                                    <View style={{ width: 260 }}></View>
                                                                    <TouchableOpacity
                                                                        onPress={() => {
                                                                            removeData(item.id, item.saltHashId);
                                                                            setModalVisible(!modalVisible);
                                                                            Alert.alert("Birth Chart has been deleted!");
                                                                        }}
                                                                    >
                                                                        {/* <Text style={styles.textStyle}>Delete Chart</Text> */}
                                                                        <Image source={trash} style={{
                                                                            height: 20,
                                                                            width: 20,
                                                                            // marginRight: 60,
                                                                            justifyContent: 'flex-end'
                                                                        }} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <ScrollView>
                                                                    <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between' }}>
                                                                        <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 25, marginBottom: 8, alignItems: 'center', justifyContent: 'center' }}>
                                                                            {item.name}'s Birth Chart</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15, marginBottom: 5 }}>Your Ascendant is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', display: 'flex' }}>{ascendantSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Native's Self, Physical, Character, Appearance</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Sun is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{sunSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Ego, Basic Personality, Consciousness, Vitality, Stamina</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Moon is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{moonSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Unconsciousness, Emotions, Instincts, Habits, Moods</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Mercury is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{mercurySign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Mindful, Commuication, Intellect, Language, Intelligence</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Venus is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{venusSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Attraction, Love, Relationships, Art, Beauty, Harmony</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Mars is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{marsSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Aggression, Sex, Action, Competition, Courage, Passion</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Jupiter is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{jupiterSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Luck, Growth, Expansion, Optimism, Abundance</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Saturn is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{saturnSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Structure, Law, Responsibility, Ambition, Obligation</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Uranus is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{uranusSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Eccentricity, Unpredictable, Changes, Rebellion, Reformation</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Neptune is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{neptuneSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Dreams, Intuition, Mysticism, Imagination, Delusion</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold', fontSize: 15 }}>Your Pluto is in: </Text>
                                                                            <Text style={{ fontFamily: 'Palatino-Bold' }}>{plutoSign}</Text>
                                                                        </View>
                                                                        <Text style={{ fontFamily: 'Palatino-Italic' }}>Symbolizes</Text>
                                                                        <Text style={{ fontFamily: 'Palatino', fontSize: 10 }}>Transformation, Power, Death, Rebirth, Evolution</Text>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                        </View>
                                                                    </View>
                                                                </ScrollView>
                                                                {/* </ImageBackground> */}
                                                                {/* this one */}
                                                            </View>
                                                        </View>
                                                    </Modal>
                                                </View>
                                                <View style={{ backgroundColor: "white", height: 1, width: width, marginTop: 0 }}>
                                                </View>
                                            </React.Fragment>
                                        ))
                                    }

                                </View>
                            </Pressable>

                        </View>
                        {/* <View style={{ backgroundColor: "black", height: 1, marginTop: 20 }}>
                    </View> */}
                        {/* Goes to Creating another BirthChart */}

                        <Pressable style={({ pressed }) => [styles.btn, {
                            opacity: pressed ? .5 : 1
                        }]}
                            onPress={() =>
                                navigation.navigate('CreateBirthChart')}
                        >
                            <Text style={{ color: "white", fontWeight: 'bold' }}>Create a Birth Chart</Text>
                        </Pressable>
                        {/* <View style={{ backgroundColor: "black", height: 1, marginTop: 20 }}>
                        </View> */}
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    BirthChartTxt: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'white',
        fontFamily: 'Palatino-Italic',
        marginTop: 20
    },
    rowin: {
        flexDirection: 'row',
        height: 120,
        width: 120
    },
    BCView: {
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    },
    btn: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        borderRadius: 50,
        padding: 25,
        alignItems: "center",
        backgroundColor: '#9DCFF2',
        opacity: 1,
        height: height / 1.9,
        width: width / 1.2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    deleteChart: {
        marginLeft: 3
    },
    bothBtns: {
        marginTop: 5
    }
})


export default BirthCharts