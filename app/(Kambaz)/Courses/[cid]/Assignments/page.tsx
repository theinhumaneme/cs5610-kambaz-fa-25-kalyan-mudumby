import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsClipboardCheck, BsGripVertical } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControls from "../Modules/AssignmentControls";
import LessonControlButton from "../Modules/LessonControlsButton";
import TopToolBar from "../Modules/TopToolBar";

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
          <Link
            href="/Courses/1234/quiz/123"
            className="wd-quiz-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsClipboardCheck className="text-primary p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">Q1 - ENV + HTML</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 7 at 12:00 AM |{" "}
                  <strong>Due </strong> May 7 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Quiz/123"
            className="wd-quiz-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsClipboardCheck className="text-primary p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">Q2 - CSS + BOOTSTRAP</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 13 at 12:00 AM |{" "}
                  <strong>Due </strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Quiz/123"
            className="wd-quiz-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <BsClipboardCheck className="text-primary p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">Q3 - JAVASCRIPT + REACT</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 20 at 12:00 AM |{" "}
                  <strong>Due </strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Project/123"
            className="wd-project-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaFolderOpen className="text-warning p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">Project</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> May 6 at 12:00 AM |{" "}
                  <strong>Due </strong> August 31 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Exam/123"
            className="wd-exam-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoDocumentTextOutline className="text-danger p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">Mid Term Exam</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> July 31 at 12:00 AM |{" "}
                  <strong>Due </strong> July 31 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButton />
            </ListGroupItem>
          </Link>
          <Link
            href="/Courses/1234/Exam/123"
            className="wd-exam-link text-decoration-none"
          >
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <IoDocumentTextOutline className="text-danger p-1 fs-1" />
              <div className="flex-grow-1">
                <div className="fw-bold">Final Exam</div>
                <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not available until</strong> August 31 at 12:00 AM |{" "}
                  <strong>Due </strong> August 31 at 11:59pm | 100 pts
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
