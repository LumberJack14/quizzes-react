import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          margin: "0",
          backgroundColor: "#16171b",
          fontSize: "18px",
          color: "white",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
