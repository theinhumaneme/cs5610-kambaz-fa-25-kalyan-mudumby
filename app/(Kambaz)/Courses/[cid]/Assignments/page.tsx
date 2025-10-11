import { assignments } from "@/app/(Kambaz)/Database";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControls from "../components/AssignmentControls";
import LessonControlButton from "../components/LessonControlsButton";
import TopToolBar from "../components/TopToolBar";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  return (
    <div id="wd-assignments">
      <TopToolBar />
      <div className="wd-module p-0 mb-5 fs-5 border-gray mt-4">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          Assignments
          <AssignmentControls />
        </div>
        <ListGroup className="wd-lessons rounded-0">
          {assignments
            .filter((assignment: Assignment) => assignment.course === cid)
            .map((assignment) => (
              <Link
                key={assignment._id}
                href={`/Courses/${cid}/Assignments/${assignment._id}`}
                className="wd-assignment-link text-decoration-none"
              >
                <ListGroupItem
                  key={assignment._id}
                  className="wd-lesson p-3 ps-1 d-flex align-items-center"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="text-success p-1 fs-1" />
                  <div className="flex-grow-1">
                    <div className="fw-bold">{assignment.title}</div>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 6 at 12:00 AM |{" "}
                      <strong>Due </strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                  <LessonControlButton />
                </ListGroupItem>
              </Link>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}
