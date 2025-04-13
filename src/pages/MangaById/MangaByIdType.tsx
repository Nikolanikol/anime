export interface MangaByIdProps {
  id: number;
  name: string;
  russian: string | null; // Может быть пустым
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string; // Например, "manga"
  score: string; // Оценка в виде строки
  status: string; // Например, "released"
  volumes: number | null; // Может быть null
  chapters: number | null; // Может быть null
  aired_on: string | null; // Может быть null
  released_on: string | null; // Может быть null
  english: (string | null)[]; // Массив строк, может содержать null
  japanese: string[]; // Массив строк
  synonyms: string[]; // Массив строк
  license_name_ru: string | null; // Может быть null
  description: string | null; // Может быть null
  description_html: string | null; // Может быть null
  description_source: string | null; // Может быть null
  franchise: string | null; // Может быть null
  favoured: boolean; // Булево значение
  anons: boolean; // Булево значение
  ongoing: boolean; // Булево значение
  thread_id: number | null; // Может быть null
  topic_id: number | null; // Может быть null
  myanimelist_id: number | null; // Может быть null
  rates_scores_stats: {
    name: string;
    value: number;
  }[]; // Массив объектов
  rates_statuses_stats: {
    name: string;
    value: number;
  }[]; // Массив объектов
  licensors: string[]; // Массив строк
  genres: JenreProps[]; // Массив объектов
  publishers: {
    id: number;
    name: string;
  }[]; // Массив объектов
  user_rate: string | null; // Может быть null
}

export interface Role {
  roles: string[]; // Роли на английском
  roles_russian: string[]; // Роли на русском
  character: Character | null; // Может быть null
  person: Person; // Информация о человеке
}
export interface JenreProps {
  id: number;
  name: string;
  russian: string;
  kind: string; // Например, "genre"
  entry_type: string; // Например, "Manga"
}
interface Character {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
}

interface Person {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
}
// Типизация объекта манги
export interface Similar {
  id: number; // Уникальный идентификатор манги
  name: string; // Название на английском
  russian: string; // Название на русском
  image: {
    original: string; // Ссылка на оригинальное изображение
    preview: string; // Ссылка на превью изображения
    x96: string; // Ссылка на изображение 96x96
    x48: string; // Ссылка на изображение 48x48
  };
  url: string; // URL страницы манги
  kind: string; // Тип манги (например, "manga", "manhwa", "light_novel")
  score: string; // Оценка манги
  status: string; // Статус манги (например, "released", "ongoing", "paused")
  volumes: number; // Количество томов
  chapters: number; // Количество глав
  aired_on: string; // Дата начала выпуска
  released_on: string | null; // Дата окончания выпуска (может быть null)
}
