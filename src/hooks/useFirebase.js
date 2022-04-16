import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile 
} from "firebase/auth";
import initialiseFirebase from "../Pages/Login/firebase/firebase.init";

// initialise firebase
initialiseFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  //it is used form waiting response
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //register with email and password
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to database
        // saveUserToDatabase(email,name,"POST");
        //sending name to firebase
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
          }).catch((error) => {
            setAuthError(error.message)
          });
        history.replace("/");
        
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //login
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //google sign in
  const googleSignIn = (location, history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user=result.user;
        //save user to database
        // saveUserToDatabase(user.email,user.displayName,'PUT');
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //set observer
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsuscribe;
  }, [auth]);
  //sign out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  /* //save user to database
  const saveUserToDatabase=(email,displayName,method)=>{
        const user={email,displayName};
        fetch("http://localhost:5000/users", {
          method: method,
          headers: {
            "content-type": "application/json",
          },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then()
  } */

  return {
    user,
    isLoading,
    registerUser,
    authError,
    loginUser,
    googleSignIn,
    logOut,
  };
};
export default useFirebase;
