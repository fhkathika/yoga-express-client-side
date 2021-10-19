import firebaseConfig from "./Firebase.config"
import {initializeApp}  from "firebase/app"

const initializationApp=()=>{
    initializeApp(firebaseConfig)
} 
export default initializationApp