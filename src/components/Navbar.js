
import React from "react";

const Navbar = () => {
  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <nav className="bg-blue-800 px-6 py-3">
  <div className="container mx-auto">
    <div className="flex items-center justify-between">
      <div>
        <a
          href="/"
          className="text-white text-3xl font-bold font-serif"
          onClick={handleHomeClick}
        >
          Product
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="/"
          className="text-white text-base font-medium hover:text-gray-200"
        >
          Home
        </a>
        <span className="text-white text-base">|</span>
        <a
          href="/about"
          className="text-white text-base font-medium hover:text-gray-200"
        >
          About
        </a>
        <span className="text-white text-base">|</span>
        <a
          href="/contact"
          className="text-white text-base font-medium hover:text-gray-200"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
