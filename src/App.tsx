import React from "react";
import "./App.css";
import { CustomTabs } from "./components/CustomTabs/CustomTabs";
import { DriverSection } from "./components/DriversSection/DriverSection";
import { RiderSection } from "./components/Riders/RiderSection/RiderSection";
import { User } from "firebase/auth";
import { Header } from "./components/Header/Header";

function App() {
  // TODO 1: Create a state variable user and a setter setUser
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [user, setUser] = React.useState<User | null>(null);
  return (
    <div className="App">
      {/* TODO 2: <Header /> */}
      <Header user={user} setUser={setUser} />
    </div>
  );
}

export default App;
