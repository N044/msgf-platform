import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export function Section({
  children,
  className = "",
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`.trim()}>
      {children}
    </Component>
  );
}
