import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="sticky top-0 bg-white px-12 py-5 flex justify-center md:justify-between">
        <div className="hidden md:block font-bold font-sans text-xl text-gray-600 ">
          <Link to={"/"}></Link>
          Cripto Cafe
        </div>

        <div className="flex gap-4 text-xl">
          <Link to={"/"}>Home</Link>
          <Link to={"/coins"}>Coins</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>
    );
};

export default Header;