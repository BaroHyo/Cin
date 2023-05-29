import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image, StatusBar, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {Input} from "../../components";

const backImage = require("../../../assets/backImage.png");

//const Spacing = 10;

export function LoginScreen() {
    const [show, setShow] = React.useState(false);

    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage}/>
            <View style={styles.whiteSheet}/>
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Iniciar Sesion</Text>
                <Input placeholder="Codigo Vendedor"
                       autoCapitalize="none"
                       autoCorrect={false}
                       secureTextEntry={true}
                       textContentType="password"/>
                <TouchableOpacity style={styles.button} onPress={() => console.log(1)}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Ingresar</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <StatusBar barStyle="light-content"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24,
    },
    backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 50
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
});
