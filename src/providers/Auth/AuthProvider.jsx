
import { useEffect, useState } from 'react';
import AuthContext from '../../context/Auth/AuthContext'
import { GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../firebase_auth/firebase.init'
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const[user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

   //register user
    const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    //update registered user info
    const updateUser = (name, image) =>{
      return updateProfile (auth.currentUser, {
        displayName: name, photoURL: image,
      });
    }

    //login user
  const loginUser =(email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  //login with google
  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  //logout user
  const logoutUser = ()=>{
    setLoading(true);
    return signOut(auth)
  }


  //current user
  useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser);
          setLoading(false)
        }) 
        return ()=> {
          unsubscribe()
        };
  },[])

  const authInfo={
    user, loading, createUser, loginUser, logoutUser, updateUser, logInWithGoogle
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  );
};

export default AuthProvider;