"use client";

import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import ArrayStateVariable from "./arrayStateVariable";
import BooleanStateVariables from "./booleanStateVariables";
import ClickEvent from "./clickEvent";
import Counter from "./Counter";
import DateStateVariable from "./dateStateVariable";
import EventObject from "./eventObject";
import ObjectStateVariable from "./objectStateVariable";
import ParentStateComponent from "./parentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./passsingFunctions";
import ReduxExamples from "./ReduxExamples/page";
import store from "./store";
import StringStateVariables from "./stringStateVariables";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <Container>
      <Provider store={store}>
        <h1>Lab 4</h1>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ReduxExamples />
      </Provider>
    </Container>
  );
}
