import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/FireBase/firebase.init";
initializeAuthentication();

// useFirebase started
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);



  const auth = getAuth();


  // sign in option
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .finally(() => setIsLoading(false));
  }
  // email pass
  const toggleLogIn = e => {
    setIsLogin(e.target.checked)
  }
  const handleNameChange = e => {
    setName(e.target.value);
  }


  const emailChangeHandler = e => {
    setEmail(e.target.value);
  }

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  }

  const handleRegister = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 Characters long.')
      return;
    }
    if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
      setError('Password Must containt to lower case')
      return;
    }
    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }
  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setError('');
        console.log(user);
      })
      .catch(error => {
        setError(error.message);
      })

  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName()
      })
      .catch(error => {
        setError(error.message);
      })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
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



  return {
    user,
    error,
    isLoading,
    toggleLogIn,
    handleRegister,
    handleNameChange,
    signInUsingGoogle,
    emailChangeHandler,
    handleResetPassword,
    passwordChangeHandler,

    logOut
  }
}
export default useFirebase;


