import { Avatar, Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Header() {
  const { asPath } = useRouter();

  return (
    <Navbar fluid={true}>
      <Navbar.Brand
        className="flex-grow"
        href="https://marceligrabowski.github.io/"
      >
        <Avatar
          className="mr-3"
          img="mua.jpg"
          rounded={true}
          size="lg"
        ></Avatar>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Marceli Grabowski
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link
          href="https://www.linkedin.com/in/marceligrabowski/"
          target="_blank"
        >
          <Button className="m-1">
            <AiFillLinkedin className="h-6 w-6" />
          </Button>
        </Link>
        <Link href="https://github.com/marceligrabowski" target="_blank">
          <Button className="m-1">
            <AiOutlineGithub className="h-6 w-6" />
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:m-4">
        <Navbar.Link href="/" active={asPath === "/"}>
          Blog
        </Navbar.Link>
        <Navbar.Link href="/about-me" active={asPath === "/about-me"}>
          About me
        </Navbar.Link>
        <Navbar.Link href="/resume.pdf" target="_blank">
          Resume
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
