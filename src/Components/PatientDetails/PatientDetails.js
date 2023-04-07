import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../constants";


const PatientDetails = (props) => {
const {navigation}=props
console.log("!!!!!!!!!!!!",navigation)
    const onPress=()=>{
          navigation.navigate('patientProfile')
    }

  return (
    <View style={styles.container}>
      <View style={styles.innerRow}>
        <View>
          <Text style={styles.primaryText}>PatientID # B1-234</Text>
        </View>
        <View style={styles.timeDateContainer}>
          <Text style={styles.secondaryTextSm}>
            {/* {dateFormat(item?.createdAt)} */}
            08/04/2023
          </Text>
          <Text style={styles.secondaryTextSm}>09:12 AM</Text>
        </View>
      </View>
        <View style={styles.innerRow}>
          <Text style={styles.secondaryText}>Rahul Kumar</Text>
        </View>
        <View style={styles.innerRow}>
          <Text style={styles.secondaryText}>Mob.No:9823425242 </Text>
        </View>
      <View style={styles.innerRow}>
        <Text style={styles.secondaryText}>Bed No. :12</Text>
        {/* <Text style={styles.secondaryText}>Total Amount : 123$</Text> */}
      </View>
      <View style={styles.innerRow}>
        <TouchableOpacity style={styles.detailButton} onPress={onPress}>
          <Text>Details</Text>
        </TouchableOpacity>
        <Text style={styles.secondaryText}>pendding</Text>
      </View>
    </View>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "auto",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 1,
  },
  innerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  primaryText: {
    fontSize: 15,
    color: colors.dark,
    fontWeight: "bold",
  },
  secondaryTextSm: {
    fontSize: 11,
    color: colors.muted,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 14,
    color: colors.muted,
    fontWeight: "bold",
  },
  timeDateContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  detailButton: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    borderColor: colors.muted,
    color: colors.muted,
    width: 100,
  },
});
