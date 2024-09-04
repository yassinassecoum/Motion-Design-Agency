import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footerContent mt-8">
      <div className="flex flex-col items-center  mb-4">
        <img
          loading="lazy"
          src={logo}
          className="w-[90px] min-h-[23px] mb-4 "
          alt="Agency Logo"
        />
        <div className="flex flex-col items-center lg:flex-row">
          <a href="" className="pointer mr-4">
            Acceuil
          </a>
          <a href="" className="pointer mr-4">
            Réalisations
          </a>
          <a href="" className="pointer mr-4">
            Methode
          </a>
          <a href="" className="pointer mr-4">
            Tarifs
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <span className="text-center text-[14px] mt-4 mb-2">
        2024 - L'agence 1600. All rights reserved -<br />
        <a>Mentions légales</a> - <a>Politiques de confidentialité</a>
      </span>
    </div>
  );
};

export default Footer;
