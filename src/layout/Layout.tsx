import MyAppBar from "../components/nav/AppBar";
import { Outlet, ScrollRestoration } from "react-router-dom";


const Layout = () => {

    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            <div className="flex flex-col min-h-screen">
                <MyAppBar />
                <main className="flex flex-grow h-full w-full">
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;