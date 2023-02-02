import "./PageSection.css";
import React from "react";

export type PageSectionProps = {
  className?: string;
  sectionHeader: string;
  sectionSubHeader: string;
  children?: React.ReactNode;
};

export const PageSection = (props: PageSectionProps) => {
  /* Destructuring the props object. */
  const { className, sectionHeader, sectionSubHeader, children } = props;

  return <div></div>;
};
