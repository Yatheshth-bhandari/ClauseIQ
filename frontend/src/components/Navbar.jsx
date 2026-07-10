import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

    const location = useLocation();

    return (

        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">

            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

                {/* Logo */}

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">

                        ⚖️

                    </div>

                    <div>

                        <h1 className="text-lg font-bold text-gray-900">
                            ClauseIQ
                        </h1>

                        <p className="text-xs text-gray-500">
                            AI Contract Intelligence
                        </p>

                    </div>

                </div>

                {/* Navigation */}

                <div className="flex items-center gap-2">

                    <Link
                        to="/"
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                            location.pathname === "/"
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/compare"
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                            location.pathname === "/compare"
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        Compare
                    </Link>

                </div>

            </div>

        </nav>

    );
}