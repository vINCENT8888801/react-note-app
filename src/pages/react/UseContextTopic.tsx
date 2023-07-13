import { useHeaderSizeUpdate } from "../../hooks/HeaderSizeContext";
import TopicHeader from "../../components/common/TopicHeader";
import NoteCodeBlock from "../../components/NoteCodeBlock";

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
            <p className="px-2">useContext is a hook that allow us to pass data through the component tree without having to pass props down manually at every level.</p>
            <p className="px-2">In this example, we will use useContext to toggle the header size.</p>
            <p className="px-2">Here we have a button that controls the header size of the App. If you move between component, you'll see the size of the header remains</p>
            <div>
                <button className="rounded-full px-3 bg-blue-950 text-blue-50" onClick={toggleTheme}>Toggle header</button>
            </div>
            <br />
            <p className="px-2">First, we create a context with createContext</p>
            <p className="px-2">Then, we create a provider to wrap the component that we want to use the context</p>
            <p className="px-2">Then we want to wrap our App with HeaderSizeProvider</p>
            <p className="px-2">Then, we export the whole thing as a custom hook to get the context value</p>
            <NoteCodeBlock code={useContextCode} />
        </div>

    )
}


export default useContextTopic;