import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native"
//import {Feather} from "@expo/vector-icons"
import Icon from "../../components/Icon";

// import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import { router, useLocalSearchParams } from "expo-router";
import { useState,useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { auth, db } from "../../config";
import { type Memo } from "../../../types/memo";

const handlePress = (): void => {
    router.push('/memo/edit')
}

const Detail = ():JSX.Element => {
    //useLocalSearchParamsでLinkのparamsパラメータの中身を呼び出す
    const { id } = useLocalSearchParams()
    console.log( id )
    const [memo, setMemo] = useState<Memo | null>(null)
    //初期処理
    useEffect(() => {
        if( auth.currentUser === null ){ return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos` ,String(id)) //String(id)でドキュメントIDを渡す
        //第一引数：接続先情報、第二引数：コールバック関数（memoDocを引数としてドキュメントの中身が格納）
        //unsubscribe関数は戻り値を返す関数 => 画面削除時にreturnでonSnapshotの戻り値を返すようにする
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            console.log(memoDoc.data())
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText: bodyText,
                updatedAt: updatedAt
            })
        })
        return unsubscribe
    }, [])
    return(
        <View style = {styles.container}>
            {/* <Header /> */}
            <View style = {styles.memoHeader}>
                <Text style = {styles.memoTittle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style = {styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleDateString('ja-JP')}</Text>
            </View>
            <ScrollView style = {styles.memoBody}>
                <Text style = {styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style = {{ top : 60, bottom : 'auto' }}>
                <Icon name='pencil' size = {40} color = '#ffffff'/>
            </CircleButton>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff'
    },
    memoHeader:{
        backgroundColor:`#467FD3`,
        height: 96,
        justifyContent : 'center',
        paddingVertical : 24,
        paddingHorizontal : 19
    },
    memoTittle:{
        color:'#ffffff',
        fontSize : 20,
        lineHeight : 32,
        fontWeight :'bold'
    },
    memoDate:{
        color:'#ffffff',
        fontSize : 12,
        lineHeight : 16
    },
    memoBody:{
        paddingHorizontal:27
    },
    memoBodyText:{
        paddingVertical:32,
        fontSize: 16,
        lineHeight : 24,
        color : '#000000'
    }

})

export default Detail
