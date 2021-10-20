import firebaseConfig from "./firebase.config"
import {initializeApp}  from "firebase/app"

const initializationApp=()=>{
    initializeApp(firebaseConfig)
} 
export default initializationApp