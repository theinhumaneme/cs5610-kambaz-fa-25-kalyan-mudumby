import Link from "next/link";
import { Col, FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    <Col xs={4}>
      <div id="wd-signin-screen">
        <h1>Sign in</h1>
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
          id="wd-signin-btn"
          href="/Signin"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in{" "}
        </Link>
        <br />
        <Link id="wd-signup-link" href="Profile">
          Sign up
        </Link>
      </div>
    </Col>
  );
}
