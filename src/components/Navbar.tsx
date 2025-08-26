import ThemeController from "./ThemeController.tsx";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Mon CV</a>
            </div>
            <div className="flex-none gap-2 pr-4">
                {/* <a className="btn btn-primary btn-sm" href="#contact">Contact</a> */ }
                <ThemeController />
            </div>
        </div>
    );
}

export default Navbar;