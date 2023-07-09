import { useState, useEffect, useRef } from "react";

const VariablePage = () => {

  const getCount = () => {
    return 0;
  }

  const [count, setCount] = useState(getCount());

  const [timerCount, setTimerCount] = useState(0);
  const [prevCountValue, setPrevCountValue] = useState(0);
  const renderCount = useRef(0);


  const [car, setCar] = useState({ make: "Toyota", model: "Camry" });
  const [car2, setCar2] = useState({ make: "Toyota", model: "Camry" });

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("I am being called");
  });

  const increment = () => {
    setPrevCountValue(count);
    setCount(count + 1);

  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={() => decrement()}>
        -
      </button>
      <div>
        {count}
      </div>
      <button onClick={() => increment()}>
        +
      </button>

      <div>
        Prev Count Value: {prevCountValue}
      </div>

      <div>
        Render Count: {renderCount.current}
      </div>

      {/* <div>
      {car.make}{car.model}
    </div>
  
    <button onClick={()=> {setCar({make: "Honda", model: "Accord"})}}>change car Model</button> */}




      {/* <div className="root-layout">
        <ScrollRestoration />
            <h1>React Onboarding Note</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="javascript">Javascript</NavLink>
            <NavLink to="react">React</NavLink>
            <Outlet />
        </div> */}
    </>
  )
}

export default VariablePage;