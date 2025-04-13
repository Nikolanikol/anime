export default interface MangaItem {
  id: number;
  kind: string;
  name: string;
  russian: string;
  score: string;
  status: string;
  url: string;
  image: Image;
  aired_on: string;
  released_on: string | null; // Может быть null
  volumes: number | null; // Может быть null
  chapters: number | null; // Может быть null
}

interface Image {
  original: string;
  preview: string;
  x48: string;
  x96: string;
}
