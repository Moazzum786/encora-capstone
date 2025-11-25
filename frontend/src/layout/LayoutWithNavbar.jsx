import { Outlet } from "react-router";
import Navbar from "../components/navbar";

function LayoutWithNavbar() {
    return (
        <div className="layout-with-navbar min-h-screen flex flex-col">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default LayoutWithNavbar;
