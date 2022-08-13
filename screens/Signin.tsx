import React from "react";
import {StyleSheet, TextInput, View, Text } from "react-native";
import { Button, TouchableOpacity } from "react-native";
import layouts from "../constants/layouts";
const Signin =()=>{
    return(
        <View style= {style.root}>
            <View style={style.title}>
                <Text style={style.title_text}>PULSE</Text>
                <Text style={[style.title_text, style.title_colored]}>DIGITAL</Text>
            </View>
            
            <View style={style.input_group}>
                <Text style= {style.text}>Email</Text>
                <View style= {style.input_container}>
                    <TextInput secureTextEntry={false} placeholder="Entrer votre Email"/>
                </View>
            </View>

            <View style={style.input_group}>
                <Text style= {style.text}>Mot de passe</Text>
                <View style= {style.input_container}>
                    <TextInput secureTextEntry={true} placeholder="Entrer votre mot de passe"/>
                </View>
            </View>

            <TouchableOpacity style={style.button}>
                <Text style={[style.text, style.button_text]}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Signin;

const style = StyleSheet.create({
    root:{
        flex:1,
        paddingHorizontal: layouts.paddingHorizontal,
        paddigVertical: layouts.paddingVertical,
        justifyContent: 'center',
        backgroundColor: layouts.bgColor
    },

    input_container:{
        borderWidth: 1,
        borderColor: layouts.primary,
        borderRadius: 5,
        marginTop:10,
        marginBottom:10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    input:{
        padding: 10
    },
    text:{
        fontSize: 16,
    },
    
    button:{
        backgroundColor: layouts.primary,
        padding: 15,
        borderRadius: 5,
    },
     button_text:{
        textAlign: 'center',
        color: '#fff'
     },
     title:{
        flexDirection:'row'
     },
     title_text:{
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 25,
     },
     title_colored:{
        color: 'red',
        fontWeight: 'bold'

     },
     input_group: {
        marginBottom: 10,
     }
})