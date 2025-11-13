"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <Col xs={4}>
      <div id="wd-signin-screen">
        <h1>Sign in</h1>
        <FormControl
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          className="mb-2"
          placeholder="username"
          id="wd-username"
        />
        <FormControl
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          className="mb-2"
          placeholder="password"
          type="password"
          id="wd-password"
        />
        <Button onClick={signin} id="wd-signin-btn" className="w-100">
          {" "}
          Sign in{" "}
        </Button>
        <Link id="wd-signup-link" href="/Kambaz/Account/Signup">
          {" "}
          Sign up{" "}
        </Link>
      </div>
    </Col>
  );
}
