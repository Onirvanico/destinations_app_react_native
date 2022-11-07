import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import CreateDestination from './components/CreateDestination';
import DestinationItem from './components/DestinationItem';
import "react-native-gesture-handler";
import DestinationList from './components/DestinationList';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerStyle: {backgroundColor: "black"}, headerTintColor: "#fff"}} name="Destinos" component={DestinationList}/>
        <Stack.Screen options={{ headerStyle: {backgroundColor: "black"}, headerTintColor: "#fff"}} name="Criar destino" component={CreateDestination}/>
      </Stack.Navigator>
      <StatusBar style="light"/>
    </NavigationContainer>
  );
}

