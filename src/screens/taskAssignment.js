import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  
  Image
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants";
import axios from "axios";
//   import CustomCard from "../../components/CustomCard/index";
//   import OptionList from "../../components/OptionList/index";
// import InternetConnectionAlert from "react-native-internet-connection-alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OptionList from "../OptionList/OptionList";
import CustomButton from "../CustomButton/CustomButton";
import logo from '../assets/logo.png';
import salseforceLogo from '../assets/Salesforce.png'
// import ProgressDialog from "react-native-progress-dialog";


const data = [
  "Welcome to my app ", "Welcome to my app ", "Welcome to my app ", "Welcome to my app ", "Welcome to my app "
]

const TaskAssignment = (props) => {

  console.log("$$$$$$$$$$", props)
  // const { authUser } = route.params;
  // const [user, setUser] = useState(authUser);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [task, setTasks] = useState(null)
  const [status,setStatus]=useState(null)
  const [startTime,setStartTime]=useState(null)
  const [endTime,setEndTime]=useState(null)
  const [dates,setDates]=useState(null)



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getEmployeeData()
      setRefreshing(false);
    }, 2000);
  }, []);

  //call the fetch function initial render
  useEffect(() => {
    // fetchStats();
    getEmployeeData()
  }, []);
  const emplID = "EMP012"
  const getEmployeeData = async () => {
    axios.get('http:859d-103-16-29-138.ngrok.io/employees').then((res) => {
    // axios.get(' http://localhost:5151/employees').then((res) => {
      console.log(res)
      const data = res.data.employees.filter((data) => data.emplID == emplID)
      console.log("##############",data)
      const task = data[0].tasks.map((res) => res.assignment)
      const status = data[0].tasks.map((res) => res.status)
      const start = data[0].tasks.map((res) => res.from)
      const end = data[0].tasks.map((res) => res.to)
      const date = data[0].tasks.map((res) => res.dates)
      console.log(date)
      setStartTime(start)
      setEndTime(end)
      setDates(date)
      console.log(">>>>>>>>>>>>>>>>>>>>>>>",start,end)
      setStatus(status)
      setTasks(task)
      console.log(task)
      console.log(data[0].tasks)
    }).catch(error => {
      console.log("AAAAAAAAAAAAAAAAA", error);
    });


  }

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.topBarContainer}>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("authUser");
            navigation.replace("login");
          }}
        >
          <Image style={styles.logoImg} source={logo} />
        </TouchableOpacity>
        <View>
          {/* <Text style={styles.toBarText}>Dashboard</Text> */}
        </View>
        <View style={styles.userIcon}>
          <TouchableOpacity>
            <Ionicons
              name="person-circle-outline"
              size={30}
              color={colors.muted}
            />
          </TouchableOpacity>
          <Text>Neeraj Jain</Text>
        </View>

      </View>


      <View style={styles.headingContainer}>
        <MaterialCommunityIcons name="menu-right" size={30} color="black" />

        <View style={styles.heading}>
          <Text style={styles.headingText}>My Task</Text>
          {/* <TouchableOpacity onPress={getEmployeeData}>
            <Text style={styles.refreshText}>Refresh</Text>
          </TouchableOpacity> */}

        </View>
      </View>
      <View style={{ flex: 1, width: "100%"}}>
        <ScrollView style={styles.actionContainer}
         contentContainerStyle={styles.scrollView}
         refreshControl={
           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
        >

          {
            task && task.map((res,i) => {
              const sts = status[i];
              const from = startTime[i];
              const to = endTime[i];
              const da = dates[i];
              return <>
              <OptionList
                text={res}
                routes={props}
                emplID={emplID}
                index={i+1}
                status={sts}
                starTime={from}
                endTim={to}
                dates={da}
              />
            </>
            
            })
          }

          <View style={{ height: 20 }}></View>
        </ScrollView>
        {/* <ScrollView>

        </ScrollView> */}
      </View>
      <View style={styles.footer}>
        <Text style={{ color: colors.secondary }}>powered by salesforce</Text>
        <Image style={styles.footerImg} source={salseforceLogo} />
      </View>
    </View>
  );
};

export default TaskAssignment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirecion: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 0,
    flex: 1,
  },
  topBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logoImg: {
    width: 65,
    height: 58,
    objectFit: 'contain'
  },
  footerImg: {
    width: 50,
    height: 50,
    objectFit: 'contain',
    marginLeft: 10
  },
  userIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toBarText: {
    fontSize: 15,
    fontWeight: "600",
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "87%",


  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    width: "100%",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 10,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  headingText: {
    fontSize: 20,
    color: colors.muted,
    fontWeight: "800",
  },
  refreshText: {
    fontSize: 18,
    color: '#4ADEDE',
    fontWeight: "600",
  },
  actionContainer: {
    padding: 15,
    width: "100%",
    flex: 1,
    // height:400

  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,

  },
  scrollView: {
    // flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
