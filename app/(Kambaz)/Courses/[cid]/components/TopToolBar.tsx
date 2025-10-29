"use client";
import { redirect, useParams } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

export default function TopToolBar() {
  const { cid, aid } = useParams();
  return (
    <Form className="d-flex justify-content-between align-items-center">
      <div>
        <Form.Control
          type="text"
          placeholder="🔍 Search for Assignments"
          style={{ width: "250px" }}
        />
      </div>
      <div>
        <Button variant="secondary" className="p-1 m-1">
          <BsPlus /> Group
        </Button>
        <Button
          onClick={() => redirect(`/Courses/${cid}/Assignments/new`)}
          variant="danger"
          className="p-1 m-1"
        >
          <BsPlus /> Assignment
        </Button>
      </div>
    </Form>
  );
}
