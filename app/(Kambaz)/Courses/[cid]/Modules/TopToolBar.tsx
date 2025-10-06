import { Button, Form, FormGroup, Row, Col } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

export default function TopToolBar() {
  return (
    <Form>
      <Row>
        <Col xs={8} xxl={3}>
          <Form.Control type="text" placeholder="🔍 Search for Assignments" />
        </Col>
        <Col xs={4} className="d-flex justify-content around">
          <div>
            <Button variant="secondary" className="p-1 m-1">
              <BsPlus /> Group
            </Button>
          </div>
          <div>
            <Button variant="danger" className="p-1 m-1">
              <BsPlus />
              Assignment
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}
