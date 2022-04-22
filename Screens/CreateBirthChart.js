import React, { useState, useRef } from 'react';
import { StyleSheet, Dimensions, ImageBackground, Text, View, Image, Alert, Modal, Button, Pressable, TextInput, ScrollView, SafeAreaView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window');
const CreateBirthChart = ({ navigation }) => {
    
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = React.useState(null);
    const [location, onChangeLocation] = useState(null);
    const [chart, setChart] = useState('');
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


    // getNatalVariables
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [hour, setHour] = useState();
    const [min, setMin] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [tzone, setTzone] = useState();

    const formatAMPM = (times) => {
        let hours = times.getHours();
        let minutes = times.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    const getBirthPlace = async () => {
        await fetch("https://api.myptv.com/geocoding/v1/locations/by-text?searchText=" + location, {
            method: "GET",
            headers: {
                "ApiKey": "OWIxNzUwNTM4OWFmNDk1MDllYTdjOTM0MDMyOTU4YTU6YzA0NjllMTgtOGE4Zi00MDhhLTlkNTQtYTg1NmY4ZWQ3ZWNk"
            },
        })
            .then(resp => resp.json())
            .then(data => {
                setDay(date.getDate());
                setMonth(date.getMonth() + 1);
                setYear(date.getFullYear());
                setHour(time.getHours());
                setMin(time.getMinutes())
                setLat(data.locations[0].referencePosition.latitude);
                setLon(data.locations[0].referencePosition.longitude);
                setTzone(-7);
                // console.log('lat: ', data.locations[0].referencePosition.latitude);
                // console.log('lon: ', data.locations[0].referencePosition.longitude);
                // console.log('day: ', date.getDate());
                // console.log('month: ', date.getMonth()+1);
                // console.log('year: ', date.getFullYear());
                // console.log('hour: ', time.getHours());
                // console.log('min: ', time.getMinutes());
                getNatalWheel(date.getDate(), date.getMonth() + 1, date.getFullYear(), time.getHours(), time.getMinutes(), data.locations[0].referencePosition.latitude, data.locations[0].referencePosition.longitude, -7);
                getPlanets(
                    date.getDate(), date.getMonth() + 1, date.getFullYear(), time.getHours(), time.getMinutes(), data.locations[0].referencePosition.latitude, data.locations[0].referencePosition.longitude, -7);
            })
    }

    const getNatalWheel = async (day, month, year, hour, min, lat, lon, tzone) => {
        await fetch("https://json.astrologyapi.com/v1/natal_wheel_chart", {
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
                setChart(data.chart_url)
                setModalVisible(true);
            })

        // console.log(day);
        // console.log(month);
        // console.log(year);
        // console.log(hour);
        // console.log(min);
        // console.log(lat);
        // console.log(lon);
        // console.log(chart);
    }

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

    // const generateWheel = () => {
    //     getNatalWheel();
    //     getPlanets();
    // }

    const pressedBtn = () => {
        getNatalWheel();
        getBirthPlace();
        getPlanets();
        // console.log(date.toLocaleDateString('en-US'));
        // console.log(formatAMPM(time));
    }

    const onChangeTextInput = () => {
        if (name === null) {
            Alert.alert('Please Enter Name');
        }
        if (location === null) {
            Alert.alert('Please Enter Location');
        } else {
            pressedBtn();

        }
    }
    // local storage saving user
    const saveUserInputs = async () => {
        // await clearAsyncStorage();
        let username = await AsyncStorage.getItem('username');
        let userInputs = await AsyncStorage.getItem(username);
        if (userInputs == null) {
            userInputs = [];
        } else {
            userInputs = JSON.parse(userInputs);
        }
        let inputs = {
            name,
            "day": day,
            "month": month,
            "year": year,
            "hour": hour,
            "min": min,
            "lat": lat,
            "lon": lon,
            "tzone": tzone
        };
        userInputs.push(inputs);
        await AsyncStorage.setItem(username, JSON.stringify(userInputs));
    }

    clearAsyncStorage = async () => {
        AsyncStorage.clear();
    }

    const check = () => {
        console.log("Is this working");
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../Images/background.png')}
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        position: 'absolute',
                        resizeMode: 'cover',
                        alignItems: 'center',
                        borderRadius: 50
                    }}
                >

                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.BCHeader}>My Personal BirthChart</Text>
                        <View style={{ backgroundColor: "white", height: 1, marginTop: 20 }}>
                        </View>
                        <View>
                            <Text style={styles.subInput}>Enter Name:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={
                                    (name) => setName(name)
                                }
                                // value={name}
                                placeholder="Name"
                            // keyboardType="numeric"
                            />
                            <Text style={styles.subInput}>Enter Birth Date:</Text>
                            <DatePicker style={styles.datePicker} date={date} mode='date' onDateChange={setDate} />
                            <Text style={styles.subInput}>Enter Birth Time:</Text>
                            <DatePicker style={styles.datePicker} date={time} mode='time' onDateChange={setTime} />

                            <Text style={styles.subInput}>Enter Birth Location:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(location) => onChangeLocation(location)}
                                // value={location}
                                placeholder="City,State,Country (ex: Sacramento, Ca, USA)"
                            // keyboardType="numeric"
                            />
                        </View>


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
                                        <View>
                                            <ImageBackground
                                                source={require('../Images/background.png')}
                                                style={{
                                                    height: height / 2,
                                                    width: width / 1.4,
                                                    borderRadius: 50
                                                }}
                                            >
                                        <View style={styles.ExitModal}>
                                            <Pressable
                                                onPress={() => setModalVisible(!modalVisible)}
                                            >
                                                <Text>X</Text>
                                            </Pressable>
                                        </View>
                                        <Text>Welcome to {name}'s Birth Chart</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Ascendant is in: </Text>
                                            <Text>{ascendantSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Sun is in: </Text>
                                            <Text>{sunSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Moon is in: </Text>
                                            <Text>{moonSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Mercury is in: </Text>
                                            <Text>{mercurySign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Venus is in: </Text>
                                            <Text>{venusSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Mars is in: </Text>
                                            <Text>{marsSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Jupiter is in: </Text>
                                            <Text>{jupiterSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Saturn is in: </Text>
                                            <Text>{saturnSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Uranus is in: </Text>
                                            <Text>{uranusSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Neptune is in: </Text>
                                            <Text>{neptuneSign}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text>Your Pluto is in: </Text>
                                            <Text>{plutoSign}</Text>
                                        </View>
                                        {/* <Text style={styles.modalText}>{date}</Text> */}

                                        <Button
                                            style={[styles.button, styles.buttonClose]}
                                            title="Save Birth Chart"
                                            onPress={() => {
                                                saveUserInputs();
                                                setModalVisible(!modalVisible);
                                                navigation.push('BirthCharts');
                                                Alert.alert("Birth Chart Saved!");
                                            }
                                            }
                                        // onRequestClose={() => {
                                        //     setModalVisible(!modalVisible);
                                        //     Alert.alert("Birth Chart Saved.");
                                        // }}
                                        />

                                            </ImageBackground>
                                        </View>
                                        {/* <ScrollView> */}
                                        {/* <Text style={styles.modalText}>Welcome to {name}'s Birth Chart!
                                        {date.toLocaleDateString('en-US')} {formatAMPM(time)}
                                        Birth Place: {location}

                                    </Text> */}
                                        {/* <View>
                                        <Image style={styles.natalWheel} source={{ uri: 'https://s3.ap-south-1.amazonaws.com/western-chart/a7497dd0-a997-11ec-b626-7bbd2ee32d49.svg' }} />
                                    </View> */}
                                        {/* <View style={sty}>

</View> */}
                                        
                                        {/* here */}
                                        {/* <Text style={styles.textStyle}>Save Birth Chart</Text> */}

                                        {/* </ScrollView> */}
                                    </View>
                                </View>
                            </Modal>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => onChangeTextInput()
                                }
                            // onRequestClose={() => {
                            //     setModalVisible(!modalVisible);
                            //     // Alert.alert("Modal has been closed.");
                            // }}
                            >
                                <Text style={styles.textStyle}>Create</Text>
                            </Pressable>
                        </View>
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
    BCHeader: {
        fontSize: 50,
        alignSelf: 'center',
        display: 'flex',
        fontSize: 50,
        color: 'white',
        fontFamily: 'Palatino-Italic'
    },
    AddChart: {
        fontSize: 15,
        display: 'flex',
        alignSelf: 'center',
        marginLeft: 5,
        marginTop: 10
    },

    // Modal Styling
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    ExitModal: {
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    button: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 200,
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    buttonOpen: {
        backgroundColor: "black",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: 'Palatino-Bold'
    },
    modalView: {
        margin: 10,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000"
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    subInput: {
        marginTop: 10,
        margin: 12,
        fontFamily: 'Palatino-Bold'
    },
    datePicker: {
        height: 50,
        marginLeft: 11,
        borderColor: 'black',
        borderRadius: 50,
        width: 350
    },
    natalWheel: {
        height: 100,
        width: 100
    }

})
export default CreateBirthChart