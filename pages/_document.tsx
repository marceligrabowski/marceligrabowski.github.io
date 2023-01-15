import { Html, Head, Main, NextScript } from "next/document";
import FooterComponent from "./_footer";
import Header from "./_header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
        <FooterComponent></FooterComponent>
      </body>
    </Html>
  );
}
