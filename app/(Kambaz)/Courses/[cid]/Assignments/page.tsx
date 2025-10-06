import Link from "next/link";
import TopToolBar from "../Modules/TopToolBar";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButton from "../Modules/ModuleControlButton";
import LessonControlButton from "../Modules/LessonControlsButton";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControls from "../Modules/AssignmentControls";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <TopToolBar />
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray mt-4">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          Assignments
          <AssignmentControls />
        </div>
        <ListGroup className="wd-lessons rounded-0">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="text-success p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">A1 - ENV + HTML</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 6 at 12:00 AM |{" "}
                  <strong>Due </strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link  text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="text-success p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">A2 - CSS + BOOTSTRAP</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 13 at 12:00 AM |{" "}
                  <strong>Due </strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link  text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="text-success p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">A3 - JAVASCRIPT + REACT</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 20 at 12:00 AM |{" "}
                  <strong>Due </strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
        </ListGroup>
      </ListGroupItem>
    </div>
  );
}
