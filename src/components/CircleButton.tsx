import React from "react";
import {View,Text,StyleSheet,type ViewStyle} from "react-native"

interface Props {
    children : JSX.Element
    style? : ViewStyle
}

const CircleButton = (props:Props):JSX.Element => {
    const { children, style } = props
    return(
        <View style = {[styles.circleButton, style]}>
            <Text style = {styles.circleButtonLabel}>{children}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  circleButton :{
    width : 64,
    height : 64,
    borderRadius : 32 ,
    backgroundColor : '#467FD3',
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute',
    right : 40 ,
    bottom : 40,
    //shadow系はiOSのみ
    shadowColor : '#000000',
    shadowOpacity : 0.25,   //透明度
    shadowRadius : 4,        //ぼかし
    shadowOffset : {width: 2,height: 5},
    //elevation系はandroidのみ
    elevation : 8
  },
  circleButtonLabel :{
    color : '#ffffff',
    fontSize : 40,
    lineHeight : 42
  }
})

export default CircleButton
