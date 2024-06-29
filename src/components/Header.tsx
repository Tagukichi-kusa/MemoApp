import React from "react"
import { View,Text,StyleSheet } from "react-native"

const Header = ():JSX.Element => {
 return(
    <View style={styles.header}>
    <View style={styles.headerInner}>
      <Text style={styles.headerTittle}>Memo App</Text>
      <Text style={styles.headerRight}>Logout</Text>
    </View>
    </View>


 )
}

const styles = StyleSheet.create({
    header : {
      backgroundColor : '#467FD3',
      height : 104,
      justifyContent: 'flex-end'
    },
    headerInner:{
      alignItems : 'center'
    },
    headerTittle:{
      marginBottom : 8,
      fontSize : 22,
      lineHeight : 32,
      fontWeight : 'bold',
      color : '#ffffff'
    },
    headerRight :{
      position : 'absolute',
      right : 16,
      bottom : 16,
      color : 'rgba(255,255,255,0.7)'
    },

})


export default Header
