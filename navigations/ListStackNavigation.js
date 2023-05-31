import {Header, createStackNavigator} from "@react-navigation/stack"
import ListScreen from "../screens/ListScreen"
import ListAddScreen from "../screens/ListAddScreen"

const Stack = createStackNavigator();

const ListStackNavigation = ()=>{
  return(
    <Stack.Navigator
      initialRouteName = "ListScreen"
    >
      <Stack.Screen name = "ListScreen" component = {ListScreen} options={{ headerShown: false }}/>
      <Stack.Screen name = "ListAddScreen" component = {ListAddScreen}/>
    </Stack.Navigator>
  )
}

export default ListStackNavigation