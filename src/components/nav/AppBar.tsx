import { NavLink } from "react-router-dom";
import AppBarLinkModel from "../../model/components/AppBarLinkModel.type";
import AppBarLink from "./AppBarLink";


const links: AppBarLinkModel[] = [{
    title: "Home",
    link: "/"
}, {
    title: "JavaScript",
    link: "javascript"
}, {
    title: "React",
    link: "react"
}];


const MyAppBar = () => {
    return (
        <>
            <div className="bg-white border-gray-200 dark:bg-gray-900 p-2">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink className="flex items-center" to="/">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React App Note</span>
                    </NavLink>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {links.map(ref => {
                                return (
                                    <AppBarLink key={ref.link} {...ref} />)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAppBar;
