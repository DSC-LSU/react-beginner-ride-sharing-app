import React, {useEffect} from "react";
import './Header.css';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {firebaseAuth} from "../../backend/firebase";

export const Header = () => {


  // const signIn = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(firebaseAuth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log('user', user);
  //       // ...
  //     }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //     console.error('error', error);
  //   });
  // }

  // useEffect(() => {
  //   firebaseAuth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log('signed in user', user);
  //       } else {
  //       console.log('no user');
  //     }
  //   });
  // }, []);

  return <header className="header">
    <div className={'left'}>
      <p className={'title'}>Geaux Rides 🐯</p>
      <p className={'subtitle'}>Ride sharing app for LSU tigers</p>
    </div>
    <div className={'right'}>
      {/*<button onClick={() => console.log('CLICKED')}>Sign in</button>*/}
    </div>
  </header>
}