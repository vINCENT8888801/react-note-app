import NoteCodeBlock from "../../components/CodeBlock";
import TopicHeader from "../../components/Header";
import { useState } from "react";


const incrementValueButtonCode: string =
  `const getVal = () => {
  console.log("value intiialization called");
  return 1;
}

const [countValue, setCountValue] = useState(getVal());

const incrementValue = () => {
  setCountValue((prevValue) => prevValue + 1);
}
`;

const incrementFuncButtonCode: string =
  `const getVal2 = () => {
  console.log("funcational intiialization called");
  return 1;
}
  
const [countFunc, setCountFunc] = useState(() =>{ return getVal2()});

const incrementFunc = () => {
  
  setCountFunc((prevValue) => prevValue + 1);
}`;

const changeCarCode: string =
`const [car, setCar] = useState(() => { return { make: "Toyota", model: "Camry" }; });

const changeCar = () => { setCar((prevCar) => { return { ...prevCar, model: "Accord" } }); }`

const UseStateTopic = () => {

  const getVal = () => {
    console.log("value intiialization called");
    return 1;
  }

  const getVal2 = () => {
    console.log("funcational intiialization called");
    return 1;
  }

  const [countValue, setCountValue] = useState(getVal());

  const [countFunc, setCountFunc] = useState(() => { return getVal2() });

  const incrementValue = () => {
    setCountValue((prevValue) => prevValue + 1);
  }

  const incrementFunc = () => {
    setCountFunc((prevValue) => prevValue + 1);
  }

  return (
    <div className="flex flex-col flex-auto">
      <TopicHeader title={"UseState"} />
      <p className="px-4">React useState Hook allows us to track state in a function component.</p>
      <p className="px-4">State generally refers to data or properties that need to be tracking in an application.</p>
      <p className="px-4">useState Hook returns a pair of values: the current state and a function that updates it.</p>
      <p className="px-4">useState Hook can either receive a value or a function.</p>
      <p className="px-4">Note that useState is called everytime the component render if using the value parameter.</p>
      <br></br>
      <p className="px-4">Here we have a button that uses value as parameter for useState.</p>
      <p className="px-4">If you open up console, you will see getVal() is called everytime the component render.</p>
      <div className="px-4">
        <div>
          I am a value state that uses value passing as parameter: {countValue}
        </div>
        <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={() => incrementValue()}>Increment</button>
      </div>
      <div className="px-4" >Code: </div>
      <NoteCodeBlock code={incrementValueButtonCode} />

      <br></br>

      <p className="px-4">For comparison, here we have a button that uses function as parameter for useState. Now if you check the console, you will notice getVal2() only called once durring the first render of the component but getVal() is called despite not being updated.</p>
      <div className="px-4">
        <div>
          I am a value state that uses function passing as parameter: {countFunc}
        </div>
        <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={() => incrementFunc()}>Increment</button>
      </div>
      <div className="px-4" >Code: </div>
      <NoteCodeBlock code={incrementFuncButtonCode} />

      <br></br>

      <p className="px-4">Try to break down object to individual value as possible when using useState.Especially for large object.This is due to when updating useState. you will need to create a new object to replace existing object,causing unnecessary value creation</p>
      <NoteCodeBlock code={changeCarCode} />

    </div>
  );
}

export default UseStateTopic;