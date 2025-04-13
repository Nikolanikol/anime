import React, { useEffect, useState } from 'react';
import { getAnimeList } from '../../api/axiosInstance';
import MangaRow from '../../Component/MangaRow/MangaRow';
export interface IMangaProps {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x48: string;
    x96: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  aired_on: string | null;
  released_on: string | null;
  episodes?: number;
  episodes_aired?: number;
}
type popularity =
  | 'popularity'
  | 'ranked'
  | 'status'
  | 'random'
  | 'kind'
  | 'aired_on';

const Reccomend = () => {
  const [popular, setPopular] = useState<IMangaProps[]>([]);
  const [ranked, setRanked] = useState<IMangaProps[]>([]);
  const [aired, setAired] = useState<IMangaProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (
      sortType: popularity,
      stateSetter: React.Dispatch<React.SetStateAction<IMangaProps[]>>,
    ) => {
      try {
        const response = await getAnimeList(20, 1, sortType);
        stateSetter(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    Promise.all([
      fetchData('popularity', setPopular),
      fetchData('ranked', setRanked),
      fetchData('aired_on', setAired),
    ])
      .then(() => setLoading(false))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  if (loading) <div>loading</div>;
  return (
    <div className="bg-[#1E1E1E] py-10 flex flex-col gap-y-11 ">
      <MangaRow data={popular} title={'Популярные'} titleColor="text-white" />
      <MangaRow data={ranked} title={'По рейтингу'} titleColor="text-white" />
      <MangaRow data={aired} title={'По дате релиза'} titleColor="text-white" />
    </div>
  );
};

export default Reccomend;
