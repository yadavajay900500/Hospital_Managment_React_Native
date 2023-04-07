import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  Image,
  Button,
} from "react-native";
// import axios from "axios";
import { colors } from "../constants";
import CustomInput from "../CustomInput";
import logo from '../assets/logo.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from  '@expo/vector-icons'
import CustomButton from "../CustomButton";
// import * as authService from './Service/authService'


function SigninScreen({navigation}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData]=useState({
    email:'',
    password:''
  })
  const SignnForm =async () => {

    console.log("MMMMMMMMMMMM",{email:email,pass:password});

  //  const res=await axios.post('http://localhost:5500/signin',{email:email,pass:password})
  //  const res =await authService.auth(email,password)
  //  console.log("!!!!!!!",res)
  };
  return (
    <>
      {/* <KeyboardAvoidingView style={styles.container}> */}
      <View style={styles.container}>
        <View style={styles.TopBarContainer}>
          {/* <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
               <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color={colors.muted}
            />
          </TouchableOpacity> */}
          <Image style={styles.logoImg} source={logo} />

        </View>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
        >
          <View style={styles.welconeContainer}>
            {/* <Image source={logo} style={styles.logo}   /> */}
          </View>
          <View style={styles.screenNameContainer}>
            <View>
              <Text style={styles.screenNameText}>Sign in</Text>
            </View>
            <View>
              <Text style={styles.screenNameParagraph}>
              Email or mobile phone number

              </Text>
            </View>
            <View style={styles.formContainer}>
              {/* <CustomAlert message={error} type={"error"} /> */}

              <CustomInput
                value={email}
                setValue={setEmail}
                // onChange={onChnageHandlar}
                placeholder={"Email"}
                placeholderTextColor={colors.muted}
                radius={5}
              />
              <CustomInput
                value={password}
                setValue={setPassword}
                placeholder={"passwords"}
                secureTextEntry={true}
                placeholderTextColor={colors.muted}
                radius={5}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttomContainer}>
          <CustomButton text={"Sign in"} onPress={() => navigation.navigate("task")} />
        </View>
        <View style={styles.bottomContainer}>
          {/* <Text>forgot password </Text> */}
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={styles.signupText}
          >
          forgot password 
          </Text>
      </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
   
  },
  TopBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
   
  },
  welconeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
   
  },
  formContainer: {
    flex: 2,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flexDirecion: "row",
    padding: 5,
    paddingBottom: 20,
    marginBottom: 20,
   
  },
 logoImg: {
    width: 65,
    height: 58,
    objectFit: 'contain'
  },
  forgetPasswordContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ForgetText: {
    fontSize: 15,
    fontWeight: "600",
  },
  buttomContainer: {
    width: "100%",
  },
  bottomContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
   
  },
  signupText: {
    marginLeft: 2,
    color: colors.Gdx,
    fontSize: 15,
    fontWeight: "600",
  },
  screenNameContainer: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  screenNameText: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.muted,
  },
  screenNameParagraph: {
    marginTop: 5,
    fontSize: 15,
  },
});
