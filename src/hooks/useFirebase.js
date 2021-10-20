import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)

    const auth=getAuth()
    

    const signInUsingGoogle=()=>{
        setIsLoading(true)
        const googleProvider=new GoogleAuthProvider()
       return signInWithPopup(auth,googleProvider)
       .finally(()=>{
        setIsLoading(false)
       })
       
    }
  

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
           else{
               setUser({})
           }
           setIsLoading(false)

        })
    },[])

    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
setUser({})
        })
        .finally(()=>setIsLoading(false))
    }
    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}
export default useFirebase