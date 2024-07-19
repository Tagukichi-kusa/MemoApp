import React from "react";
import { Redirect, router } from "expo-router";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";

const Index = ():JSX.Element => {
  useEffect(() => {
    //第一引数：auth、第二引数：コールバック関数
    onAuthStateChanged(auth, (user) => {
      if( user !== null ) {
        router.replace('/memo/list')
      }
    })
  }, [] )
  return(
    <Redirect href = 'auth/log_in' />

  )
}

export default Index
