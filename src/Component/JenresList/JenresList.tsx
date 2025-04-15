import React from 'react';
import { Jenre } from '../../slices/JenreSlice/JenreSliceType';
import { setJenre } from '../../slices/MangaSlice/MangaSlice';
import { useDispatch } from 'react-redux';

interface JenresListProps {
  //   setItems: React.Dispatch<React.SetStateAction<Jenre[]>>;
  jenres: Jenre[];
  isJenreLoading: boolean;
}

const JenresList: React.FC<JenresListProps> = ({ jenres, isJenreLoading }) => {
  const dispatch = useDispatch();

  if (isJenreLoading) {
    return <div>Loading...</div>;
  }
  if (!jenres) return <div>Попробуй еще раз</div>;
  const handleClick = (id: number) => {
    dispatch(setJenre(id));
  };
  return (
    <div className="sidebar flex flex-row flex-wrap gap-x-1.5 gap-y-0.5 ">
      {jenres.map((jenre) => (
        <div
          key={jenre?.id}
          className="bg-[#1E1E1E] text-white mx-1 lg:my-1  rounded-lg  px-2 py-1 cursor-pointer"
          onClick={() => handleClick(jenre?.id)}
        >
          <h3 className="text-[10px] font-bold">{jenre?.russian}</h3>
        </div>
      ))}
    </div>
  );
};

export default JenresList;
