"use client";
import EnvironmentVariables from "./EnvironementVariables";
import PathParameters from "./PathParameters";
import QueryParameter from "./QueryParameter";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithModules from "./WorkingWithModules";
import WorkingWithObjects from "./WorkingWithObjects";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${HTTP_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameter />
      <WorkingWithObjects />
      <WorkingWithModules />
      <WorkingWithArrays />
    </div>
  );
}
