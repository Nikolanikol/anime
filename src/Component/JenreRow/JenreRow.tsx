import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setJenre } from '../../slices/MangaSlice/MangaSlice';

export interface JenreProps {
  jenre: {
    id: number;
    name: string;
    russian: string;
    kind: string; // Например, "genre"
    entry_type: string;
  }[];
}
const JenreRow: FC<JenreProps> = ({ jenre }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jenreHandleClick = (id: number) => {
    dispatch(setJenre(id));
    navigate('/');
  };

  return (
    <div>
      <h3 className="text-4xl font-semibold mb-4">Жанры</h3>
      <ul className="flex flex-wrap gap-3">
        {jenre.map((genre) => (
          <li
            onClick={() => jenreHandleClick(genre.id)}
            key={genre.id}
            className="bg-gray-700 text-white px-4 py-2 rounded-full text-3xl cursor-pointer"
          >
            {genre.russian || genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JenreRow;
