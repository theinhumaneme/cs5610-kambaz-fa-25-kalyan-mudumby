import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButton from "./LessonControlsButton";
import ModuleControlButton from "./ModuleControlButton";
import ModulesControls from "./ModuleControls";

export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      {/* <ModulesControls /> */}
      <div>
        <ModulesControls />
        <br />
        <br />
        <br />
        <br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 1<ModuleControlButton />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development <LessonControlButton />
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>

          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 2<ModuleControlButton />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Intro to Internet <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                History of the Internet <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Intranet vs Internet <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Types of Internet
                <LessonControlButton />
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>

          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Week 3<ModuleControlButton />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                XMl vs HTML, All about Markup Languages <LessonControlButton />
              </ListGroupItem>
              <ListGroupItem className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                HTML elements <LessonControlButton />
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
