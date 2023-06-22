import MyAppBar from "../components/AppBar";
import { Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <>
            <MyAppBar />
            <Outlet />
        </>
    );
}

export default Layout;