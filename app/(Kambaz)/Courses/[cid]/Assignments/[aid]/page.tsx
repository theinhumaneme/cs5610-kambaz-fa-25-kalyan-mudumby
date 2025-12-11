"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Assignment } from "@/app/(Kambaz)/types/assignment";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../client";
import { addNewAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const newAssignmentTemplate: Assignment = {
    _id: "new",
    availableFrom: new Date().toISOString().split("T")[0],
    availableUntil: new Date().toISOString().split("T")[0],
    dueDate: new Date().toISOString().split("T")[0],
    course: cid as string,
    description: "New Assignment Description",
    points: 100,
    title: "New Assignment Title",
  };

  const [assignment, setAssignment] = useState<Assignment>(
    newAssignmentTemplate,
  );

  useEffect(() => {
    if (aid === "new") {
      setAssignment(newAssignmentTemplate);
    } else if (assignments.length > 0) {
      const foundAssignment = assignments.find(
        (a: Assignment) => a._id === aid,
      );
      if (foundAssignment) {
        setAssignment(foundAssignment);
      }
    }
  }, [aid, assignments]);

  const handleSave = async () => {
    try {
      if (aid === "new") {
        const newAssignmentWithId = {
          ...assignment,
          _id: crypto.randomUUID(),
          course: cid as string,
        };
        const createdAssignment = await client.createAssignment(
          newAssignmentWithId,
          cid as string,
        );
        dispatch(addNewAssignment(createdAssignment));
      } else {
        await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      }
    } catch (error) {
      console.error("Failed to save assignment", error);
    }
    redirect(`/Courses/${cid}/Assignments`);
  };

  const isStudent =
    currentUser &&
    (currentUser.role === "STUDENT" || currentUser.role === "USER");
  console.log(currentUser.role);

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Container>
          <FormLabel htmlFor="wd-name"> Assignment Name</FormLabel>
          <Row>
            <Col md={6}>
              <FormControl
                id="wd-name"
                type="text"
                value={assignment.title}
                onChange={(e) => {
                  setAssignment({ ...assignment, title: e.target.value });
                }}
                readOnly={isStudent}
              ></FormControl>
              <FormControl
                className="mt-2"
                id="wd-description"
                as="textarea"
                value={assignment.description}
                onChange={(e) => {
                  setAssignment({ ...assignment, description: e.target.value });
                }}
                rows={3}
                readOnly={isStudent}
              ></FormControl>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-points">Points</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                id="wd-points"
                type="number"
                value={assignment.points}
                onChange={(e) => {
                  setAssignment({
                    ...assignment,
                    points: parseInt(e.target.value),
                  });
                }}
                readOnly={isStudent}
              ></FormControl>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </Col>
            <Col md={4}>
              <FormSelect
                id="wd-group"
                defaultValue={"QUIZZES"}
                disabled={isStudent}
              >
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
              </FormSelect>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-display-grade-as">
                Display Grade As
              </FormLabel>
            </Col>
            <Col md={4}>
              <FormSelect id="wd-display-grade-as" disabled={isStudent}>
                <option value="PERCENTAGE">Percentage</option>
                <option value="GRADE-POINT">Grade Point</option>
              </FormSelect>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-submission-type">
                Submission Type
              </FormLabel>
            </Col>
            <Col md={4} className="border border-secondary rounded p-2">
              <FormSelect
                id="wd-submission-type"
                defaultValue={"IN-PERSON"}
                disabled={isStudent}
              >
                <option value="ONLINE">Online</option>
                <option value="IN-PERSON">In-Person</option>
              </FormSelect>
              <FormLabel className="mt-2">Online Entry Options</FormLabel>
              <Form.Check // prettier-ignore
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                disabled={isStudent}
              />
              <FormCheck
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                disabled={isStudent}
              />
              <FormCheck
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                disabled={isStudent}
              />
              <FormCheck
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotations"
                disabled={isStudent}
              />
              <FormCheck
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
                disabled={isStudent}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-assign-to">Assign To</FormLabel>
            </Col>
            <Col md={4} className="border border-secondary rounded p-2">
              <FormControl
                id="wd-assign-to"
                type="text"
                defaultValue={"Everyone"}
                readOnly={isStudent}
              ></FormControl>
              <FormLabel className="mt-2" htmlFor="wd-due-date">
                Due Date
              </FormLabel>
              <FormControl
                type="date"
                id="wd-due-date"
                name="trip-start"
                onChange={(e) => {
                  setAssignment({ ...assignment, dueDate: e.target.value });
                }}
                min="2018-01-01"
                max="2040-12-31"
                readOnly={isStudent}
              ></FormControl>
              <div className="d-flex justify-content-between">
                <div className="">
                  <FormLabel className="mt-2" htmlFor="wd-available-from">
                    Available From
                  </FormLabel>
                  <FormControl
                    type="date"
                    id="wd-available-from"
                    name="trip-start"
                    value={assignment.availableFrom}
                    onChange={(e) => {
                      setAssignment({
                        ...assignment,
                        availableFrom: e.target.value,
                      });
                    }}
                    min="2018-01-01"
                    max="2040-12-31"
                    readOnly={isStudent}
                  ></FormControl>
                </div>
                <div>
                  <FormLabel className="mt-2" htmlFor="wd-available-until">
                    Until
                  </FormLabel>
                  <FormControl
                    type="date"
                    id="wd-available-until"
                    name="trip-start"
                    value={assignment.availableUntil}
                    onChange={(e) => {
                      setAssignment({
                        ...assignment,
                        availableUntil: e.target.value,
                      });
                    }}
                    min="2018-01-01"
                    max="2040-12-31"
                    readOnly={isStudent}
                  ></FormControl>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>
              <hr />
            </Col>
          </Row>
          {!isStudent && (
            <Row className="mt-2">
              <Col md={4}></Col>
              <Col md={1}>
                <Button
                  onClick={() => {
                    redirect(`/Courses/${cid}/Assignments`);
                  }}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </Col>
              <Col md={1}>
                <Button variant="danger" onClick={handleSave}>
                  Save
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </Form>
    </div>
  );
}
