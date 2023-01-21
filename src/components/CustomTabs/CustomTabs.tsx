import React from "react";
import './CustomTabs.css';

export type CustomTabsProps = {
  tabs: string[],
  selectedTab: number,
  onTabSelected: (index: number) => void
}

export const CustomTabs = (props: CustomTabsProps) => {
  const {tabs, selectedTab, onTabSelected} = props;

  return <div className={'custom-tabs'}>
    {tabs.map((tab, index) => {
      return <button key={tab} data-selected={selectedTab === index} onClick={() => onTabSelected(index)}>{tab}</button>
    })}
  </div>
}