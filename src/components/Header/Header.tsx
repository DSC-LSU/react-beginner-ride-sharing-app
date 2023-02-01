import React, { useEffect } from "react";
import "./Header.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  User,
} from "firebase/auth";
import { firebaseAuth } from "../../backend/firebase";

type HeaderProps = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const Header = (props: HeaderProps) => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider)
      .then(() => console.log("signed in"))
      .catch((error) => {
        console.error("error", error);
        alert("error signing in");
      });
    console.log("Singing in ....");
  };

  useEffect(() => {
    console.log("HERE");
    firebaseAuth.onAuthStateChanged((user) => {
      props.setUser(user);

      if (user) {
        console.log("signed in user", user);
      } else {
        console.log("no user");
      }
    });
  }, []);

  const signOut = () => {
    firebaseSignOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out successful");
        props.setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.error("sign out error", error);
      });
  };

  return (
    <header className="header">
      <div className={"left"}>
        <p className={"title"}>Geaux Rides 🐯</p>
        <p className={"subtitle"}>Ride sharing app for LSU tigers</p>
      </div>
      <div className={"right"}>
        <button onClick={() => (props.user ? signOut() : signIn())}>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} />
          ) : (
            "🐯"
          )}
        </button>
      </div>
    </header>
  );
};
