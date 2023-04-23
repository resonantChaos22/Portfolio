import Head from "next/head";
import react, { FunctionComponent, ReactNode, useRef } from "react";
interface backgroundProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: backgroundProps) => {
  return (
    <>
      {/* <Head>
        <title>Shreyash Portfolio</title>
        <link rel="icon" href="/S.ico" />
      </Head> */}

      <main className=" bg-gray-100 w-screen overflow-x-hidden overflow-y-scroll scrollbar-hide p-0 m-0">
        {children}
      </main>
    </>
  );
};
