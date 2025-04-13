import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeById, getRoles, getSimilar } from '../../api/axiosInstance';
import NotFound from '../404/404';
import Spinner from '../../Component/Spinner/Spinner';
import { MangaByIdProps, Similar } from './MangaByIdType';
import { Role } from './MangaByIdType';
import MangaRow from '../../Component/MangaRow/MangaRow';
import { textPipe } from '../../utils/textPipe';
import JenreRow from '../../Component/JenreRow/JenreRow';
const MangaById = () => {
  const { id } = useParams();
  const [manga, setManga] = useState<MangaByIdProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState<Role[]>([]);
  const [similar, setSimilar] = useState<Similar[]>([]);
  const fetchManga = async () => {
    try {
      const response = await getAnimeById(id as unknown as number);
      const data: MangaByIdProps = await response;

      setManga(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных манги:', error);
      setLoading(false);
    }
  };
  //   const fetchRoles = async (id: number) => {
  //     try {
  //       const res: Role[] = await getRoles(id);
  //       setRoles(res);
  //     } catch (error) {
  //       console.error('Ошибка при загрузке ролей:', error);
  //     }
  //   };
  const fetchSimilar = async (id: number) => {
    try {
      const res = await getSimilar(id);
      setSimilar(res.data);
    } catch (error) {
      console.error('Ошибка при загрузке похожих:', error);
    }
    console.log('similar', similar);
  };
  useEffect(() => {
    Promise.all([fetchManga(), fetchSimilar(Number(id))]).finally(() =>
      setLoading(false),
    );
  }, [id]);
  if (!loading) console.log(similar);
  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Spinner />;
      </div>
    );
  }
  if (!manga) return <NotFound />;
  return (
    <div className="p-6 bg-dark-background text-black">
      {/* <h1 className="text-6xl font-bold mb-6 text-center">
            {manga.russian || manga.name}
        </h1> */}

      {/* Основная информация */}
      <div className="flex items-start justify-between gap-6">
        <img
          src={`https://shikimori.one${manga.image.original}`}
          alt={manga.name}
          className="w-64 h-auto rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-6xl font-semibold mb-4">{manga.name}</h2>
          <p className="text-3xl text-black">ID: {manga.id}</p>
          <p className="text-3xl text-black">
            Статус: {manga.status === 'released' ? 'Выпущено' : 'Неизвестно'}
          </p>
          <p className="text-3xl text-black">
            Оценка: {manga.score !== '0.0' ? manga.score : 'Нет оценки'}
          </p>
        </div>
      </div>

      <hr className="w-full h-2 my-7 border-gray-600" />

      {/* Описание */}
      <div className="mt-6">
        <h2 className="text-6xl font-bold mb-4">Описание</h2>
        <p className="text-black leading-relaxed text-3xl">
          {textPipe(manga.description) || 'Описание отсутствует'}
        </p>
      </div>

      {/* Информация */}
      <div className="mt-10">
        <h2 className="text-6xl font-bold mb-6">Информация о манге</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-4xl font-semibold mb-4">Общая информация</h3>
            <ul className="text-3xl text-black">
              <li>
                <strong>Тип:</strong> {manga.kind}
              </li>
              <li>
                <strong>Томов:</strong> {manga.volumes || 'Неизвестно'}
              </li>
              <li>
                <strong>Глав:</strong> {manga.chapters || 'Неизвестно'}
              </li>
              <li>
                <strong>Начало выпуска:</strong>{' '}
                {manga.aired_on || 'Неизвестно'}
              </li>
              <li>
                <strong>Конец выпуска:</strong>{' '}
                {manga.released_on || 'Неизвестно'}
              </li>
            </ul>
          </div>

          {/* Жанры */}
          <JenreRow jenre={manga.genres} />
          {/* <div>
            <h3 className="text-4xl font-semibold mb-4">Жанры</h3>
            <ul className="flex flex-wrap gap-3">
              {manga.genres.map((genre) => (
                <li
                  onClick={() => jenreHandleClick(genre.id)}
                  key={genre.id}
                  className="bg-gray-700 text-white px-4 py-2 rounded-full text-3xl cursor-pointer"
                >
                  {genre.russian || genre.name}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* Издатели */}
      <div className="mt-10">
        <h3 className="text-4xl font-semibold mb-4">Издатели</h3>
        <ul className="text-3xl text-black">
          {manga.publishers.length > 0 ? (
            manga.publishers.map((publisher) => (
              <li key={publisher.id}>{publisher.name}</li>
            ))
          ) : (
            <li>Издатели отсутствуют</li>
          )}
        </ul>
      </div>

      {/* Статистика */}
      <div className="mt-10">
        <h3 className="text-4xl font-semibold mb-4">Статистика</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-3xl font-semibold mb-2">Оценки</h4>
            <ul>
              {manga.rates_scores_stats.map((stat) => (
                <li key={stat.name} className="text-3xl">
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-2">Статусы</h4>
            <ul>
              {manga.rates_statuses_stats.map((stat) => (
                <li key={stat.name} className="text-3xl">
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <MangaRow title="Похожие произведения" data={similar} />
      </div>
    </div>
  );
};

export default MangaById;
