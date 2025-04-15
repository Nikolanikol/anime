import React, { useEffect, useState } from 'react';
import AnimeCardList from '../../Component/AnimeCardList';
import JenresList from '../../Component/JenresList/JenresList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchMangaItems } from '../../slices/MangaSlice/MangaSlice';
import Spinner from '../../Component/Spinner/Spinner';
import { fetchJenres } from '../../slices/JenreSlice/JenreSlice';

const MyCatalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { items, isLoading, jenre } = useSelector(
    (state: RootState) => state.mangaReduser,
  );
  const { jenres, isJenreLoading } = useSelector(
    (state: RootState) => state.jenresReduser,
  );
  useEffect(() => {
    dispatch(fetchJenres());
  }, []);
  useEffect(() => {
    dispatch(fetchMangaItems({ limit: 20, page: currentPage, genre: jenre }));
  }, [currentPage, jenre]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page.toString());
  };

  if (isLoading) <Spinner />;
  return (
    <div className="flex pb-10  bg-[#1E1E1E] relative ">
      <div className="w-full lg:w-3/4">
        <AnimeCardList
          loading={isLoading}
          items={items}
          currentPage={currentPage}
          totalPages={1000}
          handlePageChange={handlePageChange}
        />
      </div>
      <aside className="w-1/4 bg-gray-800 text-white p-4 sticky top-0 h-screen overflow-hidden lg:block hidden ">
        <h2 className="text-xs lg:text-xl font-bold mb-4">Сайдбар</h2>
        <JenresList jenres={jenres} isJenreLoading={isJenreLoading} />
      </aside>
    </div>
  );
};

export default MyCatalog;

// const [items, setItems] = useState([]);
// const [loading, setLoading] = useState(true);
// const [currentPage, setCurrentPage] = useState<number>(() => {
//   const savedPage = localStorage.getItem('currentPage');
//   return savedPage ? Number(savedPage) : 1;
// });
// const [totalPages, setTotalPages] = useState(100);
// const handlePageChange = (page: number) => {
//   setCurrentPage(page);
//   localStorage.setItem('currentPage', page.toString());
// };
// const fetching = async (limit: number, page: number) => {
//   const responce = await getAnimeList(limit, page, 'popularity');

//   setItems(responce);
//   setLoading(false);
// };

// //   getAnimeList().then((res) => console.log(res));
// useEffect(() => {
//   if (localStorage.getItem('currentPage')) {
//     setCurrentPage(Number(localStorage.getItem('currentPage')));
//   }

//   fetching(20, currentPage);
// }, [currentPage]);
