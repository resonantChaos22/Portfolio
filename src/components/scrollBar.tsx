import react, { FunctionComponent, ReactNode, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
interface backgroundProps {
  children: ReactNode;
}

export const ScrollBar = ({ children }: backgroundProps) => {
  const styles = {
    /* Width of the scrollbar */
    // scrollbarWidth: "thin",
    scrollbarColor: "#2dd4bf",

    // /* Track */
    // backgroundColor: "#f1f1f1",

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#2dd4bf",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#2dd4bf",
    },

    // /* Handle on hover */
    scrollbarFaceColor_hover: "#2dd4bf",
  };

  return <div className="sb">{children}</div>;
};
