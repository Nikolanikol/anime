import React from 'react';

import AnimeCard from './AnimeCard';
import Spinner from './Spinner/Spinner';
import { Pagination } from 'antd';
import NotFounded from './NotFounded/NotFounded';

interface Image {
  original: string;
  preview: string;
  x48: string;
  x96: string;
}
const AnimeCardList: React.FC<{
  loading: boolean;
  items: { name: string; id: number; image: Image }[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}> = ({ loading, items, currentPage, totalPages, handlePageChange }) => {
  if (loading) return <Spinner />;
  if (items.length === 0) return <NotFounded />;

  return (
    <div className="px-4 pt-3 bg-[#1E1E1E] ">
      <div className="mx-auto grid-cols-4 grid gap-x-3 gap-y-3">
        {items.map(({ name, id, image }) => {
          return (
            <AnimeCard
              key={id}
              name={name}
              id={id}
              image={image}
              title={name}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <Pagination
          defaultCurrent={currentPage}
          total={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AnimeCardList;
