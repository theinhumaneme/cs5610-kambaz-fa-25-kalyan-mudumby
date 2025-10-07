import { FaCircle } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
export default function DeleteIcon() {
  return (
    <span className="me-1 position-relative">
      <MdBlock
        style={{ top: "2px" }}
        className="text-secdondary me-1 position-absolute fs-5"
      />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
