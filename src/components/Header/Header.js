import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
      <div className="sticky top-0 bg-white px-12 py-5 flex justify-center md:justify-between">
        <div className="hidden md:block font-bold font-sans text-xl text-gray-600 ">
          <Link to={"/"}></Link>
          Cripto Cafe
        </div>

        <div className="flex gap-4 text-xl">
          <CustomLink to={"/"}>Home</CustomLink>
          <CustomLink to={"/coins"}>Coins</CustomLink>
          <CustomLink to={"/contact"}>Contact</CustomLink>
          <CustomLink to={"/about"}>About</CustomLink>
        </div>
      </div>
    );
};

export default Header;