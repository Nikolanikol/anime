import React from 'react';
import notFound from '../../assets/404.gif';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-background text-white">
      <div className="text-center">
        <img
          src={notFound}
          alt="404 Not Found"
          className="w-1/2 max-w-md mx-auto"
        />
        <h1 className="text-4xl font-bold mt-4">Страница не найдена</h1>
        <p className="text-gray-400 mt-2">
          К сожалению, запрашиваемая страница не существует.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
