import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <p>
            Multiple Modules | <b>Not available until</b> May 6 at 12:00 AM |{" "}
            <b>Due</b> May 13 at 11:59pm | 100pts{" "}
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - CSS + BOOTSTRAP
          </Link>
          <p>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00 AM |{" "}
            <b>Due</b> May 20 at 11:59pm | 100pts{" "}
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - JAVASCRIPT + REACT
          </Link>
          <p>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00 AM |{" "}
            <b>Due</b> May 27 at 11:59pm | 100pts{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}
