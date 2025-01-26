"use client";

import Link from "next/link";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold text-gray-800">Ecommerce Web</h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">
          <Link href="/pages/home">Home</Link>
          <Link href="/pages/shop">Shop</Link>
          <Link href="/pages/about">About</Link>
          <Link href="/pages/contact">Contact</Link>
        </nav>

        {/* Icons Section */}
        <div className="hidden lg:flex gap-4 text-gray-700">
          <Link href="/pages/accounts">
            {" "}
            <PersonIcon />
          </Link>
          <SearchIcon />
          <FavoriteIcon />

          <Link href="/pages/cart">
            <ShoppingCartIcon />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-50 shadow-md p-4">
          <ul className="flex flex-col gap-4">
            <Link href="/pages/home">Home</Link>
            <Link href="/pages/shop">Shop</Link>
            <Link href="/pages/about">About</Link>
            <Link href="/pages/contact">Contact</Link>
          </ul>

          <div className="flex justify-center gap-4 mt-4 text-gray-700">
            <Link href="/pages/accounts">
              {" "}
              <PersonIcon />
            </Link>
            <SearchIcon />
            <FavoriteIcon />

            <Link href="/pages/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
