import { Link } from "react-router-dom";

const Navbar = () => {
    const links = (
        <div className="flex flex-col gap-4 items-center md:flex-row">
            <Link to="/" className="hover:underline text-base">
                Home
            </Link>
            <Link to="/addCoffee" className="hover:underline text-base">
                Add Coffee
            </Link>
            <Link to="/updateCoffee" className="hover:underline text-base">
                Update Coffee
            </Link>
        </div>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
                <div className="hidden md:block">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
