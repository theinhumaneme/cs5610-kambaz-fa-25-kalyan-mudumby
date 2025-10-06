import Link from "next/link";
import { Col, FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <Col xs={4}>
      <div id="wd-signup-screen">
        <h1>Sign Up</h1>
        <FormControl
          id="wd-username"
          className="mb-2"
          defaultValue="kalyanmudumby"
          placeholder="username"
        />
        <br />
        <FormControl
          placeholder="password"
          type="password"
          className="wd-password"
          defaultValue="CS5610"
        />
        <br />
        <FormControl
          placeholder="verify password"
          type="password"
          className="wd-password"
          defaultValue="CS5610"
        />
        <Link
          id="wd-signup-btn"
          href="Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Sign Up{" "}
        </Link>
        <br />
        <Link id="wd-sigin-link" href="Signin">
          Sign in
        </Link>
      </div>
    </Col>
  );
}
