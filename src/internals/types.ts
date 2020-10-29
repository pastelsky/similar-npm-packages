export enum Weight {
  SMALL = 1,
  MID = 3,
  NORMAL = 5,
  HIGH = 7,
  MAX = 15,
}

export interface Tag {
  tag: string;
  weight: Weight;
}

export interface Category {
  name: string;
  tags: Tag[];
  similar: string[];
}

export interface Categories {
  [key: string]: Category;
}
