import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (6)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/vuejs.png"
              width={200}
              height={150}
              alt="vuejs"
            />
            <div>
              <h5> CS4567 Vue JS </h5>
              <p className="wd-dashboard-course-title">Vue.Js Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/8745" className="wd-dashboard-course-link">
            <Image
              src="/images/solidjs.png"
              width={200}
              height={150}
              alt="solidjs"
            />
            <div>
              <h5> CS8745 Solid JS </h5>
              <p className="wd-dashboard-course-title">Solid.Js Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/9874" className="wd-dashboard-course-link">
            <Image
              src="/images/solidjs.png"
              width={200}
              height={150}
              alt="solidjs"
            />
            <div>
              <h5> CS9874 Advanced Solid JS </h5>
              <p className="wd-dashboard-course-title">
                Senior Solid.Js Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/0258" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS0258 React JS </h5>
              <p className="wd-dashboard-course-title">
                Senior ReactJS Developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/angular.png"
              width={200}
              height={150}
              alt="angular"
            />
            <div>
              <h5> CS3456 Angular </h5>
              <p className="wd-dashboard-course-title">Angular Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
