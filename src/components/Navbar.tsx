import ThemeController from "./ThemeController.tsx";

function Navbar() {
    return (
        <div className={`navbar bg-yellow-500 text-primary-content`}>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Mon CV</a>
            </div>
            {/*
            <div className="flex-5">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                </ul>
            </div>
            */}
            <div className="flex-none gap-2 pr-4">
                {/* <a className="btn btn-primary btn-sm" href="#contact">Contact</a> */ }
                <ThemeController />
            </div>
        </div>
    );
}

export default Navbar;