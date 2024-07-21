import { View,StyleSheet,FlatList } from "react-native";
import React, { useState } from 'react';
import { useEffect } from "react";
import { router, useNavigation } from "expo-router";

// import Header from '../../components/Header'
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import LogOutButton from "../../components/LogOutButton";
//import { Feather } from "@expo/vector-icons";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db, auth } from "../../config"
import { type Memo } from "../../../types/memo";


import Icon from "../../components/Icon"
const handlePress = ():void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  //変数定義
  const [ memos, setMemos ] = useState<Memo[]>([])
  //ナビゲーションのカスタマイズ（オブジェクト取得）
  const navigation = useNavigation()
  //初期処理（useEffect）
  useEffect( () => {
    navigation.setOptions({
      // この画面だけヘッダーの右側をカスタマイズ
      headerRight: () => {return <LogOutButton />}
    })
  }, [])
  //初期処理 & アンマウント（コンポーネント削除）時に実行
  useEffect( () => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    //第一引数：接続先情報、第二引数：クエリー（第二引数なしの場合はselect ALL）
    const q = query(ref, orderBy('updatedAt','desc'))
    //第一引数：接続先情報、第二引数：コールバック関数（snapshotを引数としてMemoの中身が格納）
    //unsubscribe関数は戻り値を返す関数 => 画面削除時にreturnでonSnapshotの戻り値を返すようにする
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos:Memo[] = []
      //スナップショット（配列）の中身を順に出力する
      snapshot.forEach((doc) => {
        // console.log('memo',doc.data())
        //doc.idの場合はIDを出力可能
        //doc.data()はデータ全量
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id : doc.id,
          bodyText : bodyText,
          updatedAt : updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  return(
<View style={styles.container}>
{/* Header */}
    {/* <Header /> */}
{/* MemoList */}
    <FlatList
    data = {memos}
    renderItem={( {item} ) => { return( <MemoListItem memo = {item} />) }}
    />
    {/* <View>
      {memos.map((memo)=>{ return <MemoListItem memo = {memo} /> })}
    </View> */}

{/* Button */}
    <CircleButton onPress={handlePress}>
        <Icon name='plus' size = {40} color = '#ffffff'/>
    </CircleButton>

</View>

  )
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor : '#ffffff'
  }
})
export default List
