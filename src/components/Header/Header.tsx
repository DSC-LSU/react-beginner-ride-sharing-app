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
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).catch((error) => {
      console.error("sign in error: ", error);
      alert("error signing in");
    });
  };

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(props.setUser);
  }, []);

  const signOut = () => {
    firebaseSignOut(firebaseAuth).catch((error) => {
      console.error("sign out error: ", error);
      alert("error signing out");
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
