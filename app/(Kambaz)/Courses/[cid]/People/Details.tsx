/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { FaCheck, FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import * as client from "../../../Account/client";

export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [user, setUser] = useState<any>({});
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={onClose}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />{" "}
      </button>
      <div className="text-center mt-2">
        {" "}
        <FaUserCircle className="text-secondary me-2 fs-1" />{" "}
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">
        {!editing && currentUser.role === "ADMIN" && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && (
          <div
            className="wd-name"
            onClick={() => currentUser.role === "ADMIN" && setEditing(true)}
          >
            {user.firstName} {user.lastName}
          </div>
        )}
        {user && editing && (
          <FormControl
            className="w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      <b>Roles:</b> <span className="wd-roles"> {user.role} </span> <br />
      <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span>{" "}
      <br />
      <b>Section:</b> <span className="wd-section"> {user.section} </span>{" "}
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      {currentUser.role === "ADMIN" && (
        <button
          onClick={() => deleteUser(uid)}
          className="btn btn-danger float-end wd-delete"
        >
          {" "}
          Delete{" "}
        </button>
      )}
      <button
        onClick={onClose}
        className="btn btn-secondary float-end me-2 wd-cancel"
      >
        {" "}
        Cancel{" "}
      </button>
    </div>
  );
}
