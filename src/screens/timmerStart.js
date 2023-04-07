import { View, Text, StyleSheet, Button, Modal, TouchableOpacity, ScrollView } from 'react-native'
import { colors } from '../constants';
import { Ionicons } from '@expo/vector-icons'
import CustomButton from '../CustomButton/CustomButton';
import { useEffect, useState } from 'react';
import RemarkModel from '../Models/remarkModel';
import CustomInput from '../CustomInput/CustomInput';
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import io from 'socket.io-client';
// import io from 'socket.io-client';
// import io from 'socket.io-client';




// const SOCKET_URL = ' wss://4b6d-2409-40d0-33-c4c3-a9d2-f611-6a48-5242.ngrok.io';



function TimmerStart(props) {
    console.log("&&&&&&&&&&&&&&&&&", props)
    const { navigation } = props

    const [employee, setEmployees] = useState(null)
    const [timer, setTimer] = useState(false);
    const [timerID, setTimerID] = useState(0);
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0);
    const [timr, setTimr] = useState(new Date('2014-01-01 00:00:00'))

    const startTimer = () => {
        intervalID = setInterval(stopWatch, 1000);
        setTimerID(intervalID);
    }

    const stopTimer = () => {
        clearInterval(intervalID);
    }
    const ClearTimer = () => {
        setTimr(new Date('2014-01-01 00:00:00'))
        clearInterval(timerID);

    }
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    function stopWatch() {

        setTimr((time) => {
            const d = new Date(time.getTime());
            d.setSeconds(d.getSeconds() + 1);
            return d;
        });
    }

    const text = [
        "glucose tolerance test.",
        "cephalin-cholesterol flocculation",
        "glucose tolerance test",
        "bone marrow aspiration",
        "enzyme analysis",

    ]


    return <>
        <View style={styles.container} >
            <View style={styles.TopBarContainer}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={30}
                        color={colors.muted}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, width: "100%" }}>

                <View style={styles.centerContainer}>
                    <View style={styles.StopWatch}>
                        <View style={styles.box}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text >Hours &nbsp; :</Text>
                                <Text >&nbsp; Minute&nbsp; :</Text>
                                <Text >&nbsp; Seconds</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row' }} >
                                <Text style={styles.timeText}>{timr.getHours()} &nbsp; :</Text>
                                <Text style={styles.timeText}>{timr.getMinutes()} &nbsp; :</Text>
                                <Text style={styles.timeText}>{timr.getSeconds()}</Text>
                            </View>
                        </View>
                        {/* <View style={styles.box}>
                            <Text style={styles.timeText}>{timr.getMinutes()}</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.timeText}>{timr.getSeconds()}</Text>
                        </View> */}
                    </View>
                    <View style={styles.timmer}>
                        <View style={styles.startButton}><CustomButton text={"Start"} disabled={!!timerID} onPress={startTimer} /></View>
                        {/* <View><CustomButton text={"Stop"} onPress={stopTimer} /></View> */}
                        <View><CustomButton text={"End"} onPress={ClearTimer} /></View>
                    </View>
                </View>
                <View style={styles.saveButton}>
                    <CustomButton text={"Remark"} onPress={toggleModal} />
                    {/* <RemarkModel  model={showModal}/> */}
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showModal}
                            onRequestClose={() => toggleModal()}
                        >

                            <View style={styles.modal}>
                                <View style={styles.closeModel}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => toggleModal()}
                                    >
                                        <Text style={styles.buttonText}>Close</Text>
                                        {/* <MaterialCommunityIcons name="close" size={30} color="black" /> */}

                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%' }}>
                                    <Text style={styles.modalText}>Assignment Task Remarks</Text>
                                    <CustomInput />
                                </View>

                                <View style={styles.remarkButton}>
                                    <CustomButton text={"Save"} />
                                </View>

                            </View>
                        </Modal>
                    </View>
                    <CustomButton text={"Save"} />
                </View>
                <View style={styles.headingContainer}>
                    <MaterialCommunityIcons name="menu-right" size={30} color="black" />

                    <View style={styles.heading}>
                        <Text style={styles.headingText}>Patient Details</Text>


                    </View>
                </View>
                {/* <ScrollView style={styles.bottomContainer}>
                    {
                        text.map((item) => {
                            return <>
                                <View style={[styles.lcontainer]}>
                                    <View style={styles.TextContainer}>
                                        <View>
                                            <Text style={styles.textStyles}>{item}</Text>
                                        </View>
                                    </View>
                                </View>
                            </>
                        })
                    }
                </ScrollView> */}
                <View style={styles.bottomContainer}>
                    <View style={styles.buttomWrapper}>
                            <Text style={styles.buttomTextA}>Name: &nbsp;Aman Kumar</Text>
                            <Text style={styles.buttomTextA}>age: &nbsp; 45</Text>
                            <Text style={styles.buttomTextA}>VIP/Non-VIP: &nbsp; VIP</Text>
                            <Text style={styles.buttomTextA}>Bad No.: &nbsp; B1-230</Text>
                            <Text style={styles.buttomTextA}>Department: &nbsp; Cardio</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    </>
}

export default TimmerStart;


const styles = StyleSheet.create({
    container: {
        flexDirecion: "row",
        backgroundColor: colors.light,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        flex: 1,
    },
    saveButton: {
        display: 'flex',
        // flexDirection:'row',
        justifyContent: 'space-between',
        height: 100,
        width: '100%'
    },
    TopBarContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'flex-end',
        alignItems: "center",

    },
    centerContainer: {
        flex: 1,
        height: 90,
        backgroundColor: colors.light,
        width: "100%",
        position: 'relative'

    },
    bottomContainer: {
        flex: 1,
        height: 440,
        maxHeight: 300,
        backgroundColor: colors.light,
        width: "100%",

    },
    timmer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        margin: 10,
        marginEnd: 20,
        marginLeft: 20
        // backgroundColor:'red'

    },
    box: {
        height: 70,
        width: 200,
        borderRadius: 10,
        backgroundColor: colors.shadow,
        borderWidth: 1,
        borderColor: colors.secondary,
        margin: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A',
        paddingLeft: 10,
        paddingRight: 10,
    },
    StopWatch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    TextContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    listText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: colors.success,
    },
    lcontainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 5,
        marginBottom: 15,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginStart: 20,
        width: '40%',


    },
    TextContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    listText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: colors.primary,
    },
    timeText: {
        fontSize: 30,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    startButton: {
        // width:'20%',

    },
    textStyles: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.success,
    },
    // modal styles
    modal: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        height: 300,
        position: 'relative',
        borderColor: colors.secondary,
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    modalText: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    closeModel: {
        display: 'flex',
        // position: 'absolute',
        // top: 5,
        // right: 5
    },
    remarkButton: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',
        right: 15,
        paddingTop: 240
    },
    // nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

    headingContainer: {
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
    },
    headingText: {
        fontSize: 20,
        color: colors.muted,
        fontWeight: "800",
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "87%",


    },
    buttomWrapper:{
        padding:10
    },
    buttomTextA:{
        paddingBottom:10,
        fontSize:16,
        fontWeight:600
    }


})