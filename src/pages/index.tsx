import { Wrapper } from "@/components/wrapper";
import { useEffect, useRef, useState } from "react";
import Preload from "@/components/preloader";
import HomeComp from "@/components/home";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState(false);
  useEffect(() => {
    setTimeout(() => setHome(true), 1200);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Shreyash Portfolio</title>
        <link rel="icon" href="/S.ico" />
      </Head>
      <Wrapper>
        {loading === true ? <Preload /> : <></>}
        {home === true ? <HomeComp /> : <></>}
      </Wrapper>
    </>
  );
}
