import Link from "next/link";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <Form>
        <Container>
          <h3>Profile</h3>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-username">Username</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                id="wd-username"
                className="wd-username"
                type="text"
                defaultValue="kalyanmudumby"
                placeholder="username"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-password">Password</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                id="wd-password"
                className="wd-password"
                type="password"
                defaultValue="CS5610"
                placeholder="password"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-firstname">First Name</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                id="wd-firstname"
                type="text"
                defaultValue="Kalyan"
                placeholder="First Name"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-lastname">Last Name</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                id="wd-lastname"
                type="text"
                defaultValue="Mudumby"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-dob">Date of Birth</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl id="wd-dob" type="date" defaultValue="2002-02-23" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-email">Email</FormLabel>
            </Col>
            <Col md={4}>
              <FormControl
                id="wd-email"
                type="email"
                defaultValue="mudumby.k@northeastern.edu"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={2}>
              <FormLabel htmlFor="wd-role">Role</FormLabel>
            </Col>
            <Col md={4}>
              <FormSelect id="wd-role" defaultValue="STUDENT">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </FormSelect>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={2}></Col>
            <Col md={4}>
              <Link href="Signin" className="text-decoration-none">
                <Button variant="danger">Sign out</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
