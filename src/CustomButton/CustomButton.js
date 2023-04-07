import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants";

const CustomButton = ({ text, onPress, disabled = false }) => {
  return (
    <>
      {disabled == true ? (
        <TouchableOpacity
          disabled
          style={styles.containerDisabled}
          onPress={onPress}
        >
          <Text style={styles.buttonTextDisabled}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent:"center",
    alignContent:'center',
    padding: 10,
    width: "100%",
    marginBottom: 4,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  buttonText: {
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    fontWeight: "bold",
    color: "#fff",
    
  },
  containerDisabled: {
    padding: 10,
    width: "100%",
    marginBottom: 4,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.success,
  },
  buttonTextDisabled: {
    fontWeight: "bold",
    color: colors.light,
    padding:0,
    width:'100%',
  },
});
