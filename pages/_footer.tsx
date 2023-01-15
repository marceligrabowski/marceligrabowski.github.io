import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container={true}>
      <Footer.Copyright href="/" by="Marceli Grabowski" year={new Date().getFullYear()} />
      <Footer.LinkGroup>
        <Footer.Link href="/about-me">About</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
