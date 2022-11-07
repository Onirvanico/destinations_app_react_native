
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { useState } from "react";

const CreateDestination = () => {

  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Novo Destino</Text>
        <View style={styles.inputContainer}> 
            <TextInput 
            style={styles.input} 
            placeholder="Título"
            clearButtonMode="always"
            value={inputTitle}
            onChangeText={setInputTitle}/> 
            <TextInput 
            style={styles.input}  
            placeholder="Descrição" 
            clearButtonMode="always"
            value={inputDescription}
            onChangeText={setInputDescription} /> 
            <TouchableOpacity style={styles.button} onPress={() => alert(`título: ${inputTitle} \ descrição: ${inputDescription}`)}> 
            <Text style={styles.buttonText}>Salvar</Text> 
            </TouchableOpacity> 
        </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000041',
        alignItems: 'center',
      },
      title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
      },
      inputContainer: {
        flex: 1,
        marginTop: 30,
        flexDirection: "column",
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
      },
      input: {
        marginTop: 10,
        minHeight: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
      },
      button: {
        marginTop: 50,
        height: 60,
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      }
});

export default CreateDestination;