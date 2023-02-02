import React from "react";
import "./App.css";
import { CustomTabs } from "./components/CustomTabs/CustomTabs";
import { DriverSection } from "./components/DriversSection/DriverSection";
import { RiderSection } from "./components/Riders/RiderSection/RiderSection";
import { User } from "firebase/auth";
import { Header } from "./components/Header/Header";

function App() {
  // TODO 1: Create a state variable selectedTab and a setter setSelectedTab
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />

      {/* TODO 2: <main> */}
      {/* TODO 2.1: <CustomTabs tabs={["Driver", "Rider"]} selectedTab={selectedTab} onTabSelected={setSelectedTab}/> */}
      {/* TODO 2.1.1: {selectedTab === 0 ? <DriverSection /> : <RiderSection />} */}
    </div>
  );
}

export default App;
