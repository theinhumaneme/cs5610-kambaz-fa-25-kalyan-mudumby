"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        as={Link}
        active={pathname.endsWith("Signin")}
        href="Signin"
        className="list-group-item border-0"
      >
        Signin
      </NavLink>
      <NavLink
        as={Link}
        active={pathname.endsWith("Signup")}
        href="Signup"
        className="list-group-item text-danger border-0"
      >
        Signup
      </NavLink>
      <NavLink
        as={Link}
        active={pathname.endsWith("Profile")}
        href="Profile"
        className="list-group-item text-danger border-0"
      >
        Profile
      </NavLink>
      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink
          className="list-group-item text-danger border-0"
          as={Link}
          href={`/Account/Users`}
          active={pathname.endsWith("Users")}
        >
          {" "}
          Users{" "}
        </NavLink>
      )}
    </div>
  );
}
