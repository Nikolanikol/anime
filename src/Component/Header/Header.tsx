import React from 'react';
import { links } from '../../Router';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-manga.svg';
import { useSelector } from 'react-redux';
import { stat } from 'fs';
import { RootState } from '../../redux/store';
const Header = () => {
  const { isAuth, uid } = useSelector((state: RootState) => state.userReducer);
  return (
    <div className=" bg-[#1E1E1E] text-[#FFFFFF] ">
      <div className="px-[4] mx-4">
        <div className="    flex justify-between items-center px-4">
          <NavLink to={'/'}>
            {' '}
            <div className="logo flex gap-2 items-center">
              <img
                src={logo}
                alt="logo"
                className="h-full  w-[50px] lg:w-[100px]"
              />
              <span className="text-xl hidden md:block lg:text-4xl">
                MangaPoisk
              </span>
            </div>
          </NavLink>

          <div className="flex  gap-2 lg:gap-6 py-6 ">
            {links.map((link, i) => {
              if (i != links.length - 1) {
                return (
                  <NavLink
                    key={i}
                    to={link.path}
                    className="text-xs lg:text-3xl font-bold hover:text-gray-300"
                  >
                    {link.name}
                  </NavLink>
                );
              }
            })}
          </div>
          <div>
            {isAuth ? (
              <div>
                <NavLink to={`/profile/:${uid}`}>
                  {' '}
                  <div className="w-9 h-9 border-2 rounded-b-3xl bg-amber-500"></div>{' '}
                </NavLink>
                <button>Выйти</button>
              </div>
            ) : (
              <NavLink
                to={links[links.length - 1].path}
                className="text-xs lg:text-3xl font-bold hover:text-gray-300"
              >
                {links[links.length - 1].name}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
