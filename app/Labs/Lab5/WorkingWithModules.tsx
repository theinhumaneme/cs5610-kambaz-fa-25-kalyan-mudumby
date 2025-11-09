import { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithModules() {
  const [module, setAssignment] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS",
    course: "Next.Js",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Modules</h3>
      <h4>Retrieving Modules</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-module-title"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-module-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/name/${module.name}`}
      >
        Update Title{" "}
      </a>
      <FormControl
        className="w-50"
        id="wd-module-title"
        defaultValue={module.name}
        onChange={(e) => setAssignment({ ...module, name: e.target.value })}
      />
      <hr />
    </div>
  );
}
