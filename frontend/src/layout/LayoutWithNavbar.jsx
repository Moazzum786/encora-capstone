import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import { Toaster } from "sonner";
export default function LayoutWithNavbar() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Toaster />
        </div>
    );
}
