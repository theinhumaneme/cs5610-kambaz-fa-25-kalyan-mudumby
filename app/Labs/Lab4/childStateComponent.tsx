import { Button } from "react-bootstrap";

export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Counter {counter}</h3>
      <Button
        className="p-2 m-2"
        variant="success"
        onClick={() => setCounter(counter + 1)}
        id="wd-increment-child-state-click"
      >
        Increment
      </Button>
      <Button
        className="p-2 m-2"
        variant="danger"
        onClick={() => setCounter(counter - 1)}
        id="wd-decrement-child-state-click"
      >
        Decrement
      </Button>
    </div>
  );
}
