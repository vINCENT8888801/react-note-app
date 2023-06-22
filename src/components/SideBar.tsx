import { NavLink } from "react-router-dom";
import AppBarLinkModel from "../model/components/AppBarLinkModel.type";
import AppBarLink from "./AppBarLink";
import SideBarLinksProp from "../model/components/SideBarLinkProps.type";



const SideBar = (props : SideBarLinksProp) => {
    return (
        <>
            <aside id="default-sidebar" className="fixed bottom-90 w-64 h-screen" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {props.topics.map((ref) =>
                            <AppBarLink key={ref.link} {...ref} />
                        )}
                    </ul>
                </div>
            </aside>
        </>
    );
}

const SideBarLink = (props: AppBarLinkModel) => {
    <li>
        <NavLink className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" to={props.link}>
            {props.title}
        </NavLink>
    </li>
}

export default SideBar