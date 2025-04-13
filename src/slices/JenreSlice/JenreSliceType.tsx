export interface Jenre {
  id: number;
  name: string;
  russian: string;
  kind: string; // Например, "genre"
  entry_type: string; // Например, "Manga"
}

export interface JenreStateType {
  jenres: Jenre[];
  isJenreLoading: boolean;
}
