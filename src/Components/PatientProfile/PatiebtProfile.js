import {View,Text,StyleSheet} from 'react-native'

function PatientProfile(){
    return <>
    <View style={styles.container}>
        <Text>Patient Profile</Text>
    </View>
    </>
}

export default PatientProfile;

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})