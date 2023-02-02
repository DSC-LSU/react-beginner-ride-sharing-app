import { useEffect } from "react";
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
  const signIn = () => {};

  useEffect(() => {
    // Listen for auth state changes
  }, []);

  const signOut = () => {};

  return (
    <header className="header">
      {/* TODO 3: <div className={"left"}> */}
      {/* TODO 3.1: <p className={"title"}>Geaux Rides 🐯</p> */}
      {/* TODO 3.2: <p className={"subtitle"}>Ride sharing app for LSU tigers</p> */}

      {/* TODO 4: <div className={"right"}> */}
      {/* TODO 4.1: Create a button with onClick=signIn()/signOut() and children=🐯/<img src={props.user.photoURL} /> */}
    </header>
  );
};
