"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Button, Col, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const signup = async () => {
    if (user.password !== user.verifyPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      redirect("/Profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Col xs={4}>
      <div id="wd-signup-screen">
        <h1>Sign Up</h1>
        <FormControl
          id="wd-username"
          className="mb-2"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <FormControl
          placeholder="password"
          type="password"
          className="wd-password mb-2"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <FormControl
          placeholder="verify password"
          type="password"
          className="wd-password mb-2"
          onChange={(e) => setUser({ ...user, verifyPassword: e.target.value })}
        />
        <Button
          id="wd-signup-btn"
          onClick={signup}
          className="btn btn-primary w-100 mb-2"
        >
          Sign Up{" "}
        </Button>
        <br />
        <Link id="wd-sigin-link" href="Signin">
          Sign in
        </Link>
      </div>
    </Col>
  );
}
