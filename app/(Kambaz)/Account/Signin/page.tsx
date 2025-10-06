import Link from "next/link";
import { Col, FormControl } from "react-bootstrap";
export default function Signin() {
  return (
    <Col xs={4}>
      <div id="wd-signin-screen">
        <h1>Sign in</h1>
        <FormControl
          placeholder="username"
          id="wd-username"
          className="mb-2"
          defaultValue="kalyanmudumby"
        />
        <br />
        <FormControl
          placeholder="password"
          type="password"
          className="wd-password"
          defaultValue="CS5610"
        />
        <br />
        <Link
          id="wd-signin-btn"
          href="/Dashboard"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in{" "}
        </Link>
        <br />
        <Link id="wd-signup-link" href="Signup">
          Sign up
        </Link>
      </div>
    </Col>
  );
}
