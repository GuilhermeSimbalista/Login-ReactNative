import React, { useState }  from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Modal, Alert } from "react-native"

const Login = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState('')

    const addLogin = () => {
        props.onAddLogin(login);
        props.onAddPass(password);
        setLogin('');
        setPassword('');
    }

    const register = () => {
        setCheck(true)
        props.registerCheck(check)
    }


    const checkInput = (login, password) => {
        if (login.length > 0 && password.length > 0) {
            addLogin()
        }else {
            Alert.alert('Error', 'Por favor! Preencha os campos', [{ text: 'OK' }], {
                cancelable: false
            })
            
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite seu login"
                onChangeText={setLogin}
                value={login}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                onChangeText={setPassword}
                value={password}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => checkInput(login, password)} >   
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.link}
                onPress={() => register()} >   
                <Text style={styles.linkText}>Não tem cadastro? Clique aqui e cadastre-se!</Text>
            </TouchableOpacity>
            </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    input: {
        width: 300,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 3
    },
    button: {
        marginTop: 10,
        width: 300,
        height: 42,
        backgroundColor: '#ABABAB',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    linkText: {
        fontSize: 14,
        color: '#fff',
        textDecorationLine: 'underline'
    },
    cont: {
        padding: 50,
    }
})

export default Login;