import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/FireBase/firebase.init";
import useAuth from "./useAuth";
initializeAuthentication();

// useFirebase started
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const auth = getAuth();


  // sign in option
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  }


  // observed user state change.
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  // sing out option
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  // const createUserWithEmail = () => {
  //   const { email, password }=useState();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //     })
  // }

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut
  }
}
export default useFirebase;


