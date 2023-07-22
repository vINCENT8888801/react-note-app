import { useHeaderSizeUpdate } from "../../hooks/HeaderSizeContext";
import TopicHeader from "../../components/common/TopicHeader";
import NoteCodeBlock from "../../components/NoteCodeBlock";
import Paragraph from "../../components/common/Paragraph";

const useContextCode: string =
    `export const HeaderSizeContext = React.createContext(false);
export const HeaderSizeUpdateContext = React.createContext(() => {});

export function useHeaderSizeUpdate() {
    return useContext(HeaderSizeUpdateContext);
}

export function useHeaderSizeContext() {
    return useContext(HeaderSizeContext);
}

export function HeaderSizeProvider({ children }: any) {

    const [bigHeader, setBigHeader] = useState(true);

    function toggleHeaderSize() {
        setBigHeader(prevBigHeader => !prevBigHeader);
    }

    return (
        <HeaderSizeContext.Provider value={bigHeader}>
            <HeaderSizeUpdateContext.Provider value={toggleHeaderSize}>
                {children}
            </HeaderSizeUpdateContext.Provider>
        </HeaderSizeContext.Provider>
    )
}`;

const useContextTopic = () => {
    const toggleTheme = useHeaderSizeUpdate();
    return (
        <div className="flex flex-auto flex-col">
            <TopicHeader title="useContext" />
            <Paragraph>useContext is a hook that allow us to pass data through the component tree without having to pass props down manually at every level.</Paragraph>
            <Paragraph>In this example, we will use useContext to toggle the header size.</Paragraph>
            <Paragraph>Here we have a button that controls the header size of the App. If you move between component, you'll see the size of the header remains</Paragraph>
            <div className="px-2">
                <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={toggleTheme}>Toggle header</button>
            </div>
            <br />
            <Paragraph>First, we create a context with createContext</Paragraph>
            <Paragraph>Then, we create a provider to wrap the component that we want to use the context</Paragraph>
            <Paragraph>Then we want to wrap our App with HeaderSizeProvider</Paragraph>
            <Paragraph>Then, we export the whole thing as a custom hook to get the context value</Paragraph>
            <NoteCodeBlock code={useContextCode} />
        </div>

    )
}


export default useContextTopic;