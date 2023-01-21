import React from "react";
import './CustomTabs.css';

export type CustomTabsProps = {
  tabs: string[],
}

export const CustomTabs = (props: CustomTabsProps) => {
  const {tabs} = props;

  const [selectedTab, setSelectedTab] = React.useState(0);

  return <div className={'custom-tabs'}>
    {tabs.map((tab, index) => {
      return <button data-selected={selectedTab === index} onClick={() => setSelectedTab(index)}>{tab}</button>
    })}
  </div>
}