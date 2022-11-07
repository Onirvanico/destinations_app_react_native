import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default FAB = (props) => {

    return(
        <TouchableOpacity style={styles.container}
            onPress={props.onPress}>
                <Text style={[styles.styleTextButton]}> + </Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        position: "absolute",
        bottom: 16,
        right: 16,
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    styleTextButton: {
        color: "white",
        fontSize: 30
    }
});

