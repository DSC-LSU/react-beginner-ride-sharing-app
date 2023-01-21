import React from 'react';
import './App.css';
import {CustomTabs} from "./components/CustomTabs/CustomTabs";

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

  return (
    <div className="App">
      <header className="header">
        <div className={'left'}>
          <h1 className={'title'}>Geaux Rides 🐯</h1>
          <p className={'subtitle'}>Ride sharing app for LSU tigers</p>
        </div>
        <div className={'right'}>
        </div>
      </header>
      <main>
          <CustomTabs tabs={['Driver', 'Rider']}/>
      </main>
    </div>
  );
}

export default App;
