import React from "react"
import { createIconSetFromIcoMoon } from "@expo/vector-icons"
import { useFonts } from "expo-font"
//フォントデータが読み取られたか確認するもの。フォントデータが読み込まれる前に使おうとすると実行時にエラーになるので、それらを制御する

import fontData from "../../assets/fonts/icomoon.ttf"
import fontSelection from "../../assets/fonts/selection.json"


const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,  //自身で作成したJSONファイル
    'IcoMoon',
    'icomoon.ttf'   //ttfファイル
)

interface Props {
    name:string,
    size:number,
    color:string
}

const Icon = (props:Props):JSX.Element | null => {
    const{name,size,color} = props
    const [fontLoaded] = useFonts({
        IcoMoon: fontData //読み込むデータ
    })

    // fontLoadedには、読み込まれていなかったらfalseが入っている
    if (!fontLoaded){
        //読み込み失敗の場合の処理
        return null
    }

    return(
        <CustomIcon name = {name} size = {size} color = {color} />

    )
}

export default Icon
