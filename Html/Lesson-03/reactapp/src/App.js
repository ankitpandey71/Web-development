import React from "react";
import Hooks from "./Components/Hooks";

const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-slate-800 text-yellow-500">
      <Person name={"John"} lastName={"Doe"} age={27} />
      <Person name={"Don"} lastName={"noe"} age={25} />
      <Person name={"Kon"} lastName={"joe"} age={28} />
      <Person name={"JAshhji"} lastName={"moe"} age={21} />
      <Hooks />
    </div>
  );
};

export default App;
