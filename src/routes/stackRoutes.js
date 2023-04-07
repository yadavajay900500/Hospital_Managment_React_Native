import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimmerStart from '../screens/timmerStart';
import TaskAssignment from '../screens/taskAssignment';

const Stack=createNativeStackNavigator()


function StackRoutes(){
    return <>
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name='task' component={TaskAssignment} />
            <Stack.Screen name='Timmer' component={TimmerStart} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
}

export default StackRoutes;