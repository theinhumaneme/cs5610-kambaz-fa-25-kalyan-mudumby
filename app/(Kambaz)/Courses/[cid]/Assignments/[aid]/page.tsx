import { assignments } from "@/app/(Kambaz)/Database";
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

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment: Assignment = assignments.filter(
    (assignment: Assignment) => assignment._id === aid,
  )[0];
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
                defaultValue={assignment.title}
              ></FormControl>
              <FormControl
                className="mt-2"
                id="wd-description"
                as="textarea"
                defaultValue={assignment.description}
                rows={3}
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
                defaultValue={assignment.points}
              ></FormControl>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </Col>
            <Col md={4}>
              <FormSelect id="wd-group">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES" selected={true}>
                  Quizzes
                </option>
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
              <FormSelect id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option selected={true} value="GRADE-POINT">
                  Grade Point
                </option>
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
              <FormSelect id="wd-submission-type" value={"IN-PERSON"}>
                <option value="ONLINE">Online</option>
                <option value="IN-PERSON">In-Person</option>
              </FormSelect>
              <FormLabel className="mt-2">Online Entry Options</FormLabel>
              <Form.Check // prettier-ignore
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
              />
              <FormCheck
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
              />
              <FormCheck
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
              />
              <FormCheck
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotations"
              />
              <FormCheck
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
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
              ></FormControl>
              <FormLabel className="mt-2" htmlFor="wd-due-date">
                Due Date
              </FormLabel>
              <FormControl
                type="date"
                id="wd-due-date"
                name="trip-start"
                defaultValue={assignment.dueDate}
                min="2018-01-01"
                max="2040-12-31"
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
                    defaultValue={assignment.availableFrom}
                    min="2018-01-01"
                    max="2040-12-31"
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
                    defaultValue={assignment.availableUntil}
                    min="2018-01-01"
                    max="2040-12-31"
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
          <Row className="mt-2">
            <Col md={4}></Col>
            <Col md={1}>
              <Button variant="secondary">Cancel</Button>
            </Col>
            <Col md={1}>
              <Button variant="danger">Save</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
