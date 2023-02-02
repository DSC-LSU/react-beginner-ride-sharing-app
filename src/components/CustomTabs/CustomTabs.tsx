import "./CustomTabs.css";

export type CustomTabsProps = {
  tabs: string[];
  selectedTab: number;
  onTabSelected: (index: number) => void;
};

export const CustomTabs = (props: CustomTabsProps) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return <div className={"custom-tabs"}></div>;
};
