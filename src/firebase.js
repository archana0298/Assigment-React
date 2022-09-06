import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
const app = firebase.initializeApp({

  apiKey: "AIzaSyATaXDT_W1sF-DYFi1OeAsmkDeSGwIod7U",
  authDomain: "fir-assignment-4c851.firebaseapp.com",
  databaseURL: "https://fir-assignment-4c851-default-rtdb.firebaseio.com",
  projectId: "fir-assignment-4c851",
  storageBucket: "fir-assignment-4c851.appspot.com",
  messagingSenderId: "1000081409769",
  appId: "1:1000081409769:web:5af44736b3b2695a0dd278"
  
})  

export const auth = app.auth()
export default app
