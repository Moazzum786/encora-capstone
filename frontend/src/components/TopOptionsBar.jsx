import { Link } from "react-router";
import { useUser } from "../provider/userProvider";

export default function TopOptionsBar() {
    const { user } = useUser();

    return (
        <div className="w-full bg-base-300 text-base-content/80 text-sm py-2 px-6 flex justify-end gap-6">
            
            {/* Currency Selector */}
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer">
                    USD
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box w-32 p-2 shadow">
                    <li><a>USD</a></li>
                    <li><a>EUR</a></li>
                    <li><a>INR</a></li>
                </ul>
            </div>

            {/* Language Selector */}
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer">
                    English
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box w-32 p-2 shadow">
                    <li><a>English</a></li>
                    <li><a>Hindi</a></li>
                    <li><a>Spanish</a></li>
                </ul>
            </div>

            {/* Account or Login */}
            {user ? (
                <Link to="/profile" className="hover:underline">
                    My Account
                </Link>
            ) : (
                <Link to="/auth/login" className="hover:underline">
                    Login
                </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative hover:underline">
                Cart
                <span className="badge badge-primary ml-1">2</span>
            </Link>
        </div>
    );
}
