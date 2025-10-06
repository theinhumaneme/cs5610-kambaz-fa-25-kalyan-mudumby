import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1234"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/reactjs.webp"
                  width={200}
                  height={150}
                  alt="reactjs"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS1234 React JS </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer
                  </p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/4567"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/vuejs.png"
                  width={200}
                  height={150}
                  alt="vuejs"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS4567 Vue JS </h5>
                  <p className="wd-dashboard-course-title">Vue.Js Developer</p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/8745"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/solidjs.png"
                  width={200}
                  height={150}
                  alt="solidjs"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS8745 Solid JS </h5>
                  <p className="wd-dashboard-course-title">
                    Solid.Js Developer
                  </p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/9874"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/solidjs.png"
                  width={200}
                  height={150}
                  alt="solidjs"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS9874 Advanced Solid JS </h5>
                  <p className="wd-dashboard-course-title">
                    Senior Solid.Js Developer
                  </p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/0258"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/reactjs.webp"
                  width={200}
                  height={150}
                  alt="reactjs"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS0258 React JS </h5>
                  <p className="wd-dashboard-course-title">
                    Senior ReactJS Developer
                  </p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/3456"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/angular.png"
                  width={200}
                  height={150}
                  alt="angular"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS3456 Angular </h5>
                  <p className="wd-dashboard-course-title">Angular Developer</p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/0258"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/angular.png"
                  width={200}
                  height={150}
                  alt="angular"
                />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                </CardBody>
                <div>
                  <h5> CS3456 Senior Angular Developer </h5>
                  <p className="wd-dashboard-course-title">Angular Developer</p>
                  <Button variant="primary"> Go </Button>
                </div>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
