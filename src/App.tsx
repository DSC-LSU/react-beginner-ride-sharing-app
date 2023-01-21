import React from 'react';
import './App.css';
import {CustomTabs} from "./components/CustomTabs/CustomTabs";
import {DriverSection} from "./components/DriversSection/DriverSection";
import {RiderSection} from "./components/RiderSection/RiderSection";

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

  return (
    <div className="App">
      <header className="header">
        <div className={'left'}>
          <p className={'title'}>Geaux Rides 🐯</p>
          <p className={'subtitle'}>Ride sharing app for LSU tigers</p>
        </div>
        <div className={'right'}>
        </div>
      </header>
      <main>
        <CustomTabs tabs={['Driver', 'Rider']} selectedTab={selectedTab} onTabSelected={setSelectedTab}/>
        {selectedTab === 0 ? <DriverSection/> : <RiderSection/>}
      </main>
    </div>
  );
}

export default App;
