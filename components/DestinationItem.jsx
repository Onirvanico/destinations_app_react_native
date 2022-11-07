import { Text, View, StyleSheet } from "react-native";

function DestinationItem(props) {

    return(
       <View style={[styles.viewStyle]}>
           <Text style={[styles.textStyle, styles.titleStyle]}>{props.title}</Text>
           
           <Text style={[styles.textStyle]}>{props.description}</Text>
       </View>
    );
} 

const styles = StyleSheet.create({
    viewStyle: {
        with: "100%",
        height: "auto",
        backgroundColor: "#000C57",
        padding: 20,
        borderRadius: 8,
        margin: 10
    },
    textStyle: {
        color: "white",
        fontSize: 20
    },
    titleStyle: {
        marginBottom: 10,
        fontWeight: "700"
    }
})
export default DestinationItem;