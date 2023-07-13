import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import AppBarLinkModel from "../model/components/AppBarLinkModel.type";

const reactPage: AppBarLinkModel[] = [{
    title: "React Hooks",
    link: "hook"
}, {
    title: "useState",
    link: "useState"
}, {
    title: "useEffect",
    link: "useEffect"
}, {
    title: "useRef",
    link: "useRef"
}, {
    title: "useContext",
    link: "useContext"
}, {
    title: "useReducer",
    link: "useReducer"
}, {
    title: "useCallback",
    link: "useCallback"
}, {
    title: "useMemo",
    link: "useMemo"
}
];

const ReactLayout = () => {
    return (
        <>
            <SideBar topics={reactPage} />
            <div className="flex-auto">
                <Outlet />
            </div>
        </>
    )
}

export default ReactLayout;