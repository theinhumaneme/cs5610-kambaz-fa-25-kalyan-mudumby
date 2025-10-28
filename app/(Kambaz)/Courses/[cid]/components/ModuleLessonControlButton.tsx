import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../components/GreenCheckmark";
export default function ModuleLessonControlButton() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
