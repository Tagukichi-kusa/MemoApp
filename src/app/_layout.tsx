// Index.tsxの外側になる特殊なファイル[ファイル名は固定]

import { Stack } from 'expo-router'
import React from 'react';

const Layout = () :JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3'  //背景色
        },
        headerTintColor: '#ffffff', //タイトルの文字色
        headerTitle: 'Memo App',    //タイトル名
        headerBackTitle: 'Back',     //バックボタンの名前
        headerTitleStyle:{
            fontSize:22,
            fontWeight:'bold',
        }

    }} />

}

export default Layout
