import react, { FunctionComponent, ReactNode } from "react";
import { RoughNotation, RoughNotationProps } from "react-rough-notation";

interface underlineProps {
  children: ReactNode;
  order: string;
  type?: "underline" | "circle" | "highlight" | "box";
}

export const Underline = ({
  children,
  order,
  type = "underline",
}: underlineProps) => {
  return (
    <RoughNotation
      type={type}
      order={order}
      multiline
      padding={2}
      strokeWidth={2}
      animationDuration={300}
      color="#2DD4BF"
    >
      {children}
    </RoughNotation>
  );
};
