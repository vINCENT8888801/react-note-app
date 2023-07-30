import NoteCodeBlock from "../../components/NoteCodeBlock";
import Paragraph from "../../components/common/Paragraph";
import TopicHeader from "../../components/common/TopicHeader";
import { useState } from "react";

const UseStateTopic = () => {

  const getVal = () => {
    console.log("value intiialization called");
    return 1;
  }

  const getVal2 = () => {
    console.log("functional intiialization called");
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
      <Paragraph>React useState Hook allows us to track state in a function component.</Paragraph>
      <Paragraph>State generally refers to data or properties that need to be tracking in an application.</Paragraph>
      <Paragraph>useState Hook returns a pair of values: the current state and a function that updates it.</Paragraph>
      <Paragraph>useState Hook can either receive a value or a function.</Paragraph>
      <Paragraph>Note that useState is called everytime the component render if using the value parameter.</Paragraph>
      <br></br>
      <Paragraph>Here we have a button that uses value as parameter for useState.</Paragraph>
      <Paragraph>If you open up console, you will see getVal() is called everytime the component render.</Paragraph>
      <div className="px-4">
        <div>
          I am a value state that uses value passing as parameter: {countValue}
        </div>
        <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={() => incrementValue()}>Increment</button>
      </div>
      <div className="px-4" >Code: </div>
      <NoteCodeBlock code={incrementValueButtonCode} />

      <br></br>

      <Paragraph>For comparison, here we have a button that uses function as parameter for useState. Now if you check the console, you will notice getVal2() only called once durring the first render of the component but getVal() is called despite not being updated.</Paragraph>
      <div className="px-4">
        <div>
          I am a value state that uses function passing as parameter: {countFunc}
        </div>
        <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={() => incrementFunc()}>Increment</button>
      </div>
      <div className="px-4" >Code: </div>
      <NoteCodeBlock code={incrementFuncButtonCode} />

      <br></br>

      <Paragraph>Try to break down object to individual value as possible when using useState.Especially for large object.This is due to when updating useState. you will need to create a new object to replace existing object,causing unnecessary value creation</Paragraph>
      <NoteCodeBlock code={changeCarCode} />

    </div>
  );
}


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


export default UseStateTopic;