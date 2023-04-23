import Head from "next/head";
import react, { FunctionComponent, ReactNode } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

interface boxProps {
  children: ReactNode;
  order: number;
  toggle: boolean;
  color: string;
}

export const Box = ({ children, order, toggle, color }: boxProps) => {
  return (
    <RoughNotation type="box" order={order} show={toggle} color={color}>
      <div className="text-center" style={{ color: color }}>
        {children}
      </div>
    </RoughNotation>
  );
};
