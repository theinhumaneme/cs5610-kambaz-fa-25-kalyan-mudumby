"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Assignment } from "@/app/(Kambaz)/types/assignment";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import AssignmentControls from "../components/AssignmentControls";
import LessonControlButton from "../components/LessonControlsButton";
import TopToolBar from "../components/TopToolBar";
import { deleteAssignment, setAssignments } from "./reducer";

import * as client from "../../client";

export default function Assignments() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    try {
      const assignments = await client.fetchAllAssignments();
      dispatch(setAssignments(assignments));
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

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
            .map((assignment: Assignment) => (
              <div
                key={assignment._id}
                className="wd-assignment-link text-decoration-none"
              >
                <ListGroupItem
                  key={assignment._id}
                  className="wd-lesson p-3 ps-1 d-flex align-items-center"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="text-success p-1 fs-1" />
                  <div className="flex-grow-1">
                    <div className="fw-bold">
                      <Link
                        className="text-decoration-none"
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </Link>
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong>{" "}
                      {assignment.availableFrom} at 12:00 AM |{" "}
                      <strong>Due </strong> {assignment.dueDate} at 11:59pm |{" "}
                      {assignment.points} pts
                    </div>
                  </div>

                  <LessonControlButton
                    assignmentId={assignment._id}
                    deleteAssignment={onDelete}
                    editAssignment={() => {
                      redirect(`/Courses/${cid}/Assignments/${assignment._id}`);
                    }}
                  />
                </ListGroupItem>
              </div>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}
