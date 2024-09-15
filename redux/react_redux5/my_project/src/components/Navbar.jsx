import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, ShoppingCart, Heart, User, ChevronDown } from "lucide-react"; // Added ChevronDown for dropdown icon

const menuItems = [
  { name: "Home", to: "/" },
  { name: "AboutUS", to: "/aboutus" },
  { name: "Contact", to: "/Contact" },
  { name: "Product", to: "/product" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // New state for profile dropdown
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle profile dropdown
  };

  // Retrieve cart and wishlist counts from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <div className="relative w-full bg-gradient-to-r from-orange-500 via-white to-green-600">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <NavLink to="/" className="font-bold text-xl">
            DevUI
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm font-semibold text-[#0068C8] underline"
                      : "text-sm font-semibold text-gray-800 hover:text-[#0068C8]"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 items-center">
          <NavLink to="/whishlist" className="relative">
            <Heart className="w-6 h-6" />
            {wishlistItems.length > 0 && (
              <span className="absolute top-0 right-0 text-xs bg-black text-white rounded-full px-1">
                {wishlistItems.length}
              </span>
            )}
          </NavLink>

          <NavLink to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 text-xs bg-black text-white rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </NavLink>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center space-x-2 focus:outline-none"
            >
              {/* <User className="w-4 h-4" /> */}
              <ChevronDown className="w-6 h-6" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)} // Close dropdown on click
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)} // Close dropdown on click
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <NavLink to="/" className="font-bold">
                      DevUI
                    </NavLink>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive
                            ? "-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-white"
                            : "-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-[#0068C8] hover:bg-gray-50"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>

                <div className="flex mt-6 space-x-4">
                  <NavLink to="/whishlist" className="relative">
                    <Heart className="w-6 h-6" />
                    {wishlistItems.length > 0 && (
                      <span className="absolute top-0 right-0 text-xs bg-black text-white rounded-full px-1">
                        {wishlistItems.length}
                      </span>
                    )}
                  </NavLink>

                  <NavLink to="/cart" className="relative">
                    <ShoppingCart className="w-6 h-6" />
                    {cartItems.length > 0 && (
                      <span className="absolute top-0 right-0 text-xs bg-black text-white rounded-full px-1">
                        {cartItems.length}
                      </span>
                    )}
                  </NavLink>

                  <NavLink to="/login">
                    <User className="w-6 h-6" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}
