import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { colors } from "../constants";
import CustomButton from '../CustomButton'
const OptionList = (props) => {
  const { text, routes, emplID, index ,status,starTime,endTim,dates} = props
  console.log(status)
  const { navigation } = routes

  const taskType = [
    "success", 'delay', 'pendding'
  ]
const [disabledButton,setdisabledButton]=useState(false);


useEffect(()=>{
  if(status == 'completed'){
    setdisabledButton(true)
   }
})
  const startButton=()=>{
       
  }
  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.white }]}>
        <View style={styles.TextContainer}>
          <View style={styles.taskConatsiner}>
            <View >
              <Text style={styles.listText}>{index}. &nbsp;{text}</Text>
            </View>
            <View style={styles.dateContainer}>
               <View style={styles.dateContainer}>
               <Text style={styles.listTextA}>{dates}</Text>
               <Text style={styles.listTextA}>  &nbsp;{starTime} to {endTim}</Text>
               </View>
              <Text style={styles.listTextStatus}> {status}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton disabled={disabledButton} text={"Start"} onPress={() => navigation.navigate("Timmer", 
            { 
              emplID: emplID,
              todayTask:text
              })} />
          </View>
        </View>
      </View>

    </>
  );
};

export default OptionList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: colors.white,
    borderRadius: 5,
    height: 60,
    paddingLeft: 9,
    paddingRight: 10,
    elevation: 5,
    marginBottom: 15,

  },
  buttonContainer: {
    // display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent:'center',
    marginStart: 5,
    // width: '30%',


  },
  TextContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  listText: {
    // marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: colors.dark,
    margin:0
  },
  listTextA: {
    // marginLeft: 10,
    fontSize: 13,
    fontWeight: 500,
    color: "#8d8d8d",
  },
  listTextStatus: {
    // marginLeft: 10,
    fontSize: 13,
    fontWeight: 500,
    color: '#00b400',
  },
  taskConatsiner: {
    flex: 3,
    width: '100%',
    height: 20
  },
  dateContainer:{
      display:'flex',
      flexDirection:'row',
      // marginEnd:60,
      paddingTop:2
  },

});
