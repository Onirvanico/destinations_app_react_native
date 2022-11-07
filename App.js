import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ToastAndroid, FlatList } from 'react-native';
import CreateDestination from './components/CreateDestination';
import DestinationItem from './components/DestinationItem';
import FAB from './components/FAB';
import "react-native-gesture-handler";
import DestinationList from './components/DestinationList';

const Stack = createStackNavigator();

export default function App() {
  const destinations = [
    { title: "Teste 1", description: "Description 1" },
    { title: "Teste 2", description: "Description 2" },
    { title: "Teste 3", description: "Description 3" },
    { title: "Teste 4", description: "Description 1" },
    { title: "Teste 5", description: "Description 2" },
    { title: "Teste 6", description: "Description 3" },
    { title: "Teste 7", description: "Description 1" },
    { title: "Teste 8", description: "Description 2" },
    { title: "Teste 9", description: "Description 3" },
    { title: "Teste 10", description: "Description 3" }
  ]
  const list = destinations.map(dest => <DestinationItem title={dest.title} description={dest.description} />);
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

