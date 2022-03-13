import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const todoitems = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                {/* <Ionicons name='delete' size={18} color='#333' /> */}
                <MaterialIcons name="delete" size={18} color="green" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default todoitems;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row",
    },
    itemText: {
        marginLeft: 10,
    },
});
