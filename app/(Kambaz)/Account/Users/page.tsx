"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import People from "../../Courses/[cid]/People/Table";
import * as client from "../client";
export default function Users() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const [name, setName] = useState("");
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const { uid } = useParams();
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);
  return (
    <div>
      <h3>Users</h3>
      {currentUser && currentUser.role === "ADMIN" && (
        <button
          onClick={createUser}
          className="float-end btn btn-danger wd-add-people"
        >
          <FaPlus className="me-2" />
          Users
        </button>
      )}
      <FormControl
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="float-start w-25 me-2 wd-filter-by-name"
      />

      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>{" "}
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>{" "}
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>

      <People users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
