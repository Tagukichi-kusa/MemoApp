import { View,StyleSheet } from "react-native";
import React from 'react';
import { useEffect } from "react";

// import Header from '../../components/Header'
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import LogOutButton from "../../components/LogOutButton";
//import { Feather } from "@expo/vector-icons";
import Icon from "../../components/Icon"
import { router, useNavigation } from "expo-router";

const handlePress = ():void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  //ナビゲーションのカスタマイズ（オブジェクト取得）
  const navigation = useNavigation()
  //初期処理（useEffect）
  useEffect( () => {
    navigation.setOptions({
      // この画面だけヘッダーの右側をカスタマイズ
      headerRight: () => {return <LogOutButton />}
    })
  },[])

  return(
<View style={styles.container}>
{/* Header */}
    {/* <Header /> */}
{/* MemoList */}
    <View>
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
    </View>

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
