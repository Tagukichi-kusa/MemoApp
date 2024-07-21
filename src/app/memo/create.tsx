import React, { useState } from "react";
import { View,TextInput,StyleSheet } from  "react-native"
import { router } from "expo-router";
import { collection, addDoc,Timestamp } from "firebase/firestore"

// import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { db,auth } from "../../config";
import KeyboardAvoidingView  from "../../components/KeyboardAvoidingView";


const handlePress = (bodyText: string):void => {
    if (auth.currentUser === null){ return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`) //変数を文字列の一部として使う場合``を利用。${}はJavascriptの世界
    //第一引数：保存先、第二引数：保存データ（オブジェクト）
    addDoc(ref,{
        bodyText: bodyText,      //テキスト本文
        updatedAt: Timestamp.fromDate(new Date())   //更新日
    })
    .then((docRef) => {
        console.log('success',docRef.id)
        router.back()
    })
    .catch((error) => {
        console.log(error)
    })
}

const Create = ():JSX.Element => {
    const [ bodyText,setBodyText ] = useState('')
    return(
        <KeyboardAvoidingView style = {styles.container}>
            {/* <Header /> */}
            <View style = {styles.inputContainer}>
                <TextInput
                multiline
                style = {styles.input}
                value={bodyText}
                onChangeText={(text) => { setBodyText(text)}}
                autoFocus //画面遷移時に自動でカーソル当て
                />
            </View>
            <CircleButton onPress={()=> {handlePress(bodyText)}}>
                <Icon name = 'check' size = {40}  color = '#ffffff' />
            </CircleButton>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    inputContainer:{
        paddingVertical:32,
        paddingHorizontal:27,
        flex:1

    },
    input:{
        flex:1,
        fontSize:16,
        lineHeight:24,
        // android テキストの文字を上から表示
        textAlignVertical:'top'
        // ios テキストの文字を上から表示 → Textinputタグのmultlineオプションに該当
    }

})

export default Create
