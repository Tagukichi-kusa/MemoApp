import React from "react";
import {View,Text,TextInput,StyleSheet} from 'react-native'


import Header from "../../components/Header";
import Button from "../../components/Button";

const SignUp = ():JSX.Element => {
    return(
        <View style= {styles.container}>
            <Header />
            <View style = {styles.inner}>
                <Text style = {styles.tittle}>Sign Up</Text>
                <TextInput style = {styles.input} value='Email Address' />
                <TextInput style = {styles.input} value='pass' />
                <Button label = 'Submit' />
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Already registered?</Text>
                    <Text style = {styles.footerLink}>Log in.</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0F4F8'
    },
    inner:{
        paddingVertical:24,
        paddingHorizontal:27
    },
    tittle:{
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom:24
    },
    input :{
        borderWidth:1,
        borderColor:'#DDDDDD',
        backgroundColor:'#ffffff',
        height:48,
        padding:8,
        fontSize:16,
        marginBottom:16
    },
    button:{
        backgroundColor:'#467FD3',
        paddingVertical:8,
        paddingHorizontal:24,
        borderRadius:4,
        alignSelf:'flex-start', //FlexBox自体のマスクを操作する場合
        marginBottom:24
    },
    buttonLabel:{
        fontSize:16,
        lineHeight:32,
        color:'#ffffff'
    },
    footer:{
        flexDirection:'row'
    },
    footerText:{
        fontSize:14,
        lineHeight:24,
        marginRight:8,
        color:'#000000'
    },
    footerLink:{
        fontSize:14,
        lineHeight:24,
        color:'#467FD3'
    }
})

export default SignUp
