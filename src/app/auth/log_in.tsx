import React from "react";
import {View,Text,TextInput,
    TouchableOpacity,StyleSheet} from 'react-native'

import { Link, router } from "expo-router";
import { useState } from "react";

// import Header from "../../components/Header";
import Button from "../../components/Button";

const handlePress = (): void => {
    //ログイン処理
    router.replace('/memo/list')
}

const LogIn = ():JSX.Element => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return(
        <View style= {styles.container}>
            {/* <Header /> */}
            <View style = {styles.inner}>
                <Text style = {styles.tittle}>Log_in</Text>
                <TextInput
                    style = {styles.input}
                    value = {email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"
                    keyboardType='email-address'    //キーボードタイプ
                    placeholder='Email Address'     //空の時の表示名
                    textContentType='emailAddress'  //キーチェーン使用時の自動保管
                 />
                <TextInput
                    style = {styles.input}
                    value = {password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize="none"
                    secureTextEntry                 //入力文字にマスクをかける
                    placeholder='Password'          //空の時の表示名
                    textContentType='password'      //キーチェーン使用時の自動保管
                 />
                <Button label = 'Submit' onPress={handlePress}/>
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>Not registerd???</Text>
                    <Link href = '/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style = {styles.footerLink}>Sign up here!</Text>
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

export default LogIn
