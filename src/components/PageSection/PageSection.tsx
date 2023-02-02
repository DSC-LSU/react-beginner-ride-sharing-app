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

  const classNames = ["PageSection"];
  if (className) {
    classNames.push(className);
  }

  const fullClassName = classNames.join(" ");

  return (
    <div className={fullClassName}>
      <h1 className={"section-header"}>{sectionHeader}</h1>
      <p className={"section-sub-header"}>{sectionSubHeader}</p>
      {children}
    </div>
  );
};
