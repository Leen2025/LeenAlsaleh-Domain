import { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
};

export function Container({ children, className, as = "section", id }: ContainerProps) {
  const Component = as;

  return (
    <Component id={id} className={cn("section-shell", className)}>
      {children}
    </Component>
  );
}
