
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-sky-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🌤️ WeatherApp
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-sky-200 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-sky-200 transition duration-200"
          >
            About
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
