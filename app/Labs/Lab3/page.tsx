import { Container } from "react-bootstrap";
import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLenghths";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditonalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructuringImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FIndFunctions";
import FindIndexFunction from "./FindIndexFunction";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import Highlight from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreader";
import Square from "./Square";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";

export default function Lab3() {
  const square_value: number = 5;
  console.log("Hello World!, Greetings From Kalyan Mudumby!!!");
  return (
    <div>
      <h2>Lab 3</h2>
      <Container>
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator />
        <ConditionalOutputIfElse />
        <ConditionalOutputInline />
        <LegacyFunctions />
        <ArrowFunctions />
        <ImpliedReturn />
        <TemplateLiterals />
        <SimpleArrays />
        <ArrayIndexAndLength />
        <AddingAndRemovingToFromArrays />
        <ForLoops />
        <MapFunction />
        <FindFunction />
        <FindIndexFunction />
        <FilterFunction />
        <JsonStringify />
        <House />
        <Spreading />
        <Destructing />
        <FunctionDestructing />
        <DestructingImports />
        <Classes />
        <Add a={3} b={5} />
        <h4> Square of {square_value}</h4>
        <Square>{square_value}</Square>
        <hr />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipitratione eaque illo minus cum, saepe totam vel nihil repellat
          nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores,
          provident voluptates.
        </Highlight>
        <PathParameters />
        <TodoItem />
        <TodoList />
      </Container>
    </div>
  );
}
