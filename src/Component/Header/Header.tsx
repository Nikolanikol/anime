import React from 'react';
import { links } from '../../Router';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-manga.svg';
const Header = () => {
  return (
    <div className=" bg-[#1E1E1E] text-[#FFFFFF] ">
      <div className="px-[4] mx-4">
        <div className="    flex justify-between items-center px-4">
          <NavLink to={'/'}>
            {' '}
            <div className="logo flex gap-2 items-center">
              <img src={logo} alt="logo" className="h-full w-[100px]" />
              <span className="text-5xl">MangaPoisk</span>
            </div>
          </NavLink>

          <div className="flex gap-6 py-6 ">
            {links.map((link, i) => {
              return (
                <NavLink
                  key={i}
                  to={link.path}
                  className=" text-3xl font-bold hover:text-gray-300"
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
