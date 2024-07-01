import React from "react";
import {View,TextInput,StyleSheet,
    KeyboardAvoidingView
} from  "react-native"

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";

const Edit = ():JSX.Element => {
    return(
        <KeyboardAvoidingView behavior="height" style = {styles.container}>
            <Header />
            <View style = {styles.inputContainer}>
                <TextInput multiline style = {styles.input} value={'筋トレリスト\n改行が有効になっていること'}/>
            </View>
            <CircleButton>
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

export default Edit
