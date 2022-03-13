import { StyleSheet, Text, View } from "react-native";
import React from "react";

const hearder = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>MyTodos</Text>
        </View>
    );
};

export default hearder;

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: "coral",
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
