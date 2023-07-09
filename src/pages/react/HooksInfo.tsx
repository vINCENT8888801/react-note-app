import NoteCodeBlock from "../../components/CodeBlock";
import TopicHeader from "../../components/Header";


const hookDontWorkOnClassComponentCode: string =
    `class Car extends React.Component {

    const [car, useCar] = useState("Myvi");  // this should not work 🙅‍♂️

    render() {
      return <h2>Hi, I am a {Car}!</h2>;
    }
  }`;

const conditionalHooksNotAllowedCode: string =
  `const Paragraph = () => {
    if(true){
        const [color1, setColor1] = useState("red"); //not allowed 🙅‍♂️
    }

    return (
        <p className="px-4"></p>
    )
}`;

const HooksInfo = () => {
    return (
        <div className="flex flex-auto flex-col">
            <TopicHeader title={"React Hooks"} />
            <p className="px-2">What are React Hooks?</p>
            <p className="px-2">React Hooks are functions that let us hook into the React state and lifecycle features from function components. React Hooks don't work inside classes.  </p>
            <NoteCodeBlock code={hookDontWorkOnClassComponentCode} />
            <p className="px-2">Hooks also must be run on same order every time it render, so cannot be inside a conditional statement</p>
            <NoteCodeBlock code={conditionalHooksNotAllowedCode} />
        </div>
    );
}



export default HooksInfo;