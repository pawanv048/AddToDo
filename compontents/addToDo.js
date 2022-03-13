import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const AddToDo = ({ submitHandler }) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add what to do...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title="Add Todo" color="coral" />
        </View>
    )
}

export default AddToDo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    }
})