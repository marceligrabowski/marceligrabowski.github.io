import { Avatar, Button, Navbar } from "flowbite-react";
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
          Marceli Grabowski | Software Developer
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button
          className="m-1"
          href="https://www.linkedin.com/in/marceligrabowski/"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </Button>
        <Button className="m-1" href="https://github.com/marceligrabowski">
          <AiOutlineGithub className="h-6 w-6" />
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:m-4">
        <Navbar.Link href="/" active={asPath === "/"}>
          Blog
        </Navbar.Link>
        <Navbar.Link href="/about-me" active={asPath === "/about-me"}>
          About me
        </Navbar.Link>
        <Navbar.Link href="/resume" active={asPath === "/resume"}>
          Resume
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
