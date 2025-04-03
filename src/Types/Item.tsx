export default interface Item {
  id: number;
  kind: string;
  name: string;
  russian: string;
  score: string;
  status: string;
  url: string;
  image: Image;
  aired_on: string;
}
interface Image {
  original: string;
  preview: string;
  x48: string;
  x96: string;
}
