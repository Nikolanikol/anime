import React from 'react';
import notFound from '../../assets/sorry.gif';
const NotFounded = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-screen bg-gray-800 w-full">
      <img src={notFound} alt="try later" className="w-[300px]" />
      <p className="text-white text-xl lg:text-4xl font-bold">
        К сожалению ничего не найдено <br />
      </p>
    </div>
  );
};

export default NotFounded;
