"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import * as client from "../../../Account/client";
import PeopleTable from "./Table";

export default function PeoplePage() {
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
