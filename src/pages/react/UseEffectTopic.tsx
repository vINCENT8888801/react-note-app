import TopicHeader from "../../components/common/TopicHeader";
import { useEffect, useState } from "react";


const UseEffectTopic = () => {

    const getVal = () => {
        console.log("value intiialization called");
        return 1;
    }

    const [count, setCount] = useState(0);
    const [countValue, setCountValue] = useState(getVal());


    const incrementValue = () => {
        setCountValue((prevValue) => prevValue + 1);
    }


    useEffect(() => {
        var timer = setTimeout(() => {
            setCount((count) => count + 1);
            console.log("timeout called");
        }, 1000);

        return () => clearTimeout(timer)
    }, [count]);

    return (
        <div>
            <TopicHeader title={"useEffect"} ></TopicHeader>
            <p className="px-2">The useEffect Hook allows you to peform side effects in function components.</p>
            <p className="px-2">Side effects are anything that affects something outside of the scope of the function being executed, such as:</p>
            <ul className="list-disc list-inside px-2">
                <li>Changing the DOM</li>
                <li>fetching data</li>
                <li>timers</li>
            </ul>
            <p className="px-2">useEffect is called after every render of the component. If you want to run useEffect only once, you can pass an empty array as the second argument.</p>
            <p className="px-2">useEffect will run after every render, unless you pass an empty array as the second argument.</p>
            <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={() => incrementValue()}>Increment: {countValue}</button>
            <div className="px-2"> {count} </div>
        </div>
    );

}


export default UseEffectTopic;