import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";

const Welcome = (props) => {

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.container}>
            <Text style={styles.text} >Seja Bem-Vindo!!!</Text>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff'
    }
})

export default Welcome;