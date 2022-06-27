// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut, 
  updateProfile} from "firebase/auth";
  import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBWXO7Eb0s2UmnFidL86OhK9N6LD57FM2U",
  authDomain: "fireblog-app-c7f31.firebaseapp.com",
  projectId: "fireblog-app-c7f31",
  storageBucket: "fireblog-app-c7f31.appspot.com",
  messagingSenderId: "989078222843",
  appId: "1:989078222843:web:57ade15cb665a254d33d5e",
  measurementId: "G-B2S4049C15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//! register user
export const signUp = (email,password,toastSuccessNotify, toastErrorNotify, navigate, user, setUser) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("🦄 Logged in successfully!");
    console.log("Signed Up:", email)
  } 
  catch (error) {
    console.log(error);
    toastErrorNotify(error.message);
  }
};

//! login user
export const signIn = (email, password, toastSuccessNotify, toastErrorNotify, navigate, user, setUser) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    toastSuccessNotify("🦄 Logged in successfully!");
    navigate("/");
    console.log("Logged In:", email)

  })
  .catch(error => {
    toastErrorNotify(error.message);
    console.log(error);
  });
};


//! logout user
export const logOut = () => {
  signOut(auth);
  alert("🦄 You have been logged out");
}

//! update user profile
export const updateUserProfile =(displayName, password)=>{
  updateProfile(auth.currentUser, {
    user: displayName, 
    password: password
  
  }).catch((error) => {
    toast(error)
  });
}
//! sign in with google
export const loginWithGoogle = (toastSuccessNotify, toastErrorNotify, setUser, navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(() => {      
      toastSuccessNotify("🦄 Logged in successfully!");
      navigate("/");

    })
    .catch(error => {
      toastErrorNotify(error.message);
      console.log(error);
    });
  };