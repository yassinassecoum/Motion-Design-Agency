import React, { useEffect, useRef, useState } from "react";
import notifIcon from "../assets/notif.svg";
import logo from "../assets/logo.svg";
import newImg from "../assets/newimg.svg";

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="mr-8 mb-3 relative font-medium transition-all duration-300 w-max hover:shadow-[inset_0_-9px_0_0_#fb6831] cursor-pointer"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#acceuil", text: "Acceuil" },
    { href: "#videos", text: "Réalisations" },
    { href: "#method", text: "Méthode" },
    { href: "#pricing", text: "Tarifs" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-[98%] md:max-w-[94%] 2xl:max-w-[1350px] w-full mx-auto py-6">
        <div className="rounded-[130px] px-10 py-6 shadow-[0_3px_10px_#211f5414] flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="pr-10 cursor-pointer">
              <img
                loading="lazy"
                src={logo}
                alt="Agency Logo"
                className="md:hidden w-[90px] min-h-[23px]"
              />
              <img
                loading="lazy"
                src={logo}
                alt="Agency Logo"
                className="hidden md:block"
              />
            </a>
            <div className="hidden lg:flex justify-end items-center">
              {navLinks.map((link, index) => (
                <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                  {link.text}
                  {index === 2 ? (
                    <img
                      loading="lazy"
                      className="absolute -top-[10px] h-[15px] -right-[15px]"
                      src={newImg}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <a
              className="border-[1.5px] border-black text-center rounded-[40px] px-8 py-4 text-lg font-medium leading-none transition-all duration-400 hover:bg-black hover:text-white"
              href="#rdv"
            >
              Prendre un rendez-vous
            </a>
            <img
              loading="lazy"
              className="border-4 border-white rounded-full w-[30px] -ml-[25px] -mt-[45px]"
              src={notifIcon}
              alt="Notification"
            />
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => {
              if (isMenuOpen) {
                // closeMenu();
              } else {
                toggleMenu();
              }
            }}
            aria-label="Toggle menu"
          >
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
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden flex flex-col mt-6 border border-gray-300 rounded-[28px] p-6"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-lg font-medium text-gray-800 hover:text-black transition-colors duration-300"
              >
                {link.text}
                {index === 2 ? (
                  <img
                    loading="lazy"
                    className="absolute -top-[10px] h-[15px] -right-[15px]"
                    src={newImg}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </NavLink>
            ))}
            <NavLink
              className="border border-black text-center rounded-full px-10 py-4 text-lg font-medium leading-none transition-all duration-400 hover:bg-black hover:text-white mt-6"
              href="#rdv"
              onClick={closeMenu}
            >
              Prendre un rendez-vous
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
