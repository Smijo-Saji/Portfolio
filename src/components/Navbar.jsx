import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);

    if (mobileDrawerOpen) {
      setMobileDrawerOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg lg:mx-4">
      <div className="container px-4 mx-auto relative test-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-8 w-8 mr-3"
              src="https://i.postimg.cc/vZMwcjK5/Web-Photo-Editor-removebg-preview.png"
              alt="logo"
            />
            <span className="text-2xl tracking-tight font-semibold">
              Smijo <span className="text-orange-500">_</span>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={
                    item.href === activeLink
                      ? "text-orange-500"
                      : "hover:text-orange-500"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-md"
            >
              Contact Me
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="hover:text-orange-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3  rounded-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
