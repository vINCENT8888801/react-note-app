import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import AppBarLinkModel from "../model/components/AppBarLinkModel.type";

const reactPage: AppBarLinkModel[] = [{
    title: "React Hooks",
    link: "hook"
}, {
    title: "useState",
    link: "useState"
}, 
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