import NoteCodeBlock from "../../components/NoteCodeBlock";
import Paragraph from "../../components/common/Paragraph";
import TopicHeader from "../../components/common/TopicHeader";
import { useEffect, useRef, useState } from "react";


const UseRefTopic = () => {
    const inputElement1 = useRef<HTMLInputElement>(null);

    const [inputVal, setInputVal] = useState("");

    const focusInput = () => {
        if (inputElement1.current) {
            inputElement1.current.focus();
        }
    };

    const prevValue = useRef("");

    useEffect(() => {
        prevValue.current = inputVal
    }, [inputVal])


    return (
        <div className="flex flex-auto flex-col gap-2">
            <TopicHeader title="useRef" />
            <Paragraph>useRef is a hook that allows us to create a mutable reference to a value.</Paragraph>

            <Paragraph>Here we have a button that will focus on the input field when clicked.</Paragraph>
            <div className="px-2">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" ref={inputElement1} />
            </div>
            <div className="px-2">
                <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={focusInput}>Focus Input</button>
            </div>
            <br />
            <Paragraph>useRef is commonly used to access DOM nodes or to persist values between renders.</Paragraph>
            <div className="px-2">
                <input value={inputVal} onChange={e => setInputVal(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
            </div>
            <div className="px-2"> My previous value was: {prevValue.current}</div>
            <br />
            <div className="font-bold">When to use useRef over useState?</div>
            <ul className="list-disc list-inside px-2">
                <li>When you need to store a value that does not trigger a re-render when it is updated.</li>
                <li>When you need to store a value that is not used in the render method.</li>
                <li>When you need to store a value that persists for the lifetime of the component.</li>
            </ul>
        </div>
    );
};


export default UseRefTopic;