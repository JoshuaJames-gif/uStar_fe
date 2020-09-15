import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login() {
  // const [text, setText] = useState('')
  // const changeHandler = (val) => {
  //   setText(val)
  // }

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder='Enter Email'
        // onChangeText={changeHandler}
      />
      <TextInput style={styles.input} placeholder='Enter Password'/>
      <Button onPress={() => {console.log('press')}} title='submit' color='coral'/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})