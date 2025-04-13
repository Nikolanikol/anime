import React from 'react';

import Jenres from '../pages/Jenres/Jenres';
import Login from '../pages/Login/Login';
import MyCatalog from '../pages/MyCatalog/MyCatalog';
import Reccomend from '../pages/Reccomend/Reccomend';
import MangaById from '../pages/MangaById/MangaById';
interface Route {
  path: string;
  component: React.ReactNode;
  exact: boolean;
}
interface Link {
  path: string;
  name: string;
}
export const routes: Route[] = [
  {
    path: '/jenres',
    component: <Jenres />,
    exact: true,
  },
  {
    path: '/login',
    component: <Login />,
    exact: true,
  },
  {
    path: '/',
    component: <MyCatalog />,
    exact: true,
  },
  {
    path: '/reccomend',
    component: <Reccomend />,
    exact: true,
  },
  {
    path: '/manga/:id',
    component: <MangaById />,
    exact: true,
  },
];
export const links: Link[] = [
  {
    path: '/jenres',
    name: 'Жанры',
  },
  {
    path: '/',
    name: 'Мой каталог',
  },
  {
    path: '/reccomend',
    name: 'Рекомендации',
  },
  {
    path: '/login',
    name: 'Войти',
  },
];
