import { Container } from "react-bootstrap";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditonalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLenghths";
import AddingAndRemovingToFromArrays from "./AddingRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FIndFunctions";
import FindIndexFunction from "./FindIndexFunction";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreading from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import Math from "./Math";
import DestructingImports from "./DestructuringImports";
import Classes from "./Classes";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

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
