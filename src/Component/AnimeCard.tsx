import React, { FC } from 'react';
import { Link } from 'react-router-dom';
interface AnimeCard {
  name: string;
  id: number;
  image: {
    preview: string;
  };
  title: string;
}
const AnimeCard: FC<AnimeCard> = ({ name, id, image, title }) => {
  return (
    <Link to={`/manga/${id}`}>
      <div className="hover:top-1 border-2 border-[#666666] rounded-2xl hover:border-4 bg-[#292929] transition-all lg:w-[200px] lg:h-[300px] w-[100px] h-[200px] flex flex-col justify-between  transform hover:rotate-3 hover:scale-105">
        <div className="p-2 flex flex-col items-center ">
          <div className="w-full h-[100px] lg:h-[170px] flex items-center justify-center">
            <img
              src={'https://shikimori.one' + image.preview}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="tagrow"></p>
          <p className="text-amber-100 lg:text-lg pt-2 line-clamp-2 text-xs text-center">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
