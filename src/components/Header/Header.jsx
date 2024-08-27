import React from "react";
import { useStateValue } from "@/context";
import { FaShoppingCart, FaHeart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [{ cart, wishlist }, dispatch] = useStateValue();

  return (
    <header className="bg-white shadow-md my-4">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <div className="text-3xl font-bold text-indigo-600">BrandLogo</div>
        </Link>

        <div className="hidden md:flex space-x-4 items-center justify-center">
          <button className="relative text-gray-700 hover:text-indigo-600 transition">
            <FaShoppingCart className="w-6 h-6" />
            {cart?.length > 0 && (
              <span className="absolute top-0 right-0  h-5 w-5 text-xs font-bold text-white bg-red-600 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          <NavLink to={"/wishlist"}>
            <button className="relative text-gray-700 hover:text-indigo-600 transition">
              <FaHeart className="w-6 h-6" />
              {wishlist?.length > 0 && (
                <span className="absolute top-0 right-0  h-5 w-5 text-xs font-bold text-white bg-red-600 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
          </NavLink>

          <button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition">
            <FaUser className="w-6 h-6" />
            <span>Account</span>
          </button>

          <button
            onClick={() => dispatch({ type: "LOGOUT", payload: null })}
            className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition"
          >
            <FaSignOutAlt className="w-6 h-6" />
            <span>Logout</span>
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-indigo-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
