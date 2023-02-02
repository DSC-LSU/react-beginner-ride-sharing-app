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

  // TODO 4: classNames = ["PagesSection"]
  // TODO 5: if (className) classNames.push(className)
  // TODO 6: const fullClassName = classNames.join(" ")

  // TODO 7: return <div className={fullClassName}>
  // TODO 7.1: <h1 className={"section-header"}>{sectionHeader}</h1>
  // TODO 7.2: <p className={"section-sub-header"}>{sectionSubHeader}</p>
  // TODO 7.3: {children}

  return <div></div>;
};
