import './PageSection.css';
import React from "react";

export type PageSectionProps = {
  className?: string,
  sectionHeader: string,
  children: React.ReactNode
}

export const PageSection = (props: PageSectionProps) => {
  const {className, sectionHeader, children} = props;

  const classNames = ['PageSection'];
  if (className) {
    classNames.push(className);
  }

  const fullClassName = classNames.join(' ');

  return <div className={fullClassName}>
    <h1 className={'section-header'}>{sectionHeader}</h1>
    {children}
  </div>
}