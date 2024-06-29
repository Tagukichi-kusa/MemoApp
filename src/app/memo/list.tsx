import { View,StyleSheet } from "react-native";
import React from 'react';
import { Feather } from "@expo/vector-icons";

import Header from '../../components/Header'
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
const Index = (): JSX.Element => {
  return(
<View style={styles.container}>
{/* Header */}
    <Header />
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
    <CircleButton><Feather  name = 'plus' size = {40} /></CircleButton>

</View>

  )
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor : '#ffffff'
  }
})
export default Index
