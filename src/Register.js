import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Modal, Alert} from "react-native"

const Register = (props) => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [checkBack, setCheckBack] = useState(false)

    const addUser = () => {
        props.onAddName(name)
        props.onAddUsername(username)
        props.onAddPass(pass)
        props.onAddBirthday(birthday)
        props.onAddGender(gender)
        props.onAddCity(city)
        props.onAddUf(uf)
        setName('')
        setUsername('')
        setPass('')
        setBirthday('')
        setGender('')
        setCity('')
        setUf('')
    }

    const checkInput = (name, username, pass, birthday, gender, city, uf) => {
        if (name.length > 0 && username.length > 0 && pass.length > 0 && birthday.length > 0 && gender.length > 0 && city.length > 0 && uf.length > 0) {
            addUser();
        }else {
            Alert.alert('Error', 'Por favor! Preencha todos os campos', [{ text: 'OK' }], {
                cancelable: false
            })
        }
    }

    const backing = () => {
        setCheckBack(true)
        props.back(checkBack)
    }

    return (
        <Modal visible={props.visibleRegister} animationType="slide">
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Nome Completo"
                onChangeText={setName}
                value={name}
            />

            <TextInput 
                style={styles.input}
                placeholder="Nome de Usuário"
                onChangeText={setUsername}
                value={username}
            />

            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                onChangeText={setPass}
                value={pass}
            />

            <TextInput 
                style={styles.input}
                placeholder="Data de Nascimento"
                onChangeText={setBirthday}
                value={birthday}
            />

            <TextInput 
                style={styles.input}
                placeholder="Gênero"
                onChangeText={setGender}
                value={gender}
                
            />

            <TextInput 
                style={styles.input}
                placeholder="Cidade"
                onChangeText={setCity}
                value={city}
            />

            <TextInput 
                style={styles.input}
                placeholder="UF"
                onChangeText={setUf}
                value={uf}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => backing()} >   
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonSave}
                onPress={() => checkInput(name, username, pass, birthday, gender, city, uf)} >   
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            </View>
            </Modal>
    )}

            const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    },
    input: {
        width: 300,
        padding: 8,
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
        backgroundColor: '#a3201c',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSave: {
        marginTop: 10,
        width: 300,
        height: 42,
        backgroundColor: '#35a31c',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Register