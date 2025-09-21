import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        defaultValue="kalyanmudumby"
        placeholder="username"
        className="wd-username"
      />
      <br />
      <input
        defaultValue="CS5610"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      <br />
      <input defaultValue="Kalyan" placeholder="First Name" id="wd-firstname" />
      <br />
      <input
        defaultValue="Mudumby"
        placeholder="Last Name"
        id="wd-lastname"
      />
      <br />
      <input defaultValue="2002-02-23" type="date" id="wd-dob" />
      <br />
      <input defaultValue="mudumby.k@northeastern.edu" type="email" id="wd-email" />
      <br />
      <select defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option> <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>{" "}
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="Signin"> Sign out </Link>
    </div>
  );
}
