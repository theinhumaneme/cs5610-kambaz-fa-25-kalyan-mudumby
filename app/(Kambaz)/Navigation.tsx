import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMailUnread } from "react-icons/io5";
import { FaCalendar, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { SiCoursera } from "react-icons/si";
import { HiBeaker } from "react-icons/hi";
export default function KambazNavigation() {
  return (
    <div>
      <ListGroup
        className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        style={{ width: 120 }}
        id="wd-kambaz-navigation"
      >
        <ListGroupItem
          className="bg-black border-0 text-center"
          as="a"
          href="https://www.northeastern.edu/"
          id="wd-neu-link"
          target="_blank"
        >
          <img
            src="/images/neu.svg"
            width="75px"
            alt="Northeastern University"
          />
        </ListGroupItem>
        <ListGroupItem className="border-0 bg-black text-center ">
          <Link
            className="text-white text-decoration-none"
            href="/Account"
            id="wd-account-link"
          >
            <FaRegCircleUser className="fs-1 text-white" />
            <br />
            Account
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 bg-black text-center active bg-white">
          <Link
            className="text-danger text-decoration-none "
            href="/Dashboard"
            id="wd-account-link"
          >
            <AiOutlineDashboard className="fs-1 text-danger" />
            <br />
            Dashboard
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 bg-black text-center">
          <Link
            className="text-white text-decoration-none"
            href="/Dashboard"
            id="wd-account-link"
          >
            <SiCoursera className="fs-1 text-danger" />
            <br />
            Courses
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 bg-black text-center">
          <Link
            className="text-white text-decoration-none"
            href="/Calendar"
            id="wd-account-link"
          >
            <FaCalendar className="fs-1 text-danger" />
            <br />
            Calendar
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 bg-black text-center">
          <Link
            className="text-white text-decoration-none"
            href="/Inbox"
            id="wd-account-link"
          >
            <IoMailUnread className="fs-1 text-danger" />
            <br />
            Inbox
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-0 bg-black text-center">
          <Link
            className="text-white text-decoration-none"
            href="/Labs"
            id="wd-account-link"
          >
            <HiBeaker className="fs-1 text-danger" />
            <br />
            Labs
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
