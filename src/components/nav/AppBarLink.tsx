import { NavLink } from "react-router-dom";
import AppBarLinkModel from "../../model/components/AppBarLinkModel.type";



const AppBarLink = (props:AppBarLinkModel) => {
    return (
        <li>
            <NavLink to={props.link} className={({ isActive }) => isActive ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} >{props.title}</NavLink>
        </li>
    );
}

export default AppBarLink;