import NoteCodeBlock from "../../components/NoteCodeBlock";
import Paragraph from "../../components/common/Paragraph";
import TopicHeader from "../../components/common/TopicHeader";

const HooksInfo = () => {
    return (
        <div className="flex flex-auto flex-col">
            <TopicHeader title={"React Hooks"} />
            <Paragraph>What are React Hooks?</Paragraph>
            <Paragraph>React Hooks are functions that let us hook into the React state and lifecycle features from function components. React Hooks don't work inside classes.  </Paragraph>
            <NoteCodeBlock code={hookDontWorkOnClassComponentCode} />
            <Paragraph>Hooks also must be run on same order every time it render, so cannot be inside a conditional statement</Paragraph>
            <NoteCodeBlock code={conditionalHooksNotAllowedCode} />
        </div>
    );
}


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



export default HooksInfo;