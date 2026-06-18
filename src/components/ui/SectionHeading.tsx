import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  children,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {text ? <p>{text}</p> : null}
      {children}
    </div>
  );
}
