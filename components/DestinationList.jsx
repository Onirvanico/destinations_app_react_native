
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ToastAndroid, FlatList } from 'react-native';
import DestinationApi from '../services/DestinationApi';
import DestinationItem from './DestinationItem';
import FAB from './FAB';

function DestinationList({ navigation }) {
   
      const [destinations, setDestinations] = useState([]);

      const api = new DestinationApi();

      useFocusEffect(
        React.useCallback(()=> {
          api.list()
          .then(res => {
            setDestinations(res);
          });

        }, [])
      );

      useEffect(() => {
         api.list()
          .then(res => {
            setDestinations(res);
          });
      }, []);


    return(
        <View style={styles.container}>
            <FlatList style={styles.flatListStyle}
                data={destinations}
                renderItem={({item}) => <DestinationItem title={item.local} description={item.descricao} />}
                keyExtractor={item => item.id}
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