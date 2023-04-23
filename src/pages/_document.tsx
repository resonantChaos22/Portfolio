import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scrollbar-hide overflow-x-hidden p-0 m-0">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
        rel="stylesheet"
        integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      ></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
