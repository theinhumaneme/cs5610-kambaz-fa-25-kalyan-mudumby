import { useState } from "react";
import { Button } from "react-bootstrap";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <Button
        variant="success"
        className="p-2 m-2"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
        id="wd-counter-up-click"
      >
        Up
      </Button>
      <Button
        variant="danger"
        className="p-2 m-2"
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
        id="wd-counter-down-click"
      >
        Down
      </Button>
      <hr />
    </div>
  );
}
