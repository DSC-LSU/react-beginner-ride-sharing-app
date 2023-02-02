import "./CustomTabs.css";

export type CustomTabsProps = {
  tabs: string[];
  selectedTab: number;
  onTabSelected: (index: number) => void;
};

export const CustomTabs = (props: CustomTabsProps) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div className={"custom-tabs"}>
      {/* TODO 3: tabs.map() */}
      {/* TODO 3.1: return <button key={tab} data-selected={selectedTab === index} onClick={() => onTabSelected(index)}> */}
      {/* TODO 3.1.1: {tab} */}

      {tabs.map((tab, index) => {
        return (
          <button
            key={tab}
            data-selected={selectedTab === index}
            onClick={() => onTabSelected(index)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
