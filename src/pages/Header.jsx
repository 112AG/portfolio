import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/artistrebelogo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="w-20 sm:w-26 md:w-32 lg:w-[111px] font-extrabold tracking-wide"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-full w-full object-cover object-center"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-[#EE3C4B] text-white font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 text-lg font-semibold">
          <NavLink
            to="/work"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block hover:text-yellow-400 transition"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
