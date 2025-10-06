import { Button, Container } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";
import DeleteIcon from "../Modules/DeleteIcon";
import { CiImport } from "react-icons/ci";
import { IoBarChart, IoExitOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaBell } from "react-icons/fa6";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <Container>
        <h2>Course Status</h2>
        <div className="d-flex gap-2 mb-3">
          <Button variant="secondary" className="flex-grow-1">
            <DeleteIcon />
            Unpublish
          </Button>
          <Button variant="success" className="flex-grow-1">
            <GreenCheckmark />
            Publish
          </Button>
        </div>
        <div className="d-grid gap-2">
          <Button variant="secondary" className="text-start">
            <CiImport className="fs-1 p-2" />
            Import Existing Content
          </Button>
          <Button variant="secondary" className="text-start">
            <IoExitOutline className="fs-1 p-2" />
            Import from Commons
          </Button>
          <Button variant="secondary" className="text-start">
            <FaHome className="fs-1 p-2" />
            Choose Home Page
          </Button>
          <Button variant="secondary" className="text-start">
            <IoBarChart className="fs-1 p-2" />
            View Course Screen
          </Button>
          <Button variant="secondary" className="text-start">
            <TfiAnnouncement className="fs-1 p-2" />
            New Announcement
          </Button>
          <Button variant="secondary" className="text-start">
            <IoBarChart className="fs-1 p-2" />
            New Analytics
          </Button>
          <Button variant="secondary" className="text-start">
            <FaBell className="fs-1 p-2" />
            View Course Notifications
          </Button>
        </div>
      </Container>
    </div>
  );
}
