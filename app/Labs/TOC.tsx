import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink href="/Labs" as={Link}>
          Labs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab1" as={Link}>
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab2" as={Link}>
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab3" as={Link}>
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/" as={Link}>
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="https://cs5610-kambaz-fall-25-kalyan-git-b94b2f-theinhumanemes-projects.vercel.app/"
          as={Link}
        >
          Vercel Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/theinhumaneme/cs5610-kambaz-fa-25-kalyan-mudumby">
          GitHub Repository
        </NavLink>
      </NavItem>
    </Nav>
  );
}
