import React, { FC } from 'react';
import AnimeCard from '../AnimeCard';
import { IMangaProps } from '../../pages/Reccomend/Reccomend';
interface MangaRowProps {
  data: IMangaProps[];
  title: string;
  titleColor?: 'text-white' | '';
}

const MangaRow: FC<MangaRowProps> = ({ data, title, titleColor }) => {
  return (
    <div>
      <h3 className={`font-bold   mb-4 text-4xl my-4 ${titleColor}`}>
        {title}
      </h3>
      <div className="slide  flex overflow-x-auto gap-4 scrollbar-hide scroll-my-0 overflow-y-hidden">
        {data.map((item) => {
          return (
            <AnimeCard
              key={item.id}
              name={item.name}
              image={item.image}
              id={item.id}
              title={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MangaRow;
