
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ToastAndroid, FlatList } from 'react-native';
import DestinationItem from './DestinationItem';
import FAB from './FAB';

function DestinationList({ navigation }) {
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

      const destinationsService = "";

      const list = destinations.map(dest => <DestinationItem title={dest.title} description={dest.description} />);

    return(
        <View style={styles.container}>
            <FlatList style={styles.flatListStyle}
                data={destinations}
                renderItem={({item}) => <DestinationItem title={item.title} description={item.description} />}
                keyExtractor={item => item.title}
            />
            <FAB onPress={() => navigation.navigate("Criar destino")}></FAB>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000011',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatListStyle: {
      minWidth: "90%"
    }
  });

export default DestinationList;