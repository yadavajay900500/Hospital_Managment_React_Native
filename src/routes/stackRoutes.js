import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimmerStart from '../screens/timmerStart';
import TaskAssignment from '../screens/taskAssignment';
import SigninScreen from '../screens/SigninScreen';
import PatientProfile from '../Components/PatientProfile/PatiebtProfile';

const Stack=createNativeStackNavigator()


function StackRoutes(){
    return <>
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name='login' component={SigninScreen} />
            <Stack.Screen name='task' component={TaskAssignment} />
            <Stack.Screen name='Timmer' component={TimmerStart} />
            <Stack.Screen name='patientProfile' component={PatientProfile} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
}

export default StackRoutes;