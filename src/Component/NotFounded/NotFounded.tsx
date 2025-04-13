import React from 'react';
import notFound from '../../assets/sorry.gif';
const NotFounded = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center h-screen bg-gray-800 w-full">
      <img src={notFound} alt="try later" />
      <p className="text-white text-4xl font-bold">
        К сожалению ничего не найдено <br />
      </p>
    </div>
  );
};

export default NotFounded;
