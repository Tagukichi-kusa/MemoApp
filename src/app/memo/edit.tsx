import React from "react";
import {View,TextInput,StyleSheet,Alert} from  "react-native"
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView";

// import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useLocalSearchParams } from "expo-router";
import { useState,useEffect } from "react";
import { doc,getDoc,setDoc,Timestamp } from "firebase/firestore";
import { auth,db } from "../../config";

const handlePress = ( id : string, bodyText : string ) :void => {
    if (auth.currentUser===null) { return }
    const ref  = doc(db, `users/${auth.currentUser.uid}/memos`, id )
    //setDoc 第一引数：接続先情報、第二引数：登録するオブジェクト
    setDoc(ref, {
        bodyText : bodyText,
        updatedAt : Timestamp.fromDate(new Date)
    })
    .then(()=>{
        router.back()
    })
    .catch((error)=>{
        console.log(error)
        Alert.alert('更新に失敗しました')
    })

}

const Edit = ():JSX.Element => {
    //useLocalSearchParamsでLinkのparamsパラメータの中身を呼び出す
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText ] = useState('')

    useEffect(() => {
        if(auth.currentUser === null){return }
        const ref  = doc(db, `users/${auth.currentUser.uid}/memos`, id )
        //getDoc 第一引数：接続先情報、後続処理にthen~catch文
        getDoc(ref)
        .then((docRef)=>{
            // console.log('success',docRef.data())
            const RemoteBodyText = docRef?.data()?.bodyText
            setBodyText(RemoteBodyText)
        })
        .catch((error) => {
            console.log(error)

        })
    } , [])
    return(
        <KeyboardAvoidingView style = {styles.container}>
            {/* <Header /> */}
            <View style = {styles.inputContainer}>
                <TextInput
                    multiline style = {styles.input}
                    value={bodyText}
                    onChangeText={(text)=> {setBodyText(text)}}
                    autoFocus //画面遷移時に自動でカーソル当て
                />
            </View>
            <CircleButton onPress={()=> { handlePress(id,bodyText) }}>
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
        flex:1

    },
    input:{
        flex:1,
        fontSize:16,
        lineHeight:24,
        // android テキストの文字を上から表示
        textAlignVertical:'top',
        // ios テキストの文字を上から表示 → Textinputタグのmultlineオプションに該当

        paddingVertical:32,
        paddingHorizontal:27
    }

})

export default Edit
