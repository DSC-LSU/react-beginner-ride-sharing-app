import React from "react";
import "./App.css";
import { CustomTabs } from "./components/CustomTabs/CustomTabs";
import { DriverSection } from "./components/DriversSection/DriverSection";
import { RiderSection } from "./components/Riders/RiderSection/RiderSection";
import { User } from "firebase/auth";
import { Header } from "./components/Header/Header";

function App() {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
    </div>
  );
}

export default App;
