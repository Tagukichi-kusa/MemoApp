//config.tsファイルは覚える必要なし
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
//getReactNativePersistenceはインポート時にエラーになるため、tsconfig.jsonにて個別設定
import { getFirestore } from 'firebase/firestore'
import  ReactNativeAsyncStorage  from '@react-native-async-storage/async-storage'


const firebaseConfig = {
    apiKey:         process.env.EXPO_PUBLIC_FB_API_KEY,
    authDomain:     process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
    projectId:      process.env.EXPO_PUBLIC_FB_PPROJECT_ID,
    storageBucket:  process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
    appId:          process.env.EXPO_PUBLIC_FB_APP_ID
  }

//firebaseのアプリを初期化
const app = initializeApp(firebaseConfig)
//firebaseの認証サービスを初期化
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
//firebaseのDBを初期化
const db = getFirestore(app)

export {app, auth, db}
