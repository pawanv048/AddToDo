import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Firstbox</Text>
      <Text style={styles.boxTwo}>SecondBox</Text>
      <Text style={styles.boxThree}>ThirdBox</Text>
      <Text style={styles.boxFour}>FourthBox</Text>
    </View>
  )
}

export default sandbox

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        paddingTop: 1,
        backgroundColor: '#fff',
    },
    boxOne: {
        backgroundColor: 'blue',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'red',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'green',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'yellow',
        padding: 10,
    },
});
