import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Welcome from './src/Welcome';
import Register from './src/Register';

export default function App() {
  const [check, setCheck] = useState(false)
  const [checkRegister, setCheckRegister] = useState(false)


  const addLoginHandler = () => {
    setCheck(true)
  }

  const addRegisterHandler = () => {
    setCheckRegister(true)
  }

  const addUserHandler = () => {
    setCheckRegister(false)
    setCheck(true)
  }

  const cancelLoginHandler = () => {
    setCheckRegister(false)
  }

  return (
    <View style={styles.container}>
      <Login
      onAddLogin = {addLoginHandler}
      onAddPass = {addLoginHandler}
      registerCheck = {addRegisterHandler}>
      </Login>
      <Register
      visibleRegister = {checkRegister}
      onAddName = {addLoginHandler}
      onAddUsername = {addUserHandler}
      onAddPass = {addUserHandler}
      onAddBirthday = {addUserHandler}
      onAddGender = {addUserHandler}
      onAddCity = {addUserHandler}
      onAddUf = {addUserHandler}
      back = {cancelLoginHandler}
      >

      </Register>
      <Welcome visible = {check}
      ></Welcome>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
});
