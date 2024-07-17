import React from "react";
import {View,Text,TextInput,Alert,
    TouchableOpacity,StyleSheet,
    } from 'react-native'

import { Link,router } from "expo-router";
import { useState } from "react";
import { auth } from "../../config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// import Header from "../../components/Header";
import Button from "../../components/Button";


const handlePress = (email: string,password: string): void => {
    //会員登録
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid)
            router.replace('/memo/list')
        })
        .catch((error) => {
            const { code,message } = error
            console.log(code,message)
            Alert.alert(message)
        })

}

const SignUp = ():JSX.Element => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return(
        <View style= {styles.container}>
            {/* <Header /> */}
            <View style = {styles.inner}>
                <Text style = {styles.tittle}>Sign Up</Text>
                <TextInput
                    style = {styles.input}
                    value = {email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"           //先頭文字の小文字化
                    keyboardType='email-address'    //キーボードタイプ
                    placeholder='Email Address'     //空の時の表示名
                    textContentType='emailAddress'  //キーチェーン使用時の自動保管
                 />
                <TextInput
                    style = {styles.input}
                    value = {password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize="none"           //先頭文字の小文字化
                    secureTextEntry                 //入力文字にマスクをかける
                    placeholder='Password'          //空の時の表示名
                    textContentType='password'      //キーチェーン使用時の自動保管
                 />
                <Button label = 'Submit' onPress={() => {handlePress(email,password) }}  />
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Already registered?</Text>
                    <Link href = '/auth/log_in' asChild>
                        <TouchableOpacity>
                            <Text style = {styles.footerLink}>Log in.</Text>
                        </TouchableOpacity>
                    </Link>
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
