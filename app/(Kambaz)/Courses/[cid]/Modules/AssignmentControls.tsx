import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentControls() {
  return (
    <div className="float-end d-flex align-items-center">
      <div className="border border-black rounded-5  corner-radius-25 m-1">
        <span className="p-2">40% of Total</span>
      </div>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
