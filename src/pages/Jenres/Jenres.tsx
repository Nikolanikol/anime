import React, { useEffect } from 'react';
import { fetchJenres } from '../../slices/JenreSlice/JenreSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Spinner from '../../Component/Spinner/Spinner';
import { AppDispatch } from '../../redux/store';
import { setJenre } from '../../slices/MangaSlice/MangaSlice';
import { useNavigate } from 'react-router-dom';

const Jenres = () => {
  const dispatch = useDispatch<AppDispatch>();
  const naigate = useNavigate();
  const { jenres, isJenreLoading } = useSelector(
    (state: RootState) => state.jenresReduser,
  );
  const handleClick = (id: number) => {
    dispatch(setJenre(id));
    naigate('/');
  };
  useEffect(() => {
    dispatch(fetchJenres());
  }, []);
  if (isJenreLoading) <Spinner />;
  return (
    <div className="bg-gray-800 h-[100vh] overflow-hidden">
      <div className=" items-center justify-center h-full">
        <div className="py-10">
          <h1 className="text-white text-6xl mb-4 font-bold mx-auto text-center">
            По тегам
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 gap-y-5 w-full px-4 justify-center text-3xl">
          {jenres.map((jenre) => (
            <div
              key={jenre.id}
              className="bg-[#1E1E1E] text-white rounded-lg px-5 py-3 flex flex-col items-center cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out transform  hover:scale-105"
              onClick={() => handleClick(jenre.id)}
            >
              <h3 className=" font-bold text-center">{jenre.russian}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jenres;
