import { NavLink } from "react-router-dom";
import AppBarLinkModel from "../model/components/AppBarLinkModel.type";
import AppBarLink from "./AppBarLink";
import SideBarLinksProp from "../model/components/SideBarLinkProps.type";



const SideBar = (props: SideBarLinksProp) => {
    return (
        <aside id="default-sidebar" className="flex justify-start items-stretch w-1/6 bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
            <div className="px-3 py-4 flex w-full">
                <ul className="font-medium">
                    {props.topics.map((ref) =>
                        <SideBarLink key={ref.link} {...ref} />
                    )}
                </ul>
            </div>
        </aside>
    );
}

const SideBarLink = (props: AppBarLinkModel) => {
    return (
        <li>
            <NavLink className="flex items-center py-2 px-4 self-stretch text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" to={props.link}>
                {props.title}
            </NavLink>
        </li>
    )
}

export default SideBar