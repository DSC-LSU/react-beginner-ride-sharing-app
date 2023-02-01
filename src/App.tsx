import React, { useEffect } from "react";
import "./App.css";
import { CustomTabs } from "./components/CustomTabs/CustomTabs";
import { DriverSection } from "./components/DriversSection/DriverSection";
import { RiderSection } from "./components/Riders/RiderSection/RiderSection";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { firebaseAuth } from "./backend/firebase";
import { Header } from "./components/Header/Header";
import { RiderRequestedSection } from "./components/Riders/RiderRequestedSection/RiderRequestedSection";
// import {RiderRequestedSection} from './components/Riders/RiderRequestedSection/RiderRequestedSection';

function App() {
  // const _CustomToggle = () => {
  //   return <>
  //
  //     <label className={'custom-checkbox-label'}>
  //       <div className={'option first'}>First</div>
  //       <input type="checkbox" className="custom-checkbox"/>
  //       <div className={'option second'}>Second</div>
  //     </label>
  //   </>
  // }

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [user, setUser] = React.useState<User | null>(null);

  // useEffect(() => {
  //   console.log("signin with popup");
  //
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
  // });

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <main>
        <CustomTabs
          tabs={["Driver", "Rider"]}
          selectedTab={selectedTab}
          onTabSelected={setSelectedTab}
        />
        {selectedTab === 0 ? (
          <DriverSection />
        ) : (
          <RiderSection user={user} setUser={setUser} />
        )}
        {/* <RiderRequestedSection/> */}
      </main>
    </div>
  );
}

export default App;
