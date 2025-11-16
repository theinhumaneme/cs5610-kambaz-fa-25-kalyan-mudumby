"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../Courses/client";
import { setEnrollments } from "../Courses/enrollmentReducer";
import {
  addNewCourse,
  deleteCourse,
  setCourses,
  updateCourse,
} from "../Courses/reducer";
import { Course } from "../types/course";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      console.log(courses);
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEnrollments = async () => {
    try {
      const enrollments = await client.fetchAllEnrollments();
      console.log(courses);
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(addNewCourse(newCourse));
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(updateCourse(course));
  };
  const onEnroll = async (courseId: string) => {
    const enrollments = await client.enrollToCourse(courseId);
    dispatch(setEnrollments(enrollments));
  };
  const onUnEnroll = async (courseId: string) => {
    const enrollments = await client.unenrollFromCourse(courseId);
    dispatch(setEnrollments(enrollments));
  };

  const enrolledCourses = courses.filter((course: Course) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === course._id,
    ),
  );

  const coursesToDisplay = toggle ? courses : enrolledCourses;

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: 1,
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    credits: 4,
    department: "Khoury",
    courseImage: "/images/reactjs.webp",
    description: "New Description",
  });

  return (
    <div id="wd-dashboard">
      <button
        className="btn btn-primary float-end me-2 p-2 m-2"
        onClick={() => setToggle(!toggle)}
        id="wd-toggle-enrollments"
      >
        {toggle ? "Show Enrolled Only" : "Show All Courses"}
      </button>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <Container>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end p-2 m-2"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2 p-2 m-2"
              onClick={onUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </Container>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesToDisplay.map((course: Course) => {
            const isEnrolled = enrolledCourses.some(
              (c: Course) => c._id === course._id,
            );

            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      src={course.courseImage}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>
                      <Button variant="primary">Go</Button>

                      {isEnrolled ? (
                        <Button
                          variant="danger"
                          onClick={(event) => {
                            event.preventDefault();
                            onUnEnroll(course._id);
                          }}
                          className="float-end m-1 p-1"
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={(event) => {
                            event.preventDefault();
                            console.log(course._id);
                            onEnroll(course._id);
                          }}
                          className="float-end m-1 p-1"
                        >
                          Enroll
                        </Button>
                      )}

                      {currentUser.role === "FACULTY" && (
                        <>
                          <Button
                            variant="danger"
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(course._id);
                            }}
                            className="float-end m-1 p-1"
                          >
                            Delete
                          </Button>
                          <Button
                            variant="warning"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="float-end m-1 p-1"
                          >
                            Edit
                          </Button>
                        </>
                      )}
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
