import { useEffect, useState } from 'react';
import api from './api/axiosInstance';
import './App.css';
import Item from './Types/Item';
import { Link, Links } from 'react-router-dom';
const obj: Item = {
  id: 61169,
  image: {
    original: '/assets/globals/missing_original.jpg',
    preview: '/assets/globals/missing_preview.jpg',
    x48: '/assets/globals/missing_x48.jpg',
    x96: '/assets/globals/missing_x96.jpg',
  },
  kind: 'tv',
  name: 'Black Torch',
  russian: 'Чёрный факел',
  score: '0.0',
  status: 'anons',
  url: '/animes/61169-black-torch',
  aired_on: '2014-01-01',
};
function App() {
  const [items, setCount] = useState(0);
  console.log(import.meta.env.VITE_BASE_URL);
  const fetching = async () => {
    const responce = await api().get('animes');
    console.log(responce.data);
  };
  useEffect(() => {
    fetching();
  });
  return (
    <div>
      <h3>
        {obj.name} {obj.id}
      </h3>
      <img src={'https://shikimori.one' + obj.image.preview} alt="" />

      <Link>
        <div className="border-2 border-amber-300 p-2 flex flex-col max-w-[200px] rounded-2xl shadow-teal-400">
          <img
            src={'https://shikimori.one' + obj.image.preview}
            alt=""
            className="w-full "
          />
          <p>Title name</p>
        </div>
      </Link>
    </div>
  );
}

export default App;
