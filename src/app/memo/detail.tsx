import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native"
import {Feather} from "@expo/vector-icons"

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";


const Detail = ():JSX.Element => {
    return(
        <View style = {styles.container}>
            <Header />
            <View style = {styles.memoHeader}>
                <Text style = {styles.memoTittle}>テストテーマ名</Text>
                <Text style = {styles.memoDate}>2024/03/19 10:00</Text>
            </View>
            <ScrollView style = {styles.memoBody}>
                <Text style = {styles.memoBodyText}>
                    いい調子で筋力アップしていますね。
                    来週以降もベンチプレスの強度を上げられるように維持していきましょう！！！
                    食事管理も適度に行なっていけるとなお良しです。
                </Text>
            </ScrollView>
            <CircleButton style = {{ top : 160, bottom : 'auto' }}><Feather  name = 'plus' size = {40} /></CircleButton>
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
        paddingVertical:32,
        paddingHorizontal:27
    },
    memoBodyText:{
        fontSize: 16,
        lineHeight : 24,
        color : '#000000'
    }

})

export default Detail
