import { Link } from "react-router";

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to={"/"}>
                        Capstone
                    </Link>
                </div>
                <div className="flex-none">
                    <Link to={"/auth/login"}>
                        <button className="btn btn-primary">Login</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
