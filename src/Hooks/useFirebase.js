import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


initializeAuthentication();

const useFirebase =()=>{
  const [user, setUser] = useState({});
  
  
  const auth = getAuth();
  
  const GoogleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = ()=>{
    return signInWithPopup(auth, GoogleProvider)
    
  }
  //logout handle
  const logout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    })
    
  }
  //observe state change 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, user =>{
      if(user){
        setUser(user);
      }
      else{
        setUser({});
      }
    });
    return () => unsubscribe;
  },[])
  
  // register with email and password
  const signUpWithEmail =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //hendle login
  const signInWithEmail =(email, password)=>{
    return signInWithEmailAndPassword (auth, email, password)
  }

  return{
    user, setUser,
    signInUsingGoogle,
    logout,
    signUpWithEmail,
    signInWithEmail
  }
}

export default useFirebase;