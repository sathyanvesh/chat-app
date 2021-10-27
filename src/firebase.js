import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClRx5zerhglv2fcbWZuxEA-7eH_Wb9pNk",
  authDomain: "chat-app-50a3e.firebaseapp.com",
  projectId: "chat-app-50a3e",
  storageBucket: "chat-app-50a3e.appspot.com",
  messagingSenderId: "386643673117",
  appId: "1:386643673117:web:a3dfed0f78da5b94df06f4"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }