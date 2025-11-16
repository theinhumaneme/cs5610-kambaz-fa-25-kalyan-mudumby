"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  const signout = async () => {
    await client.signout();

    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <Form>
        <Container>
          <h3>Profile</h3>
          {profile && (
            <div>
              <Row className="mt-2">
                <Col md={2}>
                  <FormLabel htmlFor="wd-username">Username</FormLabel>
                </Col>
                <Col md={4}>
                  <FormControl
                    id="wd-username"
                    className="wd-username"
                    type="text"
                    placeholder="username"
                    value={profile.username}
                    onChange={(e) =>
                      setProfile({ ...profile, username: e.target.value })
                    }
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
                    placeholder="password"
                    value={profile.password}
                    onChange={(e) =>
                      setProfile({ ...profile, password: e.target.value })
                    }
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
                    placeholder="First Name"
                    value={profile.firstName}
                    onChange={(e) =>
                      setProfile({ ...profile, firstName: e.target.value })
                    }
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
                    placeholder="Last Name"
                    value={profile.firstName}
                    onChange={(e) =>
                      setProfile({ ...profile, firstName: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={2}>
                  <FormLabel htmlFor="wd-dob">Date of Birth</FormLabel>
                </Col>
                <Col md={4}>
                  <FormControl
                    id="wd-dob"
                    type="date"
                    value={profile.dob}
                    onChange={(e) =>
                      setProfile({ ...profile, dob: e.target.value })
                    }
                  />
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
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={2}>
                  <FormLabel htmlFor="wd-role">Role</FormLabel>
                </Col>
                <Col md={4}>
                  <FormSelect
                    id="wd-role"
                    value="STUDENT"
                    onChange={(e) =>
                      setProfile({ ...profile, role: e.target.value })
                    }
                  >
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
                    <Button onClick={updateProfile} variant="secondary">
                      Update Profile
                    </Button>
                  </Link>
                </Col>
                <Col md={4}>
                  <Link href="Signin" className="text-decoration-none">
                    <Button onClick={signout} variant="danger">
                      Sign out
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </Form>
    </div>
  );
}
