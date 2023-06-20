import React from "react";
import MyAppBar from "../components/AppBar";
import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <>
            <MyAppBar/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="javascript">Javascript</NavLink>
            <NavLink to="react">React</NavLink>
            <Outlet />
        </>
    );
}

export default Layout;